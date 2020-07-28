import React from 'react';
import { connect } from 'react-redux';
import InfoBar from '../../Components/InfoBar';
import Title from '../../Components/Title';
import george from '../../images/st-george.jpg';

const UnderConstruction = ({ title, subTitle, infoTitle, info }) => (
    <div>

        <Title title={title} classes='mb-3 mt-3 text-center'
            subTitle={subTitle} />
        <img src={george} className="rounded mx-auto d-block mb-3" alt="..." />

        <InfoBar title={infoTitle} type="info" items={info} classes='mb-3' />

    </div>
)

const mapStateToProps = state => ({
    title: state.common.underConstruction.title,
    subTitle: state.common.underConstruction.subTitle,
    infoTitle: state.common.info.title,
    info: state.common.underConstruction.info,
})


export default connect(mapStateToProps)(UnderConstruction)
