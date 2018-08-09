const initialState = {
    result: {
        isFetching: false,
        resultList: [],
        errorMessage: null
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "REQUESTING_GET_RESULT_LIST":
            return Object.assign({}, state, {
                result: {
                    isFetching: true
                }
            });
        case "SUCCESS_GET_RESULT_LIST":
            return Object.assign({} , state, {
                result: {
                    isFetching: false,
                    resultList: action.payload
                }
            });
        case "FAIL_GET_RESULT_LIST":
            return Object.assign({}, state, {
                result: {
                    isFetching: true,
                    errorMessage: action.errorMessage
                }
            });
        default:
            return state;
    }
};
