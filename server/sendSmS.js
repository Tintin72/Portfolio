const AfricasTalking = require('africastalking');


const africastalking = AfricasTalking({
    apiKey: process.env.AFRICAS_TALKING_APIKEY,
    username:'sandbox'
})

module.exports = async function sendSMS() {
    
    // TODO: Send message
    try{
        const result = await africastalking.SMS.send({
            to:'+254742572139',
            message:'buuuuda! wasuup...',
            from:'4472'
        });
        console.log(result);
    }catch(error){
        console.log(error.message)
    }

};