
const initList = [{
    id:1,
    actionName : 'Action 1',
    tags : "Meeting Review",
    dueDate : '20180917',
    status: 'In Progress',
    actions: ["details", "delete"],
},{
    id:2,
    actionName : 'Action 2',
    tags : "Meeting Review",
    dueDate : '20180919',
    status: 'In Progress',
    actions: ["details", "delete"],
},{
    id:3,
    actionName : 'Action 3',
    tags : "Meeting Review",
    dueDate : '20180929',
    status: 'In Progress',
    actions: ["details", "delete"],
}];

const initState = {
    lists : initList,
    bakLists : initList,
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
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