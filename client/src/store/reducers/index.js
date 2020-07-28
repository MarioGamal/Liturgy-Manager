import booking from './booking';
import common from './common';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    booking, common
});

export default rootReducer;