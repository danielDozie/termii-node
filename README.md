<p align="center">
    <img title="Termii" src="https://termii.com/assets/images/logo.png"/>
</p>
<div align="center" width="100%">

[![GitHub version](https://badge.fury.io/gh/danielDozie%2Ftermii-node.svg)](https://badge.fury.io/gh/danielDozie%2Ftermii-node)
[![npm version](https://badge.fury.io/js/termii-node.svg)](https://badge.fury.io/js/termii-node)
[![](https://data.jsdelivr.com/v1/package/npm/termii-node/badge)](https://www.jsdelivr.com/package/npm/termii-node)

</div>

## Termii Node Package
Termii-node helps you set up, test, and manage your Termii integration directly in your Node.js App. The Idea here is to simplify the process of interacting with the termii endpoints with ease.


## Installation

You can install the package via NPM or Yarn:

```bash
npm install termii-node
```
OR
```bash
yarn add termii-node
```


## Usage:

### Import your use case via common vocabularies
- Example `import {getBalance} from 'termii-node';`


#### Common vocabularies available for import 

- getBalance
- getMessageHistory
- getNumberStatus
- searchPhoneNumber
- getSenderId
- requestSenderId
- sendMessage
- sendMessageBulk
- sendToken
- sendVoiceCall
- sendInAppToken
- verifyToken


##### <p style="color:#f00">Note: This termii node package ACCEPTS an object as parameter and returns a promise. The object key value pair is based on termii's own parameters.</p>
- e.g: `sendMessage({
    api_key: process.env.API_KEY,
    to: '2347052980452',
    from: 'TERMI02',
    channel: 'generic',
    sms: 'Hey chief, this is just a simple sms from termii'
})`


###### Every method call MUST be passed your termii API KEY. Hence, you can either set it directly or as a variable (Not recommended) as it can be exposed to the public. 
###### The recommended way is to set it in your environment variables and call via `process.env.API_KEY` (Highly recommended)
###  Check your balance on Termii
- You can check your termii balance.
- Run `getBalance()` and pass appropriate params

### Reports for messages sent across the sms, voice & whatsapp channels
- You can check reports for messages sent across the sms, voice & whatsapp channels.
- Run `getMessageHistory()` and pass appropriate params

### Detect if a number is fake or has ported to a new network
- You can check if a number is fake or has ported to a new network.
- Run `getNumberStatus() ` and pass appropriate params

### Verify phone numbers and automatically detect their status
- You can verify phone numbers and automatically detect their status.
- Run `searchPhoneNumber() ` and pass appropriate params

### Retrieve the status of all registered sender ID
- You can retrieve the status of all registered sender ID.
- Run `getSenderId()` and pass appropriate params

### Request a new sender ID
- You can request a new sender ID.
- Run `requestSenderId()` and pass appropriate params

### Send Message
- You can send a message.
- Run `sendMessage()` and pass appropriate params

### Send Bulk Message
- You can send bulk messages.
- Run `sendMessageBulk()` and pass appropriate params. In this case, the the receiver is an array of strings.

### Send OTP Token
- You can send OTP Token
- Run `sendToken()` and pass appropriate params

### Send Voice OTP TOken
- You can send OTP Token
- Run `sendVoiceToken()` and pass appropriate params

### Send Voice Call
- You can send OTP
- Run ` sendVoiceCall()` and pass appropriate params

### OTP Validation
- You can verify or validate OTP
- Run `verifyToken() ` pass appropriate params

### Send In-App OTP
- You can send In-App OTP
- Run `sendInAppToken()` and pass appropriate params



## Credits

-   [danielDozie](https://github.com/danieldozie)


## License

The MIT License (MIT). Please see [License File](license.md) for more information.
