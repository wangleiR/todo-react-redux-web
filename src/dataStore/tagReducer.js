

const initState = {
    tagsLists : [{
        "id": 4,
        "userId": 1,
        "value": "TDD",
        "label": "TDD"
    }]
};

const tagReducer = (state=initState, action) => {
    switch (action.type) {
        case "LIST_TAG_FULFILLED" :
            return {
                ...state,
                tagsLists: action.payload.content,
            };

        default:
            return state;
    }
};

export default tagReducer;