import { axiosMessenger } from '../../axios';

export const sendTemplate = (recipientId, type, data) => {
    return axiosMessenger.post('', {
        recipient: { id: recipientId },
        message: {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": type,
                    ...data
                }
            }
        }

    });
}

export const sendAction = (recipientId, type) => {
    return axiosMessenger.post('', {
        recipient: { id: recipientId },
        "sender_action": type
    })
}