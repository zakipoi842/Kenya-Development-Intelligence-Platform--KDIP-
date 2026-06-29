from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db
from app.models import User, Project, Budget, Impact

user_bp = Blueprint('user', __name__)

@user_bp.route('/dashboard', methods=['GET'])
@jwt_required()
def get_dashboard():
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        return jsonify({
            'totalProjects': 0,
            'ongoingProjects': 0,
            'completedProjects': 0,
            'delayedProjects': 0,
            'totalBudget': 'KES 0',
            'utilizedBudget': 'KES 0',
            'utilizationRate': 0,
            'impactScore': 78,
            'satisfaction': 85,
            'topSector': 'Infrastructure',
            'sectorStats': [],
            'monthlyProgress': [],
            'countyStats': [],
            'budgetBySector': [],
            'recentProjects': []
        }), 200
        
    except Exception as e:
        print("Dashboard error:", str(e))
        return jsonify({'error': str(e)}), 500
