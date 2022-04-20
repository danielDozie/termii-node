const base_url = 'https://api.ng.termii.com'
export async function getBalance({ api_key }: GetBalance): Promise<TermiiFunction | undefined> {
    try {
        const response = await fetch(`${base_url}/api/get-balance?api_key=${api_key}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
export const getMessageHistory = async ({ api_key }: GetMessageHistory): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(`${base_url}/api/sms/inbox?api_key=${api_key}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error);
    }
}
export const getNumberStatus = async ({ api_key, phone_number, country_code }: GetNumberStatus) => {
    try {
        const response = await fetch(`${base_url}/api/insight/number/query?phone_number=${phone_number}&api_key=${api_key}&country_code=${country_code}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
export const searhPhoneNumber = async ({ api_key, phone_number }: SearchPhone): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(`${base_url}/api/check/dnd?api_key=${api_key}&phone_number=${phone_number}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
export const getSenderId = async ({ api_key }: GetSenderId): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(
            `${base_url}/api/sender-id?api_key=${api_key}`
        );
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
};
export const requestSenderId = async ({ new_sender_id, id_usecase, api_key, company_name }: RequestSenderId): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(
            `${base_url}/api/sender-id/request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: api_key,
                sender_id: new_sender_id,
                usecase: id_usecase,
                company: company_name
            })
        }
        );
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}
export const sendMessage = async ({ sms, to, from, channel, media_url, media_caption, api_key }: SendMessage): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(
            `${base_url}/api/sms/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "to": to,
                "from": from,
                "sms": sms,
                "type": "plain",
                "api_key": api_key,
                "channel": channel,
                "media": {
                    "url": media_url,
                    "caption": media_caption
                }
            })
        }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const sendMessageBulk = async ({ sms, to, from, channel, media_url, media_caption, api_key }: SendMessageBulk): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(
            `${base_url}/api/sms/send/bulk`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "to": to,
                "from": from,
                "sms": sms,
                "type": "plain",
                "api_key": api_key,
                "channel": channel,
                "media": {
                    "url": media_url,
                    "caption": media_caption
                }
            })
        }
        );
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.log(error);
    }
}
export const sendToken = async ({ api_key, message_type, to, from, channel, pin_attempts, pin_time_to_live, pin_length, pin_placeholder, message_text }: SendToken): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(
            `${base_url}/api/sms/otp/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "api_key": api_key,
                "message_type": message_type,
                "to": to,
                "from": from,
                "channel": channel,
                "pin_attempts": pin_attempts,
                "pin_time_to_live": pin_time_to_live,
                "pin_length": pin_length,
                "pin_placeholder": pin_placeholder,
                "message_text": message_text,
                "pin_type": message_type
            })
        }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const sendVoiceToken = async ({ api_key, pin_attempts, pin_time_to_live, pin_length, phone_number }: SendVoiceToken): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(
            `${base_url}/api/sms/otp/send/voice`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "api_key": api_key,
                "phone_number": phone_number,
                "pin_attempts": pin_attempts,
                "pin_time_to_live": pin_time_to_live,
                "pin_length": pin_length,
            })
        }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const sendVoiceCall = async ({ api_key, phone_number }: SendVoiceCall): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(
            `${base_url}/api/sms/otp/call`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "api_key": api_key,
                "phone_number": phone_number,
                "code": Math.ceil(Math.random() * 999999) + 1
            })
        }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const sendInAppToken = async ({ api_key, phone_number, pin_time_to_live, pin_length, pin_attempts }: SendInAppToken): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(
            `${base_url}/api/sms/otp/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "api_key": api_key,
                "pin_type": "NUMERIC",
                "phone_number": phone_number,
                "pin_attempts": pin_attempts,
                "pin_time_to_live": pin_time_to_live,
                "pin_length": pin_length
            })
        }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const verifyToken = async ({ api_key, pin_id, otp_code }: VerifyToken): Promise<TermiiFunction | undefined> => {
    try {
        const response = await fetch(
            `${base_url}/api/sms/otp/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "api_key": api_key,
                "pin_id": pin_id,
                "pin": otp_code
            })
        }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
