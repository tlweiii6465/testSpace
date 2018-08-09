import { connect } from "react-redux";
import ResultComponent from "App";
import { getResultListRequest } from "./ResultAction";

const mapStateToProps = state => ({
  isFetching: state.resultReducer.result.isFetching,
  resultList: state.resultReducer.result.resultList
});

const mapDispatchToProps = (dispatch, props) => ({
  getResultList: (date) => {
      
    dispatch(getResultListRequest(date));
  },
}); 

export default connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
