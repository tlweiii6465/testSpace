import axios from "axios";
import { API_URL, HTTP_HEADERS } from "./constant";
import moment from "moment";
import { Toast } from 'react-native';

export const getResultListRequest = (date) => async dispatch => {
    try {
        dispatch(_requestingGetResultList());
        // console.log(`https://app.4dking.com.my/nocache/result_v2.json`)
        console.log(`https://app.4dking.com.my/past_results.php?d=${date}`)
        if (moment().format("Y-MM-DD") == date) {
            var url = `https://app.4dking.com.my/nocache/result_v2.json`;
        }else{
            var url = `https://app.4dking.com.my/past_results.php?d=${date}`;
        }
        const res = await axios({
            // url: `${API_URL}/getResult/${date}`,
            url: url,
            method: "GET",
            headers: HTTP_HEADERS,
        });
        const payload = res.data;
        dispatch(_successGetResultList(payload));
    } catch (e) {
        dispatch(_failGetResultList(e.response));
    }
};

const _requestingGetResultList = () => ({
    type: "REQUESTING_GET_RESULT_LIST"
});

const _successGetResultList = (payload) => ({
    type: "SUCCESS_GET_RESULT_LIST",
    payload
});

const _failGetResultList = (errorMessage) => ({
    type: "FAIL_GET_RESULT_LIST",
    errorMessage
});
