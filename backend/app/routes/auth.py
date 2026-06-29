from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app import db
from app.models import User
from app.utils import send_verification_email
from datetime import datetime, timedelta
import random
import string

auth_bp = Blueprint('auth', __name__)

def generate_verification_code():
    return ''.join(random.choices(string.digits, k=6))

@auth_bp.route('/register/initiate', methods=['POST'])
def initiate_registration():
    try:
        data = request.get_json()
        email = data.get('email')
        
        if not email:
            return jsonify({'error': 'Email is required'}), 400
        
        existing_user = User.query.filter_by(email=email.lower()).first()
        if existing_user and existing_user.is_verified:
            return jsonify({'error': 'Email already registered and verified'}), 409
        
        code = generate_verification_code()
        
        if existing_user:
            existing_user.verification_code = code
            existing_user.code_expiry = datetime.utcnow() + timedelta(minutes=10)
            if data.get('firstName'):
                existing_user.first_name = data['firstName']
            if data.get('lastName'):
                existing_user.last_name = data['lastName']
            if data.get('phone'):
                existing_user.phone = data['phone']
            if data.get('password'):
                existing_user.set_password(data['password'])
            db.session.commit()
        else:
            temp_user = User(
                first_name=data.get('firstName', ''),
                last_name=data.get('lastName', ''),
                email=email.lower(),
                phone=data.get('phone', ''),
                county=data.get('county', ''),
                is_active=False,
                is_verified=False,
                verification_code=code,
                code_expiry=datetime.utcnow() + timedelta(minutes=10)
            )
            if data.get('password'):
                temp_user.set_password(data['password'])
            db.session.add(temp_user)
            db.session.commit()
        
        send_verification_email(email, code)
        
        return jsonify({
            'message': 'Verification code sent to your email',
            'email': email,
            'expiresIn': '10 minutes'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@auth_bp.route('/register/verify', methods=['POST'])
def verify_and_register():
    try:
        data = request.get_json()
        email = data.get('email')
        code = data.get('code')
        
        if not email or not code:
            return jsonify({'error': 'Email and verification code required'}), 400
        
        user = User.query.filter_by(email=email.lower()).first()
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if not user.verification_code or user.verification_code != code:
            return jsonify({'error': 'Invalid verification code'}), 400
        
        if user.code_expiry and datetime.utcnow() > user.code_expiry:
            return jsonify({'error': 'Verification code expired'}), 400
        
        user.is_active = True
        user.is_verified = True
        user.verification_code = None
        user.code_expiry = None
        
        if data.get('firstName'):
            user.first_name = data['firstName']
        if data.get('lastName'):
            user.last_name = data['lastName']
        if data.get('phone'):
            user.phone = data['phone']
        if data.get('password'):
            user.set_password(data['password'])
        
        db.session.commit()
        
        access_token = create_access_token(
            identity=user.id,
            additional_claims={'role': user.role}
        )
        
        return jsonify({
            'message': 'Registration successful',
            'access_token': access_token,
            'user': user.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        
        if not data.get('email') or not data.get('password'):
            return jsonify({'error': 'Email and password required'}), 400
        
        user = User.query.filter_by(email=data['email'].lower()).first()
        
        if not user:
            return jsonify({'error': 'Invalid credentials'}), 401
        
        if not user.check_password(data['password']):
            return jsonify({'error': 'Invalid credentials'}), 401
        
        if not user.is_verified:
            return jsonify({'error': 'Please verify your email first'}), 403
        
        if not user.is_active:
            return jsonify({'error': 'Account is deactivated'}), 403
        
        access_token = create_access_token(
            identity=user.id,
            additional_claims={'role': user.role}
        )
        
        return jsonify({
            'access_token': access_token,
            'user': user.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@auth_bp.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        return jsonify({'user': user.to_dict()}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@auth_bp.route('/users', methods=['GET'])
def get_all_users():
    try:
        users = User.query.all()
        return jsonify({
            'total': len(users),
            'users': [user.to_dict() for user in users]
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
