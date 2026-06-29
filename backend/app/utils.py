from flask_mail import Message
from app import mail

def send_verification_email(email, code):
    try:
        msg = Message(
            subject='KDIP - Your Verification Code',
            recipients=[email],
            html=f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc;">
                <div style="text-align: center; padding: 20px; background: #1B4D3E; border-radius: 10px 10px 0 0;">
                    <h1 style="color: white; margin: 0;">KDIP</h1>
                    <p style="color: #a7f3d0; margin: 5px 0;">Kenya Development Intelligence Platform</p>
                </div>
                <div style="padding: 30px; background: white; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
                    <h2 style="color: #1B4D3E; margin: 0 0 10px 0;">Email Verification</h2>
                    <p style="color: #4b5563; font-size: 16px;">Your verification code is:</p>
                    <div style="text-align: center; padding: 20px; margin: 20px 0; background: #f3f4f6; border-radius: 8px;">
                        <span style="font-size: 36px; font-weight: bold; color: #1B4D3E; letter-spacing: 10px;">{code}</span>
                    </div>
                    <p style="color: #6b7280; font-size: 14px;">⏰ This code expires in <strong>10 minutes</strong></p>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                    <p style="color: #9ca3af; font-size: 12px; text-align: center;">&copy; 2024 KDIP</p>
                </div>
            </div>
            """
        )
        mail.send(msg)
        print(f"✅ Verification email sent to {email}")
        return True
    except Exception as e:
        print(f"❌ Failed to send email: {str(e)}")
        return False
