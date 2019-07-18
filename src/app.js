import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import '@tarojs/async-await'
import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/category/index',
      'pages/classify/index',
      'pages/classifyChildOne/index',
      'pages/groupBuying/index',
      "pages/buyCar/index",
      "pages/myMenu/index",
      "pages/address/index",
      "pages/editPage/index",
      "pages/addPage/index",
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#FFE142',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#C8C2C4',
      selectedColor: '#ECBD15',
      backgroundColor:'#FFFFFF',
      list:[
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath":'./assets/img/home.png',
          "selectedIconPath":'./assets/img/home_one.png',
        },
        {
          "pagePath": "pages/classify/index",
          "text": "分类",
          "iconPath":'./assets/img/classify.png',
          "selectedIconPath":'./assets/img/classify_one.png'
        },
        {
          "pagePath": "pages/buyCar/index",
          "text": "购物车",
          "iconPath":'./assets/img/buy.png',
          "selectedIconPath":'./assets/img/buy_one.png'
        },
        {
          "pagePath": "pages/myMenu/index",
          "text": "我的",
          "iconPath":'./assets/img/my.png',
          "selectedIconPath":'./assets/img/my_one.png'
        }
      ],
      position:'bottom',

    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
