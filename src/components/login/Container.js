import { connect } from 'react-redux';
import View from './components/Login';

const mapStateToProps = ({ isAuthenticated }) => ({
  logged: isAuthenticated.isSucceed,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (token) => dispatch({type: 'LOGIN', isSucceed: true, userToken: token})
});

export default connect(mapStateToProps, mapDispatchToProps)(View);