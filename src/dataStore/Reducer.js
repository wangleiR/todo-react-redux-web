
const initList = [
    {
        "id": 1,
        "name": "meet L",
        "status": "To DO",
        "dueDate": 1537372800000,
        "userId": 1,
        "tags": [
            {
                "id": 1,
                "value": "Work",
                "label": "Work",
                "userId": 1
            }
        ]
    },
];

const initState = {
    lists : initList,
};

const Reducer = (state = initState, action) => {

    switch (action.type) {
        case "LIST_TODO_FULFILLED" :
            return{
                ...state,
                lists:action.payload.content,
                listOperation:["details", "delete"],
            };

        case "ADD_TODO_FULFILLED" :
            return {
                ...state,
                lists: [
                    ...state.lists,
                    {
                        id: action.payload.id,
                        name : action.payload.name,
                        tags : action.payload.tags,
                        dueDate : action.payload.dueDate,
                        status: action.payload.status,
                        actions: ["details", "delete"],
                    }
                ],
            };

        case "DELETE_TODO_FULFILLED":
            return {
                ...state,
                lists:state.lists.filter(item => item.id !== action.payload.id),
            };

        case "UPDATE_TODO_FULFILLED":
            return {
                ...state,
                lists: [
                    ...state.lists.filter(item => item.id !== action.payload.id),
                    {
                        id: action.payload.id,
                        name : action.payload.name,
                        tags : action.payload.tags,
                        dueDate : action.payload.dueDate,
                        status: action.payload.status,
                        actions: ["details", "delete"],
                    }
                ],
            };

        default:
            return state;
    }
};

export default Reducer;