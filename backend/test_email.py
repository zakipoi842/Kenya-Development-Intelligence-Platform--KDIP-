import os
from flask import Flask
from flask_mail import Mail, Message
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

mail = Mail(app)

def send_test_email():
    with app.app_context():
        try:
            msg = Message(
                subject='KDIP - Test Email',
                recipients=['zakariyeali351@gmail.com'],
                body='This is a test email from KDIP!'
            )
            mail.send(msg)
            print("✅ Test email sent successfully!")
            return True
        except Exception as e:
            print(f"❌ Error: {str(e)}")
            return False

if __name__ == '__main__':
    send_test_email()
