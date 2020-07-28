import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeBooking, setBooking, removeSeat } from '../../store/actions/booking';
import { setCommon } from '../../store/actions/common';
import Card from '../../Components/Card';
import MemberContent from '../../Components/MemberContent';
import { yes, no, removeBookingConfirm, bookingNum, goOn, cantDeleteBooking } from '../../utilies/constants';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { noBookingExist } from '../../utilies/constants';

const CheckoutMember = ({ values, title, id, edit, setCommon, setBooking, removeSeat, classes }) => {

    useEffect(() => {
        setBooking(`members.order`, {})
        setBooking(`members.values`, {})
        return () => {
            setBooking(`members.values`, {})
            setBooking(`members.order`, {})
        }
    }, [])
    const removeMemberBooking = () => {
        const action = {
            needed: true,
            body: []
        }
        const bookingDate = new Date(values.booking.date);
        const nowDate = new Date();
        if (bookingDate > nowDate) {
            if (bookingDate.getDate() === nowDate.getDate() ||
                bookingDate.getDate() - 1 === nowDate.getDate() && nowDate.getHours() >= 21) {
                action.buttons = {
                    primary: {
                        label: goOn,
                        callback: () => setCommon(`action`, { needed: false })
                    }
                }
                action.body.push(cantDeleteBooking('late'));
            } else {
                action.body.push(removeBookingConfirm);
                action.buttons = {
                    primary: {
                        label: yes,
                        callback: () => {
                            console.log(values);
                            removeSeat(values._id, true)
                            setCommon(`action`, { needed: false })
                        }
                    }, secondary: {
                        label: no,
                        callback: () => {
                            setCommon(`action`, { needed: false })
                        }
                    }
                }
            }
        } else {
            action.buttons = {
                primary: {
                    label: goOn,
                    callback: () => setCommon(`action`, { needed: false })
                }
            }
            action.body.push(cantDeleteBooking('past'));
        }
        setCommon(`action`, { ...action });
    }

    return (
        <div className={classes} >
            {id &&
                <Card classes='mb-2' title={title} edit={edit}
                    remove={{ onClick: () => removeMemberBooking(), icon: faTrashAlt }}>
                    <MemberContent values={values} />
                </Card >
            }
        </div >
    )
}

const mapStateToProps = state => {
    const id = Object.keys(state.booking.members.order)[0];
    let values = state.booking.members.values[id];
    let title = ''
    let edit = true
    if (values?.booking?.id) {
        const id = values.booking.id
        title = `${id} : ${bookingNum}`;
    } else {
        title = noBookingExist
        edit = false
    };

    return ({
        id,
        values,
        title,
        edit
    })
}

const mapDispatchToProps = {
    removeBooking, setBooking, setCommon, removeSeat
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutMember);