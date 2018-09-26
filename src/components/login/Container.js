import { connect } from 'react-redux';
import View from './components/Login';

const mapStateToProps = ({ isAuthenticated }) => ({
  logged: isAuthenticated.isSucceed,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (promise) => {
    dispatch({type: 'LOGIN', payload: promise})
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(View);