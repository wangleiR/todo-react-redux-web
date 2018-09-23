
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
                "tagName": "Work",
                "userId": 1
            }
        ]
    },
];

const initState = {
    lists : initList,
    bakLists : initList,
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "LIST_TODO" :
            return{
                ...state,
                lists:action.todos,
                bakLists:action.todos,
                listOperation:["details", "delete"],
            };
        case "ADD_TODO" :
            return {
                ...state,
                lists: [
                    ...state.lists,
                    {
                        id: new Date().getTime(),
                        actionName : action.item.actionName,
                        tags : action.item.tags,
                        dueDate : action.item.dueDate,
                        status: action.item.status,
                        actions: ["details", "delete"],
                    }
                ],
                bakLists: [
                    ...state.bakLists,
                    {
                        id: new Date().getTime(),
                        actionName : action.item.actionName,
                        tags : action.item.tags,
                        dueDate : action.item.dueDate,
                        status: action.item.status,
                        actions: ["details", "delete"],
                    }
                ]
            };

        case "DELETE_TODO":
            return {
                ...state,
                lists:state.lists.filter(item => item.id !== action.id),
                bakLists:state.bakLists.filter(item => item.id !== action.id),
            };


        case "UPDATE_TODO":
            return {
                ...state,
                lists: [
                    ...state.lists.filter(item => item.id != action.item.id),
                    {
                        id: action.item.id,
                        actionName : action.item.actionName,
                        tags : action.item.tags,
                        dueDate : action.item.dueDate,
                        status: action.item.status,
                        actions: ["details", "delete"],
                    }
                ],
                bakLists: [
                    ...state.bakLists.filter(item => item.id != action.item.id),
                    {
                        id: action.item.id,
                        actionName : action.item.actionName,
                        tags : action.item.tags,
                        dueDate : action.item.dueDate,
                        status: action.item.status,
                        actions: ["details", "delete"],
                    }
                ]
            };


        case "FILTER_TODO":
            return {
                ...state,
                lists:action.lists,
            };

        default:
            return state;
    }
};

export default Reducer;