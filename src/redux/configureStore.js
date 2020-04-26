import {createStore} from 'redux';
import {Reduser, initialState} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reduser,
        initialState
    );

    return store;
}