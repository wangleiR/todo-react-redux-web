import { connect } from 'react-redux';
import Chart from './component/Chart';

const mapStateToProps = ({ lists }) => ({
    lists: lists,
});

const mapDispatchToProps = (dispatch) => ({
    // onDeleteItem: (id) => dispatch({type: 'DELETE_TODO', id: id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);