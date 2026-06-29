from datetime import datetime, timedelta
from app import db
import random
import string

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(20))
    county = db.Column(db.String(50))
    password_hash = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(20), default='user')
    is_active = db.Column(db.Boolean, default=False)
    is_verified = db.Column(db.Boolean, default=False)
    verification_code = db.Column(db.String(10))
    code_expiry = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def set_password(self, password):
        from flask_bcrypt import Bcrypt
        bcrypt = Bcrypt()
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
    
    def check_password(self, password):
        from flask_bcrypt import Bcrypt
        bcrypt = Bcrypt()
        return bcrypt.check_password_hash(self.password_hash, password)
    
    def generate_verification_code(self):
        self.verification_code = ''.join(random.choices(string.digits, k=6))
        self.code_expiry = datetime.utcnow() + timedelta(minutes=10)
        return self.verification_code
    
    def verify_code(self, code):
        if not self.verification_code or not self.code_expiry:
            return False
        if datetime.utcnow() > self.code_expiry:
            return False
        return self.verification_code == code
    
    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'email': self.email,
            'phone': self.phone,
            'county': self.county,
            'role': self.role,
            'isActive': self.is_active,
            'isVerified': self.is_verified,
            'createdAt': self.created_at.isoformat() if self.created_at else None
        }

class Project(db.Model):
    __tablename__ = 'projects'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    county = db.Column(db.String(50), nullable=False)
    sector = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(20), default='Ongoing')
    progress = db.Column(db.Integer, default=0)
    budget = db.Column(db.String(50))
    utilized = db.Column(db.String(50))
    start_date = db.Column(db.String(20))
    end_date = db.Column(db.String(20))
    description = db.Column(db.Text)
    contractor = db.Column(db.String(100))
    image = db.Column(db.String(200))
    beneficiaries = db.Column(db.Integer, default=0)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'county': self.county,
            'sector': self.sector,
            'status': self.status,
            'progress': self.progress,
            'budget': self.budget,
            'utilized': self.utilized,
            'startDate': self.start_date,
            'endDate': self.end_date,
            'description': self.description,
            'contractor': self.contractor,
            'image': self.image,
            'beneficiaries': self.beneficiaries
        }

class Budget(db.Model):
    __tablename__ = 'budgets'
    
    id = db.Column(db.Integer, primary_key=True)
    sector = db.Column(db.String(50), nullable=False)
    county = db.Column(db.String(50))
    allocated = db.Column(db.String(50))
    disbursed = db.Column(db.String(50))
    utilized = db.Column(db.String(50))
    percentage = db.Column(db.Float)
    utilization_rate = db.Column(db.Float)
    projects_count = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'sector': self.sector,
            'county': self.county,
            'allocated': self.allocated,
            'disbursed': self.disbursed,
            'utilized': self.utilized,
            'percentage': self.percentage,
            'utilizationRate': self.utilization_rate,
            'projectsCount': self.projects_count
        }

class Impact(db.Model):
    __tablename__ = 'impacts'
    
    id = db.Column(db.Integer, primary_key=True)
    county = db.Column(db.String(50), nullable=False)
    rank = db.Column(db.Integer)
    impact_score = db.Column(db.Float)
    projects_completed = db.Column(db.Integer)
    beneficiaries = db.Column(db.String(20))
    jobs_created = db.Column(db.Integer)
    satisfaction = db.Column(db.Float)
    trend = db.Column(db.String(10))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'county': self.county,
            'rank': self.rank,
            'impactScore': self.impact_score,
            'projectsCompleted': self.projects_completed,
            'beneficiaries': self.beneficiaries,
            'jobsCreated': self.jobs_created,
            'satisfaction': self.satisfaction,
            'trend': self.trend
        }
