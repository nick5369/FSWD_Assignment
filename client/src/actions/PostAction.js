import * as PostApi from '../api/PostRequest';

export const getTimelinePosts = (id) => async (dispatch) => {

    dispatch({ type: "RETRIEVING_START" });

    try {
        const { data } = await PostApi.getTimelinePosts(id);
        dispatch({ type: "RETRIEVING_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "RETRIEVING_FAIL" });
    }        
}

export const updateFollowers = (id) => async (dispatch) => {

    try {
        const { data } = await PostApi.getUser(id);
        dispatch({ type: "UPDATE_FOLLOWERS", data: data });
    } catch (error) {
        console.log(error);
    }        
}