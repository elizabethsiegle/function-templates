# 2-way-sms-forwarding

Mask a phone # and get texts forwarded to the number and also forward messages from your number through the Twilio # as a proxy

## Pre-requisites

### Environment variables

This project requires some environment variables to be set. To keep your tokens and secrets secure, make sure to not commit the `.env` file in git. When setting up the project with `twilio serverless:init ...` the Twilio CLI will create a `.gitignore` file that excludes `.env` from the version history.

In your `.env` file, set the following values:

| Variable          | Meaning                                                                                                                                                              |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MY_PERSONAL_PHONE_NUMBER` | The number you want to forward incoming messages to and send messages through the Twilio proxy number from [in E.164 format](https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers) | 


### Function Parameters

This Function expects the incoming request to be a messaging webhook. The parameters that will be used are `From` and `Body`.
