import dotProp from 'dot-prop-immutable';
import { SET_COMMON, EDIT_COMMON, REMOVE_COMMON } from '../actions/common';

const initialState = {
    currentPhase: { start: null, end: null },
    info: {
        title: 'معلومات مهمه',
        home: []
    },
    response: [],
    action: { needed: false },
    loadingPage: false,
    underConstruction: {
        title: 'كنيسه مارجرجس حمامات القبه',
        subTitle: 'سوف يتم حجز القداسات من هذا الموقع حين تتم فتح الكنائس',
        info: [
            'يمكنك حجز موعد قداس لاكثر من شخص عن طريق ادخال الرقم القومي لكل منهم',
            'كل قداس له عدد محدد من الحضور حتي نضمن سلامه الشعب في ظل الظروف الحاليه',
            'كل شخص له الحق ان يحجز قداس واحد فقط كل فتره زمنيه معينه سوف تحدد فيما بعد',
            'يمكنك تغيير الحجز أو الغاءه في حاله عدم امكانيه الذهاب في الموعد الذي تم حجزه',
            'من فضلك الغي الحجز في حاله عدم امكانيه الذهاب حتي تتيح الفرصه لشخص اخر',
            'عند الذهاب للكنيسه من فضلك اظهر ما يثبت رقمك القومي (بطاقه أو شهاده ميلاد) حتي يسهل عمليه الدخول'
        ]
    }
}
const common = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_COMMON: {
            const { root, value } = action.payload;
            const existValue = dotProp.get(state, root)
            state = dotProp.set(state, root, { ...existValue, ...value })
            return { ...state };
        }

        case SET_COMMON: {
            const { root, value } = action.payload;
            state = dotProp.set(state, root, value)
            return { ...state };
        }

        case REMOVE_COMMON: {
            const { root } = action.payload;
            state = dotProp.delete(state, root)
            return { ...state };
        }

        default:
            return { ...state };
    }
};
export default common;