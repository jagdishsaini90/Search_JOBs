import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchJobs } from "../redux/ActionCreators";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import Login from "./Auth/login";
import PrivateRoute from "./Auth/PrivateRoute";
import Signup from "./Auth/Signup";
import Home from "./Home";
import SuccessPage from "./SuccessPage";

// Recieving data from redux store
const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
  };
};
// Sending the Required requests to fetch data through redux store
const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: (data) => dispatch(fetchJobs(data)),
  };
};

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Home />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                <SearchForm
                  fetchJobs={this.props.fetchJobs}
                  jobs={this.props.jobs.jobs && this.props.jobs.jobs}
                  loading={this.props.jobs.loading}
                />
              }
            />
            <Route path="/success" element={<SuccessPage  />} />
          </Route>
          <Route />
        </Routes>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent); // Connecting MainComponent with redux store methods
