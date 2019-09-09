import { combineReducers } from 'redux'
import {LOGINUSER} from '../Constants/index'


function authentication(state = [], action) {
  switch (action.type) {
    case LOGINUSER:
      return {
            user: action.user,
        }
      
    // case TOGGLE_TODO:
    //   return state.map((todo, index) => {
    //     if (index === action.index) {
    //       return Object.assign({}, todo, {
    //         completed: !todo.completed
    //       })
    //     }
    //     return todo
    //   })
    default:
      return state
  }
}

const Auth = combineReducers({
    authentication
})

export default Auth