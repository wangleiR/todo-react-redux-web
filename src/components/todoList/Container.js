import { connect } from 'react-redux';
import TodoList from './component/TodoList';

const mapStateToProps = ({ lists }) => ({
    lists: lists,
});

const mapDispatchToProps = (dispatch) => ({
    onDeleteItem: (id) => dispatch({type: 'DELETE_TODO', id: id}),

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);