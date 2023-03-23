import axios from "axios";
import { endPoints } from "_constants";
import { prepareResponse } from "utils";

const getLogs = async (key, accessToken) => {
  return await axios.get(endPoints.getLogs(key), {
    headers: {
      "x-access-token": accessToken
    }
  }).then(prepareResponse)
};

export default getLogs;