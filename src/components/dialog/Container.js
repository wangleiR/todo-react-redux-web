import { connect } from 'react-redux';
import Dialog from './component/Dialog';

const mapStateToProps = ({reducer,isAuthenticated,tagReducer}) => ({
    lists: reducer.lists,
    userToken : isAuthenticated.userToken,
    tagsLists:tagReducer.tagsLists,
});

const mapDispatchToProps = (dispatch) => ({
     // getListFromBackAPI: (promise) => dispatch({type: 'LIST_TODO', payload: promise}),
     addTodoItem: (promise) => dispatch({type: 'ADD_TODO', payload: promise}),
     editTodoItem: (promise) => dispatch({type: 'UPDATE_TODO', payload: promise}),
     getTagListFromBackAPI: (promise) => dispatch({type: 'LIST_TAG', payload: promise})
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);