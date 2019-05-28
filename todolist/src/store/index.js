import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// redux-thunk使得action里面可以返回函数
import reducer from './reducer';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(
    reducer,
    enhancer
);

export default store;