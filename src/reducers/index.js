import { combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';

import { fetchInitReducer, fetchSearchReducer} from './formInitReducer';

export default combineReducers({
    form: reduxForm,
    formInit: fetchInitReducer,
    searchReasult: fetchSearchReducer
})