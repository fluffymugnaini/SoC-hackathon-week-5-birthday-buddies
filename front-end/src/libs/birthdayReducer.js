export const INITIAL_BIRTHDAYS = null;

function reducer(state,action) {
    switch (action.type) {
        case "BIRTHDAYS":
            return action.payload;
            default:
                return state;
    }
}

export default reducer;