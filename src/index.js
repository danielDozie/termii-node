"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.sendInAppToken = exports.sendVoiceCall = exports.sendVoiceToken = exports.sendToken = exports.sendMessageBulk = exports.sendMessage = exports.requestSenderId = exports.getSenderId = exports.searhPhoneNumber = exports.getNumberStatus = exports.getMessageHistory = exports.getBalance = void 0;
const base_url = 'https://api.ng.termii.com';
function getBalance({ api_key }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${base_url}/api/get-balance?api_key=${api_key}`);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getBalance = getBalance;
const getMessageHistory = ({ api_key }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sms/inbox?api_key=${api_key}`);
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getMessageHistory = getMessageHistory;
const getNumberStatus = ({ api_key, phone_number, country_code }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/insight/number/query?phone_number=${phone_number}&api_key=${api_key}&country_code=${country_code}`);
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getNumberStatus = getNumberStatus;
const searhPhoneNumber = ({ api_key, phone_number }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/check/dnd?api_key=${api_key}&phone_number=${phone_number}`);
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.searhPhoneNumber = searhPhoneNumber;
const getSenderId = ({ api_key }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sender-id?api_key=${api_key}`);
        const data = yield response.json();
        return data.data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getSenderId = getSenderId;
const requestSenderId = ({ new_sender_id, id_usecase, api_key, company_name }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sender-id/request`, {
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
        });
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.requestSenderId = requestSenderId;
const sendMessage = ({ sms, to, from, channel, media_url, media_caption, api_key }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sms/send`, {
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
        });
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendMessage = sendMessage;
const sendMessageBulk = ({ sms, to, from, channel, media_url, media_caption, api_key }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sms/send/bulk`, {
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
        });
        const data = yield response.json();
        return data.message;
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendMessageBulk = sendMessageBulk;
const sendToken = ({ api_key, message_type, to, from, channel, pin_attempts, pin_time_to_live, pin_length, pin_placeholder, message_text }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sms/otp/send`, {
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
        });
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendToken = sendToken;
const sendVoiceToken = ({ api_key, pin_attempts, pin_time_to_live, pin_length, phone_number }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sms/otp/send/voice`, {
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
        });
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendVoiceToken = sendVoiceToken;
const sendVoiceCall = ({ api_key, phone_number }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sms/otp/call`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "api_key": api_key,
                "phone_number": phone_number,
                "code": Math.ceil(Math.random() * 999999) + 1
            })
        });
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendVoiceCall = sendVoiceCall;
const sendInAppToken = ({ api_key, phone_number, pin_time_to_live, pin_length, pin_attempts }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sms/otp/generate`, {
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
        });
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendInAppToken = sendInAppToken;
const verifyToken = ({ api_key, pin_id, otp_code }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${base_url}/api/sms/otp/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "api_key": api_key,
                "pin_id": pin_id,
                "pin": otp_code
            })
        });
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.verifyToken = verifyToken;
