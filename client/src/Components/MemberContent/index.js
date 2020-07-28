import React from 'react';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faUser } from '@fortawesome/free-solid-svg-icons';
import { inputText, bookingNum, eventDateFormat, ceremony } from '../../utilies/constants';
import sty from './index.module.scss';

const MemberContent = ({ id, values, validationMsgs, bookingButton, edit, changeHandle }) => (
    <>
        <ul className="list-group list-group-flush">

            <li className={`${sty.listGroupItem} list-group-item pr-0 pl-0`}>
                {edit ? <>
                    <Input validationMsg={validationMsgs?.name} rtl
                        value={values?.name || ''} placeholder={inputText.name}
                        onChange={(e) => changeHandle(id, 'name', e.target.value)}
                        classes='mb-2'>
                        <FontAwesomeIcon icon={faUser} />
                    </Input>

                    <Input validationMsg={validationMsgs?.mobile}
                        value={values.mobile || ''} placeholder={inputText.mobilePlaceholder}
                        onChange={(e) => changeHandle(id, 'mobile', e.target.value)}
                        classes='mb-2'>
                        <FontAwesomeIcon icon={faMobile} />
                    </Input>
                </> : <>
                        <p className="card-text ">
                            {values.name} < FontAwesomeIcon icon={faUser} /></p>
                        <p className="card-text ">
                            {values.mobile} <FontAwesomeIcon icon={faMobile} />
                        </p>
                    </>
                }
            </li>
            {!edit && values.booking?.id &&
                <li className={`${sty.listGroupItem} list-group-item pr-0 pl-0`}>
                    <p className="card-text">{ceremony} {eventDateFormat(values.booking.date)} </p>

                    <p className="card-text">{values.booking.id} : {bookingNum} </p>

                </li>}

        </ul>
    </>
)

export default MemberContent;