import { Message } from 'element-ui';
export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
    })
    $axios.onError(error => {
      Message({ type: 'error', message: error.message, duration: 5000 });
    //   redirect('/400',error.message)
      const code = parseInt(error.response && error.response.status)
    })
  }