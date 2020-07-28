import { sagaFail } from "../../utilies/constants";
import { put, delay } from "redux-saga/effects";
import { setCommon } from "../actions/common";

export const errorHandler = function* (message) {
    let response = [sagaFail];
    if (message) response = [message];
    yield put(setCommon(`response`, response));
    yield delay(5000)
    yield put(setCommon(`response`, []))
}