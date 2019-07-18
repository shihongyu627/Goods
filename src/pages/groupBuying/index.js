import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtButton, AtFloatLayout, AtIcon  } from 'taro-ui'
import './index.less'
import namedPng2 from '../../assets/img/tuan.png'
import namedPng3 from '../../assets/img/fenxiang.png'
import namedPng4 from '../../assets/img/kefu.png'
import namedPng5 from '../../assets/img/gouwuche.png'
import namedPng6 from '../../assets/img/weixin.png'
import namedPng7 from '../../assets/img/pengyouquan.png'
import namedPng8 from '../../assets/img/lianjie.png'
import namedPng1 from '../../assets/img/xiangqing.png'
// import namedPng9 from '../../assets/img/xiangqing.png'
export default class Gallery extends Component {

  constructor () {
   super(...arguments)
   this.state = {
      current: 0,
      list: [
       'https://yanxuan.nosdn.127.net/8dc3effeb526561f24ca051eeb8096f8.png',
       'https://yanxuan.nosdn.127.net/6dc171a0fa891e5dd6f46d62d2e88f36.png',
      'https://yanxuan.nosdn.127.net/a84d6a6bc8b2e3585449bd609bdb99cd.png',
       'https://yanxuan.nosdn.127.net/cd3962ae13ecc0070228b7d0a078888f.png',
      'https://yanxuan.nosdn.127.net/14c0f6e2a765de50357a2dbfab8e1920.png'],
      isOpened:false
   }
 }
 

  handleChange = (e) => {
    const { current } = e.detail
    this.setState({ current })
  }
  handleClose=()=> {
   this.setState({ 
      isOpened:false
    })
  }
  share=()=>{
   this.setState({ 
      isOpened:true
   })
  }
  config = {
   navigationBarTitleText: '本期团购'
 }

 componentWillMount () { }

 componentDidMount () { }

 componentWillUnmount () { }

 componentDidShow () { }

 componentDidHide () { }
  render () {
    
    const { current } = this.state.current
    return (
      <View className='index_wrapper'>
      <View className='groupBuying_wrapper'>
        <Swiper
          className='groupBuying_swiper'
          current={current}
          onChange={this.handleChange}
        >
          {this.state.list.map((item, index) => (
            <SwiperItem
              key={index}
              className='groupBuying_swiper_item'
            >
              <Image
                className='groupBuying_swiper_item_img'
                src={item}
              />
            </SwiperItem>
          ))}
        </Swiper>
        <View className='groupBuying_swiper_indicator'>
          <Text className='groupBuying_swiper_indicator_txt'>
            {`${current + 1}/${this.state.list.length}`}
          </Text>
        </View>
      </View>
         <View className='groupBuying_sell_wrapper'>
               <View className='groupBuying_sell'>¥140</View>
               <View className='groupBuying_sell_price'>¥168</View>
               <View className='groupBuying_sell_br'></View>
               <AtButton className='groupBuying_sell_btn'>已售150件</AtButton>
       </View>
          <View className='groupBuying_content_wrapper'>
               <View className='groupBuying_content_pic'> <Image src={namedPng2}/></View>
               <View className='groupBuying_content_title'>冠能幼猫粮2.5kg装冠能幼猫粮猫</View>
               <View className='groupBuying_content_txt'>冠能幼猫粮2.5kg装冠能幼猫粮冠能幼猫粮2.5kg装冠能幼猫粮猫…</View>
               <View className='groupBuying_content_imgWp' onClick={this.share}>
                  <View className='groupBuying_content_img'><Image src={namedPng3}/></View>
                   <View className='groupBuying_content_img_txt'>分享</View>
               </View>
         </View>
              <View className='groupBuying_text_wrapper'>
                    <View className='groupBuying_text'>
                        <View className='groupBuying_text_buy'>购买</View>
                        <View className='groupBuying_text_content'>可返100猫币</View>
                  </View>
                  <View className='groupBuying_text_two groupBuying_text'>
                        <View className='groupBuying_text_buy'>商户分享</View>
                        <View className='groupBuying_text_content'>返200猫币</View>
                  </View>
            </View>
             <View className='groupBuying_details_wrapper'>
                  <View className='groupBuying_details_pic'><Image src={namedPng1}/></View>
                   <View className='groupBuying_details_item groupBuying_details_item_one'>
                           <View className='groupBuying_details_item_txt '>商品编号：</View>
                           <View className='groupBuying_details_item_content'>130205</View>
                  </View>
                  <View className='groupBuying_details_item'>
                           <View className='groupBuying_details_item_txt'>品牌规格：</View>
                           <View className='groupBuying_details_item_content'>7KG</View>
                  </View>
                  <View className='groupBuying_details_item'>
                           <View className='groupBuying_details_item_txt'>主要原料：</View>
                           <View className='groupBuying_details_item_content'>鸡肉、牛奶乳、深海鱼油、复合维生素</View>
                  </View>
                  <View className='groupBuying_details_item'>
                           <View className='groupBuying_details_item_txt'>营养成分：</View>
                           <View className='groupBuying_details_item_content'>粗蛋白质≥40%，粗脂肪≥20%，水分≤12%，水分≤12，水分≤12</View>
                  </View>
                  <View className='groupBuying_details_item'>
                           <View className='groupBuying_details_item_txt'>适用对象：</View>
                           <View className='groupBuying_details_item_content'>幼猫</View>
                  </View>
                  <View className='groupBuying_details_item'>
                           <View className='groupBuying_details_item_txt'>颗粒大小：</View>
                           <View className='groupBuying_details_item_content'>适中</View>
                  </View>
                  <View className='groupBuying_details_item'>
                           <View className='groupBuying_details_item_txt'>口味配方：</View>
                           <View className='groupBuying_details_item_content'>鸡肉</View>
                  </View>
                  <View className='groupBuying_details_item'>
                           <View className='groupBuying_details_item_txt'>出场保质期：</View>
                           <View className='groupBuying_details_item_content'>18个月</View>
                  </View>
                  <View className='groupBuying_details_item'>
                           <View className='groupBuying_details_item_txt'>重量：</View>
                           <View className='groupBuying_details_item_content'>7.16KG</View>
                  </View>
            </View>
            <View className='groupBuying_footerWp'></View>
              <View className='groupBuying_footer_wrapper'>
                  <View className='groupBuying_footer_keFu'>
                      <View className='groupBuying_footer_keFu_pic'><Image src={namedPng4}/></View>
                      <View className='groupBuying_footer_txt'>客服</View>
                  </View>
                    <View className='groupBuying_footer_gouWu'>
                     <View className='groupBuying_footer_gouWu_pic'><Image src={namedPng5}/></View>
                      <View className='groupBuying_footer_txt'>购物车</View>
                  </View>
                  <View className='groupBuying_footer_buyBtn'>立即购买</View>
                  <View className='groupBuying_footer_joinBtn'>加入购物车</View>
            </View>
                <AtFloatLayout isOpened={this.state.isOpened} onClose={this.handleClose.bind(this)}>
                        <View className='groupBuying_box_tltleWp'>
                           <View className='groupBuying_box_tltle'>
                              <View className='groupBuying_box_tltle_one'>邀请新人注册，即可获得价值</View>
                              <View className='groupBuying_box_tltle_two'>288优惠券礼包</View>
                           </View>
                           <View className='groupBuying_box_txt'>好友成功下单还可获得相应积分</View>
                        </View>
                         <View className='groupBuying_box_log'>
                              <View className='at-icon at-icon-close' onClick={this.handleClose}></View>
                        </View>
                          <View className='groupBuying_box_itemWp'>
                               <View className='groupBuying_box_item'>
                                    <View className='groupBuying_box_item_pic'><Image src={namedPng6}/></View>
                                    <View className='groupBuying_box_item_txt'>微信</View>
                              </View>
                              <View className='groupBuying_box_item'>
                                    <View className='groupBuying_box_item_pic'><Image src={namedPng7}/></View>
                                    <View className='groupBuying_box_item_txt'>朋友圈</View>
                              </View>
                              <View className='groupBuying_box_item'>
                                    <View className='groupBuying_box_item_pic'><Image src={namedPng8}/></View>
                                    <View className='groupBuying_box_item_txt'>复制链接</View>
                              </View>
                        </View>
               </AtFloatLayout>
      </View>
    )
  }
}
