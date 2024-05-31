import twilio from "twilio";
import "dotenv/config";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Array of Twilio phone numbers
const twilioPhoneNumbers = [
  /* Add your Twilio phone numbers here */
];

// Phone number to call.
const phoneNumberToCall = "+11111111111"; // Replace with the phone number you want to call

// Create a Twilio client
const client = twilio(accountSid, authToken);

// Function to make a phone call
async function makePhoneCall(fromPhoneNumber, toPhoneNumber) {
  try {
    await client.calls.create({
      url: process.env.URL, // URL for TwiML instructions
      to: toPhoneNumber,
      from: fromPhoneNumber,
    });
    console.log(`Call from ${fromPhoneNumber} to ${toPhoneNumber} initiated.`);
  } catch (error) {
    console.error(
      `Error making call from ${fromPhoneNumber} to ${toPhoneNumber}:`,
      error,
    );
  }
}

// Iterate over the array of Twilio phone numbers and make phone calls
twilioPhoneNumbers.forEach((twilioPhoneNumber) => {
  makePhoneCall(twilioPhoneNumber, phoneNumberToCall);
});
