export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return (
                {...state,
                    friends: [
                      ...state.friends,
                      action.friend
                    ]
                }
            )
        case "REMOVE_FRIEND":
            return {friends: state.friends.filter(friend => {
                if (friend.id !== action.id){
                    return friend
                } else {
                    return null
                }
            })}
        default:
            return state;
    }
}
