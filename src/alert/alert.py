from twilio.rest import Client
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def send_sms_alert(account_sid, auth_token, from_number, to_number, message):
    try:
        # Initialize the Twilio client
        client = Client(account_sid, auth_token)

        # Send the SMS
        client.messages.create(
            body=message,
            from_=from_number,
            to=to_number
        )

        print("SMS alert sent successfully!")

    except Exception as e:
        print(f"Error sending SMS alert: {str(e)}")

@app.route('/send-alert', methods=['POST'])
def handle_alert():
    if request.method == 'POST':
        data = request.get_json()
        message = data.get('message')
        numbers = data.get('numbers')
        # Example usage
        account_sid = "AC56fea2b43606d840f383ec00f1a0b540"
        auth_token = "efb6eeee98bccf8e4f41dfa7655123da"
        from_number = "+12407927032"  # Twilio Sandbox number provided during the trial
        to_number = "9816443545"  # Recipient's phone number
        for i in numbers:
            send_sms_alert(account_sid, auth_token, from_number, i, message)
        return jsonify({'success': True}), 200
    return jsonify({'error': 'Method not allowed'}), 405

if __name__ == '__main__':
    app.run(debug=True)
