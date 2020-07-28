export function manageFriends(state, action){
   switch (action.type) {
       case 'ADD_FRIEND':
        //    let newFriends = Object.assign({}, state.friends)
           return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            return {friends: [...state.friends].filter(friend => friend.id !== action.id)};
        default: 
            return state;
   }
}



// function changeState(state, action){      
//     switch (action.type) {
//       case 'INCREASE_COUNT':
//         return {count: state.count + 1}
//       case 'DECREASE_COUNT':
//         return {count: state.count - 1}
//       default:
//         return state;
//     }
//   }
   
//   let state = {count: 0}
   
//   changeState(state, {type: 'INCREASE_COUNT'})
//   // => {count: 1}
   
//   changeState(state, {type: 'DECREASE_COUNT'})
//   // => {count: -1}