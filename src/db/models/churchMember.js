import mongoose from 'mongoose';
import i18n from '../../localization';


const lastBookingSchema = mongoose.Schema({
    holymassId: String,
    date: Date,
    bookingId: Number
});

const churchMemberSchema = mongoose.Schema({
    nationalId: {
        type: String,
        trim: true,
        validate: {
            validator: function (value) {
                // only numbers and length=15
                value = value.trim();
                return /^[0-9]*$/.test(value) && value.length === 14;
            },
            message: () => i18n.__('inValidNationalId')
        }
    },
    fullName: {
        type: String,
        trim: true,
        unique: true,
        validate: {
            validator: function (value) {
                // check fullname has arabic letters and white spaces only
                // and min. three names
                value = value.trim()
                return /^[\u0621-\u064A ]+$/.test(value) &&
                    value.match(/[ ]/).length >= 3;
            },
            message: () => i18n.__('inValidFullname')
        }
    },
    mobile: {
        type: String,
        trim: true,
        validate: {
            validator: function (value) {
                // starts with 0 and only numbers and length=11
                value = value.trim();
                return /^[01]/.test(value) && /^[0-9]*$/.test(value) && value.length === 11;
            },
            message: () => i18n.__('inValidMobile')
        }
    },
    lastBooking: {
        holymassId: String,
        date: Date,
        bookingId: Number
    },
    active: {
        type: Boolean
    }
}, {
    timestamps: true
});


const ChurchMember = mongoose.model('ChurchMember', churchMemberSchema);
export default ChurchMember;