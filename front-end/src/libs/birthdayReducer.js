export const INITIAL_BIRTHDAYS = {};

function reducer(state,action) {
    switch (action.type) {
        case "BIRTHDAYS":
            return action.payload;
            default:
                return state;
    }
}

export default reducer;