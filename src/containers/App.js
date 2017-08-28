import App from 'components/App';
import * as actions from 'actions/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  pages: state.pages,
  stores: state.stores,
});

const mapDispatchToProps = dispatch => ({
  createNewPage: () => {
    dispatch(actions.createNewPage());
  },
  getStoreList: () => {
    dispatch(actions.getStoreList());
  },
});

const AppContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

export default AppContainer;
