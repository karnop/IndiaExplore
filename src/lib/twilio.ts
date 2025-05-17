// lib/twilio.ts
import Twilio from "twilio";

const { TWILIO_ACCOUNT_SID, TWILIO_API_KEY, TWILIO_API_SECRET } = process.env;
const client = Twilio(TWILIO_API_KEY, TWILIO_API_SECRET, { accountSid: TWILIO_ACCOUNT_SID });

export function createAccessToken(identity: string, grants: any[]) {
    const AccessToken = Twilio.jwt.AccessToken;
    const token = new AccessToken(
        TWILIO_ACCOUNT_SID!,
        TWILIO_API_KEY!,
        TWILIO_API_SECRET!,
        { identity }
    );
    grants.forEach((g) => token.addGrant(g));
    return token.toJwt();
}
