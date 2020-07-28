
import { takeLatest, put, call } from 'redux-saga/effects';
import { setBooking } from '../actions/booking';
import { GET_META_DATA, setCommon } from '../actions/common';
import { axiosInstance } from '../../fetch';
import { dayMonthFormat } from '../../utilies/constants';
import { errorHandler } from './errorHandler';

const getMetaData = function* () {
    try {
        // yield delay(3000)
        //const currentPhase = { start: new Date('2020-07-01T00:00:00.000'), end: new Date('2020-07-01T24:00:00.000') };
        const phase = yield call(() =>
            axiosInstance.get('/phase'));
        const currentPhase = {};
        currentPhase.start = phase.data[0].startDate.slice(0, -1);
        currentPhase.end = phase.data[0].endDate.slice(0, -1);
        console.log(phase);

        const info = {
            title: 'معلومات مهمه',
            home: [
                'يمكنك حجز موعد قداس لاكثر من شخص عن طريق ادخال الرقم القومي لكل منهم',
                'كل قداس له عدد محدد من الحضور حتي نضمن سلامه الشعب في ظل الظروف الحاليه',
                `كل شخص له الحق في قداس واحد فقط في فتره من ${dayMonthFormat(currentPhase.start)} وحتي ${dayMonthFormat(currentPhase.end)}`,
                'يمكنك تغيير الحجز أو الغاءه في حاله عدم امكانيه الذهاب في الموعد الذي تم حجزه',
                'من فضلك الغي الحجز في حاله عدم امكانيه الذهاب حتي تتيح الفرصه لشخص اخر',
                'عند دخول الكنيسه من فضلك اظهر رقم الحجز مع ما يثبت رقمك القومي (بطاقه أو شهاده ميلاد) حتي يسهل عمليه الدخول'
            ],
            members: ['يمكنك حجز موعد قداس لاكثر من شخص عن طريق ادخال الرقم القومي لكل منهم'],
            events: [
                `كل شخص له الحق في قداس واحد فقط في فتره من ${dayMonthFormat(currentPhase.start)} وحتي ${dayMonthFormat(currentPhase.end)}`,
                'يمكنك تغيير الحجز أو الغاءه في حاله عدم امكانيه الذهاب في الموعد الذي تم حجزه',
            ],
            checkout: ['عند دخول الكنيسه من فضلك اظهر رقم الحجز مع ما يثبت رقمك القومي (بطاقه أو شهاده ميلاد) حتي يسهل عمليه الدخول'
            ]
        };
        yield put(setCommon('currentPhase', currentPhase));
        yield put(setCommon('info', { title: info.title, home: info.home }));
        yield put(setBooking('info', {
            members: info.members, events: info.events,
            checkout: info.checkout
        }));
    } catch (error) {
        yield* errorHandler()
    }

}


const watchers = [
    takeLatest(GET_META_DATA, getMetaData),
]
export default watchers;


