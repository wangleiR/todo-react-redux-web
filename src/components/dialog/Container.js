import { connect } from 'react-redux';
import Dialog from './component/Dialog';

const mapStateToProps = ({reducer,isAuthenticated,tagReducer}) => ({
    lists: reducer.lists,
    userToken : isAuthenticated.userToken,
    tagsLists:tagReducer.tagsLists,
});

const mapDispatchToProps = (dispatch) => ({
     onAddItem: (item) => dispatch({type: 'ADD_TODO', item: item}),
     onUpdateItem: (item) => dispatch({type: 'UPDATE_TODO', item: item}),
     getListFromBackAPI: (todos) => dispatch({type: 'LIST_TODO', todos: todos}),
     getTagListFromBackAPI: (tagsLists) => dispatch({type: 'LIST_TAG', tagsLists: tagsLists})
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);