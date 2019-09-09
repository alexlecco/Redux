import {LOGINUSER} from '../Constants/index'

export function LoginUser(user) {
  return { type: LOGINUSER, user }
}

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

