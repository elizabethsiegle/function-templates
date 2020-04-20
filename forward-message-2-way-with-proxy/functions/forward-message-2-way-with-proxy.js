exports.handler = function(context, event, callback) {
    let twiml = new Twilio.twiml.MessagingResponse();
    const body = event.Body;
    const inboundNum = event.From;
    if (inboundNum == context.MY_PERSONAL_PHONE_NUMBER) {//from me, message should have a comma separating # and msg
        const separatorPosition = event.Body.indexOf(':');
        if (separatorPosition < 1) {
            twiml.message('You need to specify a recipient number and a ":" before the message.');
        } else {
            //send to person masked # from
            const recipientNumber = event.Body.substr(0, separatorPosition).trim();
            const messageBody = event.Body.substr(separatorPosition + 1).trim();
            console.log(`recipientNumber ${recipientNumber}, messageBody ${messageBody}`);
            twiml.message({ to: recipientNumber }, messageBody);
        }
    } else {
        //to me
        twiml.message(`From: ${event.From}. Body: ${event.Body}`, {
            to: context.MY_PERSONAL_PHONE_NUMBER
        }); 
    }
    callback(null, twiml);
};
