import React from "react";
import ValidationMsg from "../ValidationMsg";
import { eventDateFormat, noSeats } from "../../utilies/constants";
import sty from './index.module.scss';

const EventsList = ({ classes, events, selected, selectEvent, validationMsg }) => (
    <ul className={`list-group list-group-flush ${classes}`}>
        {validationMsg && <ValidationMsg msg={validationMsg} />}
        {
            events.map((event, index) =>
                <li key={index} onClick={() => selectEvent(event.id)} className={`${sty.listGroupItem} list-group-item pr-0 pl-0`}>
                    <div className="form-check mb-1">
                        <label className="form-check-label mr-4">
                            {eventDateFormat(event.date)}
                        </label>
                        <input className="form-check-input" type="radio" name="events" value={event.id}
                            checked={event.id === selected} readOnly
                        />
                    </div>
                    <div className={`${sty.seats} p-1 bg-info 
                    rounded-right rounded-left rounded-top rounded-bottom text-white`}>{noSeats(event.remainingSeats)}</div>
                </li>
            )
        }
    </ul>
)




export default EventsList;