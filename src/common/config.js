const config = {
    development: {
      API_HOST: 'http://www.doclever.cn:8090/mock/5d1c10554a9da91cd64d19a6/',
      HOST_TITLE: '(开发环境)',
      QINIU_KEY: '',
      BAIDU_MAP_AK: '',
      AMAP_KEY: '',
      PUSHY_APP_KEY: {
        ios: '',
        android: ''
      },
      WECHAT_APP_ID: ''
    },
    staging: {
      API_HOST: 'http://www.doclever.cn:8090/mock/5d1c10554a9da91cd64d19a6/',
      HOST_TITLE: '(测试环境)',
      QINIU_KEY: '',
      BAIDU_MAP_AK: '',
      AMAP_KEY: '',
      PUSHY_APP_KEY: {
        ios: '',
        android: ''
      },
      WECHAT_APP_ID: ''
    },
    production: {
      API_HOST: 'http://www.doclever.cn:8090/mock/5d1c10554a9da91cd64d19a6/',
      HOST_TITLE: '(生产环境)',
      QINIU_KEY: '',
      BAIDU_MAP_AK: '',
      AMAP_KEY: '',
      PUSHY_APP_KEY: {
        ios: '',
        android: ''
      },
      WECHAT_APP_ID: ''
    },
    common: {
      VERSION_NAME: {
        ios: '1.0.0',
        android: '1.0.0'
      },
      QINIU_IMAGE_URL: 'http://www.doclever.cn:8090/mock/5d1c10554a9da91cd64d19a6/',
      IMAGE_SMALL: '?imageView2/2/w/700/interlace/1/q/75',
      IMAGE_THUMBNAIL: '?imageView2/2/w/256/interlace/1/q/75',
      IMAGE_ICON: '?imageView2/2/w/100/interlace/1/q/75'
    }
  };
  
  export default {
    ...config.development,
    ...config.common
  };
  