import Taro from '@tarojs/taro'

export default function request(url,options) {
  let newOptions = { ...options };
  console.log(newOptions);
  
  if (newOptions.method === 'POST' || newOptions.method === 'GET') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.header = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        ...newOptions.header
      };
    } else {
      // newOptions.body is FormData
      newOptions.header = {
        Accept: 'application/json',
        ...newOptions.header
      };
    }
  } 
  // else {
  //   newOptions.header = {
  //     'Content-Type': 'json',
  //     ...newOptions.header
  //   }
  //   // newOptions.method = 'GET'
  // }

  return Taro.request({url, ...newOptions})

}

