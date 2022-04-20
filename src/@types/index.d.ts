declare module 'index' {
  export * from './src/index';
}
type GetBalance = {
    api_key: string
}
type GetMessageHistory = {
    api_key: string
}
type GetNumberStatus = {
    api_key: string
    phone_number: string
    country_code: string
}
type SearchPhone = {
    api_key: string
    phone_number: string
}
type GetSenderId = {
    api_key: string
}
type RequestSenderId = {
    new_sender_id: string
    id_usecase: string
    api_key: string
    company_name: string
}
type SendMessage = {
    api_key: string
    sms: string
    from: string
    to: string
    channel: string
    media_url?: string
    media_caption?: string
}
type SendMessageBulk = {
    api_key: string
    sms: string
    from: string
    to: string
    channel: string
    media_url?: string
    media_caption?: string
}
type SendToken = {
    api_key: string
    to: string
    from: string
    channel: string
    message_type: string
    pin_attempts: number
    pin_time_to_live: number
    pin_length: number
    pin_placeholder: string
    message_text: string
}
type SendVoiceToken = {
    api_key: string
    pin_attempts: number
    pin_time_to_live: number
    pin_length: number
    phone_number: string
}
type SendVoiceCall = {
    api_key: string
    phone_number: string
}
type SendInAppToken = {
    api_key: string
    phone_number: string
    pin_attempts: number
    pin_time_to_live: number
    pin_length: number
}
type VerifyToken = {
    api_key: string
    pin_id: string
    otp_code: string
}
type TermiiFunction = (...params: Balance | History | NumberStatus | SearchPhone | GetSenderId | RequestSenderId | SendMessage | SendMessageBulk | SendToken |SendVoiceToken | SendVoiceCall | SendInAppToken | VerifyToken) => void