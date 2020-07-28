import React from 'react';
import { connect } from 'react-redux';
import Link from '../../Components/Link';
import InfoBar from '../../Components/InfoBar';
import Title from '../../Components/Title';
import { homeTitle, startBooking, dayMonthFormat } from '../../utilies/constants';
import stgeorge from '../../images/st-george.jpg';

const Home = ({ info, infoTitle, currentPhase }) => {
    const startDate = dayMonthFormat(currentPhase.start)
    const endDate = dayMonthFormat(currentPhase.end)
    return (
        <div>
            <Title title={homeTitle} classes='mb-3 mt-3 text-center'
                subTitle={`${startDate}
                     ـــــــــ ${endDate}`} />
            <img src={stgeorge} className="rounded mx-auto d-block mb-3" alt="..." />

            <InfoBar title={infoTitle} type="info" items={info} classes='mb-3' />
            <div className="text-center mb-3">
                <Link to='/booking' classes="btn btn-primary btn-lg">
                    {startBooking}
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentPhase: state.common.currentPhase,
    info: state.common.info.home,
    infoTitle: state.common.info.title,
})


export default connect(mapStateToProps)(Home)
