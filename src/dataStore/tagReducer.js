

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
        case "LIST_TAG" :
            return {
                ...state,
                tagsLists: action.tagsLists
            };

        default:
            return state;
    }
};

export default tagReducer;