# backend/run.py
from app import create_app

app = create_app()

if __name__ == '__main__':
    print("=" * 50)
    print("🚀 KDIP Backend Server")
    print("=" * 50)
    print("📍 Server running at: http://localhost:5000")
    print("📊 API Health: http://localhost:5000/api/health")
    print("🔐 Auth API: http://localhost:5000/api/auth")
    print("=" * 50)
    print("Press CTRL+C to stop the server")
    print("=" * 50)
    
    app.run(debug=True, port=5000, host='0.0.0.0')