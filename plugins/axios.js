import Qs from 'qs';

export default function ({
  $axios
}) {
  const errCode = {
    400: '错误请求',
    401: '未授权，请重新登录',
    403: '拒绝访问',
    404: '请求错误，未找到该资源',
    405: '请求方法未允许',
    408: '请求超时',
    500: '服务器端出错',
    501: '网络未实现',
    502: '网络错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'http版本不支持该请求'
  };

  $axios.onRequest(request => {
    if (request.method === 'post' && !(request.data instanceof FormData)) {
      request.data = Qs.stringify(request.data);
      return request;
    }
    return request;
  });

  // 错误拦截
  $axios.onError(err => {
    const code = parseInt(err.response && err.response.status);
    if (err && err.response) {
      errCode[code] ?
        (err.message = errCode[code]) :
        (err.message = `连接错误${code}`);
    } else {
      err.message = '没有服务器返回状态码，连接到服务器失败';
    }
    return err.message;
    // if (code === 400) {
    //   redirect('/400')
    // }
  })


}
