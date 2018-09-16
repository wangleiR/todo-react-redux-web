import { connect } from 'react-redux';
import Chart from './component/Chart';

const mapStateToProps = ({ reducer }) => ({
    lists: reducer.lists,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);