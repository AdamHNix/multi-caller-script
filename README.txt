# Twilio Phone Call Application

This application uses the Twilio API to make phone calls.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Environment Variables

The application uses the following environment variables:

- `TWILIO_ACCOUNT_SID`: Your Twilio Account SID.
- `TWILIO_AUTH_TOKEN`: Your Twilio Auth Token.
- `URL`: The URL for TwiML instructions.

## Usage

1. Add your Twilio phone numbers to the `twilioPhoneNumbers` array in the `index.js` file.
2. Replace `phoneNumberToCall` in the `index.js` file with the phone number you want to call.
3. Run `node index.js` to start the application.

## Functionality

The application creates a Twilio client using your account SID and auth token. It then iterates over the array of Twilio phone numbers and makes a phone call to the specified phone number.

## Error Handling

If there's an error while making a phone call, the error will be logged to the console.