import types from './types'
import * as actionMethods from './service';
import { UserForm } from '../../../db';
import { sendAction } from '../ui';

export const takeAction = async (senderId, message) => {
    await sendAction(senderId, 'typing_on')
    let userForm = await UserForm.findOne({ senderId });
    switch (userForm.expectedAction) {
        default:
            await actionMethods.getStarted(senderId, userForm)
            break;
        // case types.MAIN_MENU:
        //     actionMethods.mainMenu(senderId, userForm)
        //     break;
        // case types.GET_ID:
        //     actionMethods.getId(senderId, userForm,message)
        //     break;
    }
}