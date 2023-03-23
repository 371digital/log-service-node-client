import { endPoints } from "_constants";
import { prepareResponse } from "utils";
import axios from "axios";

const createLog = async ({ key, log }, accessToken) => {
    return await axios.post(endPoints.createLog, {
        key, log
    }, {
        headers: {
            "x-access-token": accessToken
        }
    }).then(prepareResponse);
};

export default createLog;