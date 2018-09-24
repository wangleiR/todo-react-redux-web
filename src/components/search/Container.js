import { connect } from 'react-redux';
import Search from './component/Search';

const mapStateToProps = ({ reducer ,isAuthenticated, tagReducer}) => ({
    lists: reducer.lists,
    bakLists: reducer.bakLists,
    userToken : isAuthenticated.userToken,
    tagsLists:tagReducer.tagsLists,
});

const mapDispatchToProps = (dispatch) => ({
     getTodoListFromBackAPI: (todos) => dispatch({type: 'LIST_TODO', todos: todos})
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);