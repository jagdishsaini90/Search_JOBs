import * as ActionTypes from './ActionTypes';

// Schema for the job store
const JOBS = (state = {
      jobs: [],
      loading: false,
      error : null
}, action) => {
      switch (action.type) {
            case ActionTypes.ADD_JOBS:
                  return { ...state, jobs: action.payload, loading: false, error: null };
            case ActionTypes.JOBS_FAILED:
                  return { ...state, jobs: [], loading: false, error: action.payload };
            case ActionTypes.JOBS_LOADING:
                  return { ...state, loading: true, jobs: [], error: null };
            default:
                  return state;
      }
}

export default JOBS;