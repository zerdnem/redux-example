import {combineReducers} from 'redux'

import toggleReducer from './toggle'

const rootReducer = combineReducers({
  toggle: toggleReducer 
})

export default rootReducer
