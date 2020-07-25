import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=8&nat=us";

// Export an object containing methods we'll use for accessing the randomuser.me API
export default {
  getAllEmployees: function() {
    return axios.get(BASEURL);
  }
  
};