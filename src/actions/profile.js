import { USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE, FETCH_USER_PROFILE } from "./actionTypes";

export function startUserProfileFetch () {
    return {
        type: FETCH_USER_PROFILE,
    };
}
export function userProfileSuccess (user) {
    return {
        type: USER_PROFILE_SUCCESS,
        user,
    };
}

export function userProfileFailed (error) {
    return {
        type: USER_PROFILE_FAILURE,
        error,
    };
}