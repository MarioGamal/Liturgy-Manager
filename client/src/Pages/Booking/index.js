import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Members from './Members';
import Events from './Events';
import { connect } from 'react-redux';
import Checkout from './Checkout';
import CheckEvents from './CheckEvents';

const Booking = ({ match }) => (
    <Switch>
        <Route path={`${match.url}/members`}>
            <Members />
        </Route>
        <Route path={`${match.url}/events`}>
            <Events />
        </Route>
        <Route path={`${match.url}/checkout`}>
            <Checkout />
        </Route>
        <Route path={`${match.url}/checkevents`}>
            <CheckEvents />
        </Route>
        <Route path={`${match.url}/`}>
            <Members />
        </Route>
    </Switch>
)
const mapStateToProps = state => ({
    loadingPage: state.booking.loadingPage
})


export default connect(mapStateToProps)(Booking);