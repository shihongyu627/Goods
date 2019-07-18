import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'
import { AtIcon, AtButton, } from 'taro-ui'
import namedPng from '../../assets/img/log.png'
import namedPng1 from '../../assets/img/one.jpg'
import namedPng2 from '../../assets/img/two.jpg'
import namedPng3 from '../../assets/img/three.jpg'
import namedPng4 from '../../assets/img/four.jpg'
import namedPng5 from '../../assets/img/five.jpg'
import namedPng6 from '../../assets/img/list.png'
import namedPng7 from '../../assets/img/buyCar.png'
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      acClass_id: '品牌馆',
      navList: [
        { title: '品牌馆' },
        { title: '礼盒专区' },
        { title: '猫粮' },
        { title: '罐头' },
      ],
    }
  }
  active = (title) => {
    this.setState({
      acClass_id: title,
    })
  }
  // onChange (value) {
  //   this.setState({
  //     value: value,
  //   })
  // }

  // handleClicks (value) {
  //   this.setState({
  //     open: value
  //   })
  // }
  config = {
    navigationBarTitleText: '商品分类'
  }
  classifyChildOne=()=> {
    Taro.navigateTo({
      url:'/pages/classifyChildOne/index'
  })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='classify_wrapper'>
         <View className='classify_header'>
              <View className='classify_search'>
                <View className='at-icon at-icon-search'></View>
             </View>     
              <Input className='search_name' selection-start='50' placeholder='搜索你需要的商品关键词'></Input>
         </View>
         <View className='goods_body'>
          <View className='left_item_name'>
            {this.state.navList.map((item) =>
              <View className={'goods_name' + (this.state.acClass_id === item.title ? " active" : "")}
                onClick={() => this.active(item.title)} key=''>{item.title}
                  <View className={(this.state.acClass_id === item.title ? " actives" : "")}></View>
            </View>
            )}
          </View>
            <View className='right_list_wrapper'>        
                <View className='right_list'>
                    <View className='right_list_item' onClick={this.classifyChildOne}>
                        <View className='right_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='right_list_item_txt'>冠能</View>
                  </View>
                  <View className='right_list_item'>
                        <View className='right_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='right_list_item_txt'>佩玛斯特</View>
                  </View>
                  <View className='right_list_item'>
                        <View className='right_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='right_list_item_txt'>巅峰</View>
                  </View>
              </View>
              <View className='right_list'>
                    <View className='right_list_item'>
                        <View className='right_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='right_list_item_txt'>冠能</View>
                  </View>
                  <View className='right_list_item'>
                        <View className='right_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='right_list_item_txt'>佩玛斯特</View>
                  </View>
                  <View className='right_list_item'>
                        <View className='right_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='right_list_item_txt'>巅峰</View>
                  </View>
              </View>
              <View className='right_list'>
                    <View className='right_list_item'>
                        <View className='right_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='right_list_item_txt'>冠能</View>
                  </View>
                  <View className='right_list_item'>
                        <View className='right_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='right_list_item_txt'>佩玛斯特</View>
                  </View>
                  <View className='right_list_item'>
                        <View className='right_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='right_list_item_txt'>巅峰</View>
                  </View>
              </View>
          </View>
        </View>
     </View>
    )
  }
}
