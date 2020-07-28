export const EDIT_BOOKING = "EDIT_BOOKING";
export const SET_BOOKING = "SET_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const GET_EVENTS = "GET_EVENTS";
export const GET_MEMBER = "GET_MEMBER";
export const POST_BOOKING = "POST_BOOKING";
export const ADD_MEMBER = "ADD_MEMBER";
export const DELETE_BOOKING = "DELETE_BOOKING"
export const POST_MEMBERS = "POST_MEMBERS";
export const REMOVE_SEAT = "REMOVE_SEAT";

export const editBooking = (root, value) => ({
    type: EDIT_BOOKING,
    payload: { root, value }
})
export const setBooking = (root, value) => ({
    type: SET_BOOKING,
    payload: { root, value }
})
export const removeBooking = root => ({
    type: REMOVE_BOOKING,
    payload: { root }
})
export const deleteBooking = root => ({
    type: DELETE_BOOKING,
    payload: { root }
})
export const addMember = (id, edit) => ({
    type: ADD_MEMBER,
    payload: { id, edit }
})
export const getMember = id => ({
    type: GET_MEMBER,
    payload: { id }
})
export const postMembers = members => ({
    type: POST_MEMBERS,
    payload: { ...members }
})
export const postBooking = (eventId) => ({
    type: POST_BOOKING,
    payload: { eventId }
})
export const removeSeat = (memberId, edit) => ({
    type: REMOVE_SEAT,
    payload: { memberId, edit }
})
export const getEvents = membersLength => ({
    type: GET_EVENTS
})

