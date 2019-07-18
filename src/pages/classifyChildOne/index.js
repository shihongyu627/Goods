import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'
import { AtIcon, AtButton, AtListItem } from 'taro-ui'
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
      acClass_value: '品牌馆',
      navList: [
        { title: '品牌馆' },
        { title: '礼盒专区' },
        { title: '猫粮' },
        { title: '罐头' },
      ],
      addClass:false,
      acClass_id: '0',
      // open: false,
      sortArray:['综合排序','热度排序','最新上架','价格升序','价格倒序'],
      sortValue:'综合排序'
    }
  }
  handleClick=()=>{
    console.log(123);
    this.setState({
      addClass:!this.state.addClass
     });
  }
  active = (title) => {
    this.setState({
      acClass_value: title,
    })
  }
  sortList=(id,value)=>{ 
    this.setState({
      acClass_id:id
    })
    console.log(value);
    this.setState({
     sortValue:value
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
    navigationBarTitleText: '冠能'
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
      <View className='classifyChildOne_wrapper'>
         <View className='classifyChildOne_header'>           
            <View className='category_sort' onClick={this.handleClick.bind(this)}>
                <View className='category_sort_title'>{this.state.sortValue}</View>
                <View className='category_sort_radius'>
                    <View className={"at-icon at-icon-chevron-down" + (this.state.addClass ? ' active' : "")}></View>
               </View>          
           </View>
              <View className='classifyChildOne_search'>
                <View className='at-icon at-icon-search'></View>
             </View>     
              <Input className='search_name' selection-start='50' placeholder='搜索你需要的商品关键词'></Input>
         </View>
         <View className={"list_itemWp" + (this.state.addClass ? '' : " activeList")}>
          <View className='list_item'>
          {this.state.sortArray.map((item,index)=>
              <View className='list_item_content' onClick={this.sortList.bind(this,index,item)} key={index}>
                  <View className={"list_item_txt" + (this.state.acClass_id == index ? ' activeTxt' : "")}>{item}</View>
                  <View className={"taro-text at-icon at-icon-check" + (this.state.acClass_id == index ? ' active' : "")}></View> 
                  
              </View>
            )}
         </View>
         <View className='boxShow'></View>
        </View> 
            <View className='classifyChildOne_list'>
              <View className='classifyChildOne_list_item'>
                    <View className='classifyChildOne_list_pic'><Image src={namedPng6}/></View>
                    <View className='classifyChildOne_list_txt'>冠能幼猫粮食冠能幼猫粮食冠能幼猫粮食冠能冠能幼猫粮食冠能幼猫粮食冠能幼猫粮食冠能……</View>
                    <View className='classifyChildOne_list_sell'>
                        <View className='classifyChildOne_list_price'>¥378</View>
                        <View className='classifyChildOne_list_buyPic'><Image src={namedPng7}/></View>
                    </View>
             </View>
              <View className='classifyChildOne_list_item'>
                    <View className='classifyChildOne_list_pic'><Image src={namedPng6}/></View>
                    <View className='classifyChildOne_list_txt'>冠能幼猫粮食冠能幼猫粮食冠能幼猫粮食</View>
                    <View className='classifyChildOne_list_sell'>
                        <View className='classifyChildOne_list_price'>¥40</View>
                        <View className='classifyChildOne_list_buyPic'><Image src={namedPng7}/></View>
                    </View>
            </View>
            <View className='classifyChildOne_list_item'>
                    <View className='classifyChildOne_list_pic'><Image src={namedPng6}/></View>
                    <View className='classifyChildOne_list_txt'>冠能幼猫粮食冠能幼猫粮食冠能幼猫粮食</View>
                    <View className='classifyChildOne_list_sell'>
                        <View className='classifyChildOne_list_price'>¥40</View>
                        <View className='classifyChildOne_list_buyPic'><Image src={namedPng7}/></View>
                    </View>
            </View>
        </View>
        <View className='classifyChildOne_list'>
              <View className='classifyChildOne_list_item'>
                    <View className='classifyChildOne_list_pic'><Image src={namedPng6}/></View>
                    <View className='classifyChildOne_list_txt'>冠能幼猫粮食冠能幼猫粮食冠能幼猫粮食冠能冠能幼猫粮食冠能幼猫粮食冠能幼猫粮食冠能……</View>
                    <View className='classifyChildOne_list_sell'>
                        <View className='classifyChildOne_list_price'>¥378</View>
                        <View className='classifyChildOne_list_buyPic'><Image src={namedPng7}/></View>
                    </View>
             </View>
              <View className='classifyChildOne_list_item'>
                    <View className='classifyChildOne_list_pic'><Image src={namedPng6}/></View>
                    <View className='classifyChildOne_list_txt'>冠能幼猫粮食冠能幼猫粮食冠能幼猫粮食</View>
                    <View className='classifyChildOne_list_sell'>
                        <View className='classifyChildOne_list_price'>¥40</View>
                        <View className='classifyChildOne_list_buyPic'><Image src={namedPng7}/></View>
                    </View>
            </View>
            <View className='classifyChildOne_list_item'>
                    <View className='classifyChildOne_list_pic'><Image src={namedPng6}/></View>
                    <View className='classifyChildOne_list_txt'>冠能幼猫粮食冠能幼猫粮食冠能幼猫粮食</View>
                    <View className='classifyChildOne_list_sell'>
                        <View className='classifyChildOne_list_price'>¥40</View>
                        <View className='classifyChildOne_list_buyPic'><Image src={namedPng7}/></View>
                    </View>
            </View>
        </View>
     </View>
    )
  }
}
