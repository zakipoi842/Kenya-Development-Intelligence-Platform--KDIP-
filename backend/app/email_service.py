import os
import resend

# Initialize Resend
resend.api_key = os.getenv('RESEND_API_KEY', '')

def send_verification_email(email, code):
    """Send verification email using Resend"""
    
    if not resend.api_key:
        print("⚠️ RESEND_API_KEY not set. Please sign up at resend.com")
        print(f"📧 Verification code for {email}: {code}")
        return False
    
    html_content = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 10px;">
        <div style="text-align: center; padding: 20px; background: #1B4D3E; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">KDIP</h1>
            <p style="color: #a7f3d0; margin: 5px 0;">Kenya Development Intelligence Platform</p>
        </div>
        <div style="padding: 30px; background: white; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1B4D3E; margin-top: 0;">Email Verification</h2>
            <p style="color: #4b5563; font-size: 16px;">Your verification code is:</p>
            <div style="text-align: center; padding: 20px; margin: 20px 0; background: #f3f4f6; border-radius: 8px;">
                <span style="font-size: 32px; font-weight: bold; color: #1B4D3E; letter-spacing: 8px;">{code}</span>
            </div>
            <p style="color: #6b7280; font-size: 14px;">Code expires in <strong>10 minutes</strong></p>
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">&copy; 2024 KDIP</p>
        </div>
    </div>
    """
    
    try:
        params = {
            "from": "KDIP <onboarding@resend.dev>",
            "to": [email],
            "subject": "Your KDIP Verification Code",
            "html": html_content,
        }
        resend.Emails.send(params)
        print(f"✅ Verification email sent to {email}")
        return True
    except Exception as e:
        print(f"❌ Failed: {str(e)}")
        print(f"📧 Code for {email}: {code}")
        return False
