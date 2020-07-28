import mongoose from 'mongoose';
import i18n from '../../localization';

const phaseSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,i18n.__('tileRequired')]
    },
    startDate:{
        type: Date,
        required: [true, i18n.__('dateRequired')]
    },
    endDate:{
        type: Date,
        required: [true, i18n.__('dateRequired')]
    },
    active: {
        type: Boolean
    }
})

const Phase = mongoose.model('Phase',phaseSchema);
export default Phase;