import { connect } from 'react-redux';
import TodoList from './component/TodoList';

const mapStateToProps = ({ reducer }) => ({
    lists: reducer.lists,
});

const mapDispatchToProps = (dispatch) => ({
    onDeleteItem: (id) => dispatch({type: 'DELETE_TODO', id: id}),

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);