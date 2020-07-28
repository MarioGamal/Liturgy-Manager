import { connect } from "react-redux";
import React, { useEffect } from "react";
import Card from "../../Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import EventsList from "../../Components/EventsList";
import { setBooking } from "../../store/actions/booking";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Events = ({ selected, classes, loading, events, validationMsg, setBooking }) => {
    const history = useHistory();
    useEffect(() => {
        return () => {
            setBooking(`events.list`, [])
            setBooking(`events.values.selected`, '')
        }
    }, [])
    useEffect(() => {
        if (!events.length) {
            setBooking(`redirectTo`, 'members');
            history.push(`/booking/members`);
        }
    }, [events, history])

    const selectEvent = id => {
        console.log('selectevent', id);

        setBooking('events.values.selected', id)
        setBooking('events.validationMsg', '')
    }
    return (

        < div className={classes} >
            <Card title={
                <span>القداسات المتاحه حاليا {loading && <FontAwesomeIcon icon={faSpinner} pulse />} </span>}>
                {events.length ?
                    <EventsList events={events} selected={selected}
                        selectEvent={selectEvent} validationMsg={validationMsg} />
                    : null}
            </Card>

        </div >
    )
}

const mapStateToProps = state => {
    const events = state.booking.events.list
    return ({
        memberslen: Object.keys(state.booking.members.order).length,
        events: events.sort((a, b) => a.date - b.date),
        loading: state.booking.events.loading,
        selected: state.booking.events.values.selected,
        validationMsg: state.booking.events.validationMsg
    })
}

const mapDispatchToProps = {
    setBooking
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);