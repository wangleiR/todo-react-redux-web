import { connect } from 'react-redux';
import Search from './component/Search';

const mapStateToProps = ({ reducer ,isAuthenticated, tagReducer}) => ({
    lists: reducer.lists,
    bakLists: reducer.bakLists,
    userToken : isAuthenticated.userToken,
    tagsLists:tagReducer.tagsLists,
});

const mapDispatchToProps = (dispatch) => ({
     getTodoListFromBackAPI: (promise) => dispatch({type: 'LIST_TODO', payload: promise})
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);