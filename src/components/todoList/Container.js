import { connect } from 'react-redux';
import TodoList from './component/TodoList';

const mapStateToProps = ({ lists }) => ({
    lists: lists,
});

const mapDispatchToProps = (dispatch) => ({
    // onLogin: () => dispatch({type: 'LOGIN', isSucceed: true})
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);