import { connect } from 'react-redux';
import Dialog from './component/Dialog';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
     onAddItem: (item) => dispatch({type: 'ADD_TODO', item: item})
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);