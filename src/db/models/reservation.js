import mongoose from 'mongoose';
import { object } from 'joi';
const ReservationSchema = mongoose.Schema({
    memberId:String,
    nationalId: String,
    fullName: String,
    mobile: String,
    bookingId:Number
});

export default ReservationSchema;