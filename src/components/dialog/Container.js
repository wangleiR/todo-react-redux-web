import { connect } from 'react-redux';
import Dialog from './component/Dialog';

const mapStateToProps = ({reducer}) => ({
    lists: reducer.lists,
});

const mapDispatchToProps = (dispatch) => ({
     onAddItem: (item) => dispatch({type: 'ADD_TODO', item: item}),
     onUpdateItem: (item) => dispatch({type: 'UPDATE_TODO', item: item}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);