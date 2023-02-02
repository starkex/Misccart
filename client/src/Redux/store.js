import {combineReducers, legacy_createStore} from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { getAllBooks } from './reducers/booksreducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const MainReducer =combineReducers({
    getAllBooks : getAllBooks
})

const initState = {

}

const composeEnhancers = composeWithDevTools({})

const store = legacy_createStore(MainReducer,initState,composeEnhancers(applyMiddleware(thunk)))

export default store;
