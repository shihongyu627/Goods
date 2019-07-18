import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'
import { AtIcon, AtButton, AtInput } from 'taro-ui'
import namedPng from '../../assets/img/log.png'
import namedPng1 from '../../assets/img/one.jpg'
import namedPng2 from '../../assets/img/two.jpg'
import namedPng3 from '../../assets/img/three.jpg'
import namedPng4 from '../../assets/img/four.jpg'
import namedPng5 from '../../assets/img/five.jpg'
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      addClass:false
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onFocus=()=>{
    console.log(123);
    this.setState({
      addClass:true
     });
  }
  onBlur=()=>{
    this.setState({
      addClass:false
     });
  }
  category=()=>{
    console.log(456);
    
    Taro.navigateTo({
      url:'/pages/category/index'
  })
  }
  config = {
    navigationBarTitleText: '店铺名称'
  }
  Panic=()=>{
    Taro.navigateTo({
      url:'/pages/groupBuying/index'
  })
  }
  componentWillMount () {
    Taro.request({
      url: 'http://www.doclever.cn:8090/mock/5d25495d4a9da91cd64da2b5/api/home/index',
      data: {
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
           console.log(res.data.data);
           
       this.setState({
           
        })  
      })
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index_wrapper'>
        <View className='index_title'></View>
         <View className='index_header'>
           <View className='index_log'>
           <Image src={namedPng}/>
           </View>       
            <View className={"index_search" + (this.state.addClass ? ' active' : "")}>
                <View className='at-icon at-icon-search'></View>
            </View>     
                <Input className='search_name' placeholder='搜索你需要的商品关键词' onBlur={this.onBlur.bind(this)} onFocus={this.onFocus.bind(this)} />
              <View className='index_banner'>
              <Swiper
                className='test-h'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
                <SwiperItem>
                  <Image src={namedPng1}/>
                </SwiperItem>
                <SwiperItem>
                  <Image src={namedPng2}/>
                </SwiperItem>
                <SwiperItem>
                <Image src={namedPng3}/>
                </SwiperItem>
                <SwiperItem>
                  <Image src={namedPng4}/>
                </SwiperItem>
                <SwiperItem>
                  <Image src={namedPng5}/>
                </SwiperItem>
              </Swiper>
              </View>
            </View>
        <View className='index_body'>
          <View className='index_item'>
            <View className='index_item_flex index_item_flex_one' onClick={this.category}>
              <View className='index_item_pic'><Image src={namedPng1}/></View>
              <View className='index_item_name'>精选主粮</View>
            </View>
            <View className='index_item_flex'>
                <View className='index_item_pic'><Image src={namedPng2}/></View>
                <View className='index_item_name'>零食罐头</View>
            </View>
            <View className='index_item_flex'>
               <View className='index_item_pic'><Image src={namedPng3}/></View>
              <View className='index_item_name'>营养保健</View>
            </View>
            <View className='index_item_flex'>
              <View className='index_item_pic'><Image src={namedPng4}/></View>
              <View className='index_item_name'>玩具日用</View>
            </View>
            <View className='index_item_flex'>
              <View className='index_item_pic'><Image src={namedPng5}/></View>
              <View className='index_item_name'>猫窝砂盆</View>
            </View>
          </View>
          <View className='index_txt'>
             <View className='index_txt_title'>-本期团购-</View>
             <View className='index_txt_content'>大师精选调配，混合猫砂6L装</View>
             <View className='index_txt_price'>¥29</View>
             <View className='index_txt_br'></View>
             <View className='index_txt_sell'>¥24</View>
             <View className='index_txt_radius' onClick={this.Panic}>
               <View className='index_txt_text'>马上 抢购</View>
             </View>
          </View>
          <View className='index_hot_sell'>
              <View className='index_hot_sell_title'>热卖推荐</View>
              <View className='index_hot_sell_icon'>
                <View className='at-icon at-icon-chevron-right'></View>
              </View>
              <View className='index_hot_sell_more'>更多</View>
        </View>
         <View className='index_item_content'>
           <View className='index_item_contentWp'>
            <View className='index_item_contentTitle index_item_contentTitle_one'>
              <View className='index_item_pic'><Image src={namedPng4}/></View>
              <View className='index_item_pic_boxShow'></View>
              <View className='index_item_boxShow'>
                <View className='index_item_boxShow_title'>猫咪新手套餐</View>
                <View className='index_item_boxShow_txt'>基础版本</View>
                <View className='index_item_boxShow_priceWp'>
                  <View className='index_item_boxShow_price'>¥29</View>
                  <View className='index_item_boxShow_price_br'></View>
                  <View className='index_item_boxShow_sell'>¥24</View>
                </View>
              </View>
              <AtButton className='index_item_contentTitle_btn'>加入购物车</AtButton>
            </View>
            <View className='index_item_contentTitle'>
            <View className='index_item_pic'><Image src={namedPng2}/></View>
              <View className='index_item_pic_boxShow'></View>
              <View className='index_item_boxShow'>
                <View className='index_item_boxShow_title'>猫咪新手套餐祝您轻松上手</View>
                <View className='index_item_boxShow_txt'>基础版本基础版本基基础版本基础版本基础……</View>
                <View className='index_item_boxShow_priceWp'>
                  <View className='index_item_boxShow_price'>¥29</View>
                  <View className='index_item_boxShow_price_br'></View>
                  <View className='index_item_boxShow_sell'>¥24</View>
                </View>
              </View>
              <AtButton className='index_item_contentTitle_btn'>加入购物车</AtButton>
            </View>
            <View className='index_item_contentTitle'>
            <View className='index_item_pic'><Image src={namedPng1}/></View>
              <View className='index_item_pic_boxShow'></View>
              <View className='index_item_boxShow'>
                <View className='index_item_boxShow_title'>猫咪新手套餐</View>
                <View className='index_item_boxShow_txt'>基础版本</View>
                <View className='index_item_boxShow_priceWp'>
                  <View className='index_item_boxShow_price'>¥29</View>
                  <View className='index_item_boxShow_price_br'></View>
                  <View className='index_item_boxShow_sell'>¥24</View>
                </View>
              </View>
              <AtButton className='index_item_contentTitle_btn'>加入购物车</AtButton>
            </View>
            <View className='index_item_contentTitle'>
            <View className='index_item_pic'><Image src={namedPng2}/></View>
              <View className='index_item_pic_boxShow'></View>
              <View className='index_item_boxShow'>
                <View className='index_item_boxShow_title'>猫咪新手套餐</View>
                <View className='index_item_boxShow_txt'>基础版本</View>
                <View className='index_item_boxShow_priceWp'>
                  <View className='index_item_boxShow_price'>¥29</View>
                  <View className='index_item_boxShow_price_br'></View>
                  <View className='index_item_boxShow_sell'>¥24</View>
                </View>
              </View>
              <AtButton className='index_item_contentTitle_btn'>加入购物车</AtButton>
            </View>
            <View className='index_item_contentTitle'>
            <View className='index_item_pic'><Image src={namedPng3}/></View>
              <View className='index_item_pic_boxShow'></View>
              <View className='index_item_boxShow'>
                <View className='index_item_boxShow_title'>猫咪新手套餐</View>
                <View className='index_item_boxShow_txt'>基础版本</View>
                <View className='index_item_boxShow_priceWp'>
                  <View className='index_item_boxShow_price'>¥29</View>
                  <View className='index_item_boxShow_price_br'></View>
                  <View className='index_item_boxShow_sell'>¥24</View>
                </View>
              </View>
              <AtButton className='index_item_contentTitle_btn'>加入购物车</AtButton>
            </View>
            </View>
        </View>
            <View className='index_list'>
              <View className='index_list_title'>精选主粮推荐</View>
              <View className='index_list_icon'>
                <View className='at-icon at-icon-chevron-right'></View>
              </View>
              <View className='index_list_more'>更多</View>
          </View>
            <View className='index_list_content'>
               <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng3}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng1}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng2}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng4}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            </View>
            <View className='index_list'>
              <View className='index_list_title'>零食罐头推荐</View>
              <View className='index_list_icon'>
                <View className='at-icon at-icon-chevron-right'></View>
              </View>
              <View className='index_list_more'>更多</View>
          </View>
            <View className='index_list_content'>
               <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng3}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng1}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng2}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng4}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            </View>
            <View className='index_list'>
              <View className='index_list_title'>营养保健推荐</View>
              <View className='index_list_icon'>
                <View className='at-icon at-icon-chevron-right'></View>
              </View>
              <View className='index_list_more'>更多</View>
          </View>
            <View className='index_list_content'>
               <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng3}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng1}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng2}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng4}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            </View>
            <View className='index_list'>
              <View className='index_list_title'>玩具日用推荐</View>
              <View className='index_list_icon'>
                <View className='at-icon at-icon-chevron-right'></View>
              </View>
              <View className='index_list_more'>更多</View>
          </View>
            <View className='index_list_content'>
               <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng3}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng1}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng2}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            <View className='index_listWp'>
               <View className='index_list_pic'><Image src={namedPng4}/></View>
                <View className='index_list_box'>
                  <View className='index_list_box_title'>基础猫粮6L装美</View>
                  <View className='index_list_box_txt'>基础猫粮6L基础猫粮6L装…</View>
                  <View className='index_list_box_sell'>¥24</View>
              </View>
            </View>
            </View>
      </View>
      </View>
    )
  }
}
