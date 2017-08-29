import App from 'components/App';
import * as actions from 'actions/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  pages: state.pages,
  stores: state.stores,
  auths: state.auths,
});

const mapDispatchToProps = dispatch => ({
  createNewPage: () => {
    dispatch(actions.createNewPage());
  },
  getStoreList: () => {
    dispatch(actions.getStoreList());
  },
  getGuestToken: deviceToken => {
    dispatch(actions.getGuestToken(deviceToken));
  },
});

const AppContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

export default AppContainer;
