import { takeAction } from "./actions";

export const verify = (req, res) => {

    if (req.query['hub.verify_token'] === process.env.MESSENGER_VERIFY_TOKEN) {
        res.status(200).send(req.query['hub.challenge']);
    } else {
        res.sendStatus(403);
    }
}

export const communicate = (req, res, next) => {
    //checking for page subscription.

    if (req.body.object === 'page') {
        req.body.entry.forEach(entry => {
            // Iterate over each messaging event
            entry.messaging.forEach(async event => {
                try {
                    await takeAction(event.sender.id, event.message.text || event.postback.payload)
                } catch (error) {
                    console.log('error= ', error)
                }
            });
        });
        res.sendStatus(200);
    }

};