let state = {friends: []}
let friend = { hometown: "Boston", id: 101, name: "Joe"}


export function manageFriends(state, action){
  switch(action.type){
  case 'ADD_FRIEND':
  return {friends: [...state.friends, friend]
  }
  case 'REMOVE_FRIEND':
  return {friends: [...state.friends].filter(friend => friend.id !== 101)}
  default:
  return state
  }
}
