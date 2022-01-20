import { Config } from "../config";
import * as ActionTypes from "./ActionTypes";

export const addJobs = (data) => {
  return {
    type: ActionTypes.ADD_JOBS,
    payload: data,
  };
};

export const jobsFailed = (error) => {
  return {
    type: ActionTypes.JOBS_FAILED,
    payload: error,
  };
};
export const jobsLoading = () => {
  return {
    type: ActionTypes.JOBS_LOADING,
  };
};
// method to fetch jobs based on the language passed
export const fetchJobs = (data) => (dispatch) => {
  dispatch(jobsLoading(true));
  return fetch(
    `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${Config.APP_ID}&app_key=${Config.APP_KEY}&results_per_page=20&what=${data}&title_only=${data}`
  )
    .then((data) => data.json())
    .then((data) => dispatch(addJobs(data.results)))
    .catch((error) => dispatch(jobsFailed(error.message)));
};
