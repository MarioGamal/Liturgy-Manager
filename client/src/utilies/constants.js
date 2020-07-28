import moment from 'moment';

export const logo = 'مارجرجس حمامات القبه';
export const mainPage = 'الصفحه الرئيسيه';
export const inputText = {
    id: 'الرقم القومي المكون من ۱٤ رقم',
    idAlreadyExist: 'هذا الرقم تم اضافته مسبقاً',
    name: 'الاسم رباعي كما هو موجود في البطاقه',
    mobilePlaceholder: 'رقم الموبايل',
    mobileValidation: 'رقم الموبايل المكون من ۱۱ رقم ويبدأ بصفر',
    event: 'لم يتم اختيار موعد قداس'
};
export const homeTitle = 'حجز القداسات';
export const bookCeremony = 'حجز القداس';
export const startBooking = 'ابدء الحجز';
export const newBooking = 'حجز جديد';
export const pastBooking = 'حجوزات سابقه';
export const compInfo = 'اكمل البيانات';
export const addPerson = 'اضف اشخاص'
export const noPersonsAdded = 'لم يتم اضافه اشخاص بعد';
export const cantBook = `لا يمكن الحجز الان و يمكنك الحجز مره اخري بعد`;
export const cantDeleteBooking = type => {
    switch (type) {
        case 'past':
            return `لا يمكن الغاء حجز فات`;
        case 'late':
            return `لا يمكن الغاء الحجز بعد الساعه التاسعه ليلاً`;
        default:
            return `لا يمكن الغاء حجز فات`;;
    }
};
export const bookWillChange = `للقيام بحجز جديد يجب الغاء هذا الحجز`;
export const bookingCongestion = `نعتذر عن الحجز في هذه الفتره نظراً للعدد الهائل من الحجوزات`
export const sagaFail = `لا يمكن اتمام العمليه من فضلك  اعد المحاوله لاحقاً`
export const goOn = `استمرار`;
export const changeBooking = 'الغاء الحجز';
export const notChangeBooking = 'عدم الغاء الحجز';
export const removeBooking = 'الغاء الحجز';
export const removeBookingConfirm = `هل تريد ${removeBooking} ؟`;
export const no = `لا`;
export const yes = `نعم`;
export const canceling = 'الغاء';
export const bookingExist = 'يوجد حجز بتاريخ';
export const noBookingExist = 'لا يوجد حجز مسبق';
export const bookingNum = 'رقم الحجز';
export const ceremony = 'قداس';
export const ticket = 'حجز';
export const noEventsFoundText = 'لا يوجد قداسات متاحه حالياً'
export const eventDateFormat = date => date ? moment(date).format('يوم dddd Do MMMM الساعه h:mm a') : '';
export const dayMonthFormat = date => date ? moment(date).format("Do MMM") : '';

export const arNum = '٠١٢٣٤٥٦٧٨٩';
export const engToArNum = num => `${num}`.split('').map(digit => arNum[digit]).join('');
export const arToEngNum = num =>
    `${num}`.replace(/[\u0660-\u0669]/g, matched =>
        arNum.indexOf(matched)
    )
export const noSeats = seats => (seats >= 3 && seats <= 10) ? `${engToArNum(seats)} اماكن`
    : seats > 10 ? `${engToArNum(seats)} مكان`
        : seats == 2 ? 'مكانين فقط' : 'مكان واحد فقط'



