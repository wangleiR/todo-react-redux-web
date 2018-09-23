import { connect } from 'react-redux';
import Dialog from './component/Dialog';

const mapStateToProps = ({reducer,isAuthenticated}) => ({
    lists: reducer.lists,
    userToken : isAuthenticated.userToken,
});

const mapDispatchToProps = (dispatch) => ({
     onAddItem: (item) => dispatch({type: 'ADD_TODO', item: item}),
     onUpdateItem: (item) => dispatch({type: 'UPDATE_TODO', item: item}),
     getListFromBackAPI: (todos) => dispatch({type: 'LIST_TODO', todos: todos})
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);