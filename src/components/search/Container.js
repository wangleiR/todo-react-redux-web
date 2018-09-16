import { connect } from 'react-redux';
import Search from './component/Search';

const mapStateToProps = ({ lists,bakLists }) => ({
    lists: lists,
    bakLists: bakLists,
});

const mapDispatchToProps = (dispatch) => ({
     onFilterItemByName: (lists) => dispatch({type: 'FILTER_TODO', lists:lists}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);