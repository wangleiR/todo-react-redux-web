
const initList = [{
    action : 'Action 1',
    tags : "Meeting Review",
    dueDate : '20180917',
    status: 'In Progress',
    actions:'details delete'
},{
    action : 'Action 2',
    tags : "Meeting Review",
    dueDate : '20180919',
    status: 'In Progress',
    actions:'details delete'
},{
    action : 'Action 3',
    tags : "Meeting Review",
    dueDate : '20180929',
    status: 'In Progress',
    actions:'details delete'
}];

const initState = {
    lists : initList,
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO" :
            return {
                ...state,
            };

        case "DELETE_TODO":
            return 0;

        default:
            return state;
    }
};

export default Reducer;