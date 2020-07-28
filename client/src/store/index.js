import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { root as rootSaga } from './async';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);
const store = createStore(rootReducer, enhancer);
export default store;
sagaMiddleware.run(rootSaga);
