export const EDIT_COMMON = "EDIT_COMMON";
export const SET_COMMON = "SET_COMMON";
export const REMOVE_COMMON = "REMOVE_COMMON";
export const GET_META_DATA = "GET_META_DATA"

export const editCommon = (root, value) => ({
    type: EDIT_COMMON,
    payload: { root, value }
})
export const setCommon = (root, value) => ({
    type: SET_COMMON,
    payload: { root, value }
})
export const removeCommon = root => ({
    type: REMOVE_COMMON,
    payload: { root }
})
export const getMetaData = () => ({
    type: GET_META_DATA,
})
