import { connect } from 'react-redux';
import TodoList from './component/TodoList';

const mapStateToProps = ({ reducer, isAuthenticated}) => ({
    lists: reducer.lists,
    userToken : isAuthenticated.userToken,
    listOperation: reducer.listOperation,
});

const mapDispatchToProps = (dispatch) => ({
    onDeleteItem: (id) => dispatch({type: 'DELETE_TODO', id: id}),
    getListFromBackAPI: (todos) => dispatch({type: 'LIST_TODO', todos: todos})

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);