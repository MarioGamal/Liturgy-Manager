import { sendTemplate } from "../ui"
import i18n from '../../../localization';
import actionTypes from './types';
import { UserForm } from "../../../db";
import types from "./types";

export const getStarted = async (senderId, userForm) => {
    const buttonsData = {
        text: i18n.__('helpYou'),
        buttons: [{
            type: "postback",
            title: i18n.__('massBooking'),
            payload: "newBooking"
        },
        {
            type: "postback",
            title: i18n.__('editMassBooking'),
            payload: "editBooking"
        }]
    }
    if (userForm) {
        userForm.expectedAction = actionTypes.MAIN_MENU
        await userForm.save()
        await sendTemplate(senderId, 'button', buttonsData)
    } else {
        await UserForm.create({
            senderId, expectedAction: actionTypes.MAIN_MENU
        });
        await sendTemplate(senderId, 'button', buttonsData)
    }
}