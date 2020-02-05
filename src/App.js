import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";
import MainApp from "./Components/MainApp/MainApp";
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
  return {
    cssVariables: state.cssVariables
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainApp)
);

export default App;
