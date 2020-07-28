import { all } from 'redux-saga/effects';
import bookingWatchers from "./booking";
import commonWatchers from "./common";

export const root = function* root() {
    yield all([
        ...bookingWatchers, ...commonWatchers
    ])
}

