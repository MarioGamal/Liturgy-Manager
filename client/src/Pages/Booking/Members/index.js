import React, { useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { getEvents, setBooking } from '../../../store/actions/booking';
import BookingFooter from '../../../Containers/Footer/Booking';
import MemberForm from '../../../Containers/MemberForm';
import MemberCards from '../../../Containers/MemberCards';
import InfoBar from '../../../Components/InfoBar';
import Footer from '../../../Components/Footer';
import { membersValidation } from '../../../utilies/memberForm';
import { bookCeremony, goOn, noEventsFoundText } from '../../../utilies/constants';
import { setCommon } from '../../../store/actions/common';

const Members = ({ noEventsPopup, info, validationMsgs, order, redirectTo, getEvents, setBooking, setCommon }) => {
    const history = useHistory();
    const refForm = useRef();
    const refMembers = useRef();

    useEffect(() => {
        if (redirectTo === 'events')
            history.push(`/booking/${redirectTo}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [redirectTo])
    useEffect(() => {
        if (noEventsPopup)
            setCommon(`action`, {
                needed: true,
                body: [noEventsFoundText],
                buttons: {
                    primary: {
                        label: goOn,
                        callback: () => {
                            setCommon(`action`, { needed: false });
                            setBooking(`noEventsPopup`, false)
                        }
                    }
                }
            })
    }, [noEventsPopup])
    const goToEvents = () => {
        const validationMsg = membersValidation(validationMsgs, order);
        if (!validationMsg)
            getEvents()

        else
            if (validationMsg === 'empty')
                refForm.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            else
                refMembers.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
    }

    const footer = {
        rightButton: {
            label: bookCeremony,
            onClick: goToEvents
        }
    }
    return (
        <div>
            <div className='mb-5'>
                <InfoBar type="info" items={info} classes='mb-3' />
                <div ref={refForm}>
                    <MemberForm classes='mb-3' />
                </div>
                <div ref={refMembers}>
                    <MemberCards edit classes='mb-3' />
                </div>
            </div>
            <Footer classes='fixed-bottom'>
                <BookingFooter {...footer} />
            </Footer>
        </div>
    )
}


const mapStateToProps = state => {
    return ({
        info: state.booking.info.members,
        validationMsgs: state.booking.members.validationMsgs,
        order: Object.keys(state.booking.members.order),
        redirectTo: state.booking.redirectTo,
        noEventsPopup: state.booking.noEventsPopup
    })
}
const mapDispatchToProps = {
    getEvents, setBooking, setCommon
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);