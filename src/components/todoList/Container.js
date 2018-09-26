import { connect } from 'react-redux';
import TodoList from './component/TodoList';

const mapStateToProps = ({ reducer, isAuthenticated}) => ({
    lists: reducer.lists,
    userToken : isAuthenticated.userToken,
    listOperation: reducer.listOperation,
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodoItem: (promise) => dispatch({type: 'DELETE_TODO', payload: promise}),
    getListFromBackAPI: (promise) => dispatch({type: 'LIST_TODO', payload: promise})

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);