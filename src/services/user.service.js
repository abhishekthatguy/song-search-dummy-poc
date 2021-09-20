import axios from 'axios';
import config from '../config/config';

export const userService={
    get
}

async function get(apiEndpoint) {
  try {
    const response = await axios({
        method: 'get',
        url: config.baseUrl+apiEndpoint,
        
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': true
            
             }
        })
    return response;
    
    
  } catch (error) {
    console.error(error);
  }
}
// async function post(apiEndpoint,payload) {
//   try {
//     const response = await axios.get(config.baseUrl+apiEndpoint,payload,getOptions());
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function getOptions(){
//     let options = {};
//     return options;
// }
