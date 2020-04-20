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


## Create a new project with the template

1. Install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart#install-twilio-cli)
2. Install the [serverless toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started)

```shell
twilio plugins:install @twilio-labs/plugin-serverless
```

3. Initiate a new project

```
twilio serverless:init example --template=2-way-sms-forwarding && cd verify-sample
```

4. Start the server with the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart):

```
twilio serverless:start
```

5. Open the web page at https://localhost:3000/index.html and enter your phone number to test

ℹ️ Check the developer console and terminal for any errors, make sure you've set your environment variables.

## Deploying

Deploy your functions and assets with either of the following commands. Note: you must run these commands from inside your project folder. [More details in the docs.](https://www.twilio.com/docs/labs/serverless-toolkit)

With the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart):

```
twilio serverless:deploy
```
