import { inputText, arToEngNum } from "./constants";

export const validateField = (type, value) => {
    let result = {
        value: value
    }

    switch (type) {
        case 'id': {
            result.validationMsg = inputText.id;
            result.value = result.value.split('')
                .filter((char, index) =>
                    /[\u0660-\u06690-9]/.test(char) && index < 14).join('');

            if (result.value.length === 14)
                result.validationMsg = '';

            return result;
        }

        case 'name': {
            result.validationMsg = inputText.name

            result.value = result.value.split('')
                .filter(char => /[\u0621-\u064A ]/.test(char)).join('');

            const spaces = result.value.match(/[\u0621-\u064A] [\u0621-\u064A]/g)
            if (spaces && spaces.length >= 3)
                result.validationMsg = '';

            //result.value = result.value.trim()
            return result;
        }

        case 'mobile': {
            result.validationMsg = inputText.mobileValidation;

            result.value = result.value.split('')
                .filter((char, index) =>
                    /[\u0660-\u06690-9]/.test(char) && index < 11).join('');

            if ((/^[0]/.test(value) || /^[\u0660]/.test(value)) && result.value.length === 11)
                result.validationMsg = '';

            return result;
        }

        default:
            return { value, validationMsg: '' }
    }
}

export const validateOnSubmit = (id, validationMsg, members) => {
    let result = {
        validationMsg: validationMsg || '',
        value: ''
    }
    if (!id)
        result.validationMsg = inputText.id;
    else if (members[id])
        result.validationMsg = inputText.idAlreadyExist;
    else result.value = arToEngNum(id)
    return result;
}

export const membersValidation = (validationMsgs, ids) => {
    let validationMsg = null;
    if (!ids.length) validationMsg = 'empty';
    else {
        let index = 0;
        while (!validationMsg && index < ids.length) {
            const id = ids[index];
            validationMsg = validationMsgs[id].name || validationMsgs[id].mobile
            index++;
        }
    }

    return validationMsg
}






