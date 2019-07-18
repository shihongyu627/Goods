import Taro, { Component } from '@tarojs/taro'
import { View, Image} from '@tarojs/components'
import './index.less'
import { AtIcon, AtButton,} from 'taro-ui'
import namedPng1 from '../../assets/img/user.png'
import namedPng2 from '../../assets/img/address.png'
import namedPng3 from '../../assets/img/msg.png'
import namedPng4 from '../../assets/img/myMenu.png'
import namedPng5 from '../../assets/img/ask.png'
export default class Index extends Component {
    constructor () {
      super(...arguments)
      this.state = {
        
      }
    }
  
    config = {
      navigationBarTitleText: '设置'
    }
    addAdress=()=>{
        console.log(123.);
        
        Taro.navigateTo({
            url:'/pages/address/index'
        })
    }
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
      return (
         <View className='myMenu_wrapper'>
             <View className='myMenu_header'>
                  <View className='myMenu_header_pic'> <Image src={namedPng1}/></View>
                  <View className='myMenu_header_content'>
                    <View className='myMenu_header_name'>李白</View>
                    <View className='myMenu_header_id'>ID：123456</View>
                </View>
                     <View className='myMenu_header_icon'>
                        <View className='at-icon at-icon-chevron-right'></View>
                    </View>
            </View>
               <View className='myMenu_list'>
                      <View className='myMenu_list_item'>
                            <View className='myMenu_list_item_pic'><Image src={namedPng2}/></View>
                            <View className='myMenu_list_item_content' onClick={this.addAdress}>
                                <View className='myMenu_list_item_txt'>地址管理</View>
                                 <View className='myMenu_list_item_icon'>
                                 <View className='at-icon at-icon-chevron-right'></View>
                                </View>
                           </View>
                    </View>
                    <View className='myMenu_list_item'>
                            <View className='myMenu_list_item_pic'><Image src={namedPng3}/></View>
                            <View className='myMenu_list_item_content'>
                                <View className='myMenu_list_item_txt'>消息通知</View>
                                 <View className='myMenu_list_item_icon'>
                                 <View className='at-icon at-icon-chevron-right'></View>
                                </View>
                           </View>
                    </View>
                    <View className='myMenu_list_item'>
                            <View className='myMenu_list_item_pic'><Image src={namedPng4}/></View>
                            <View className='myMenu_list_item_content'>
                                <View className='myMenu_list_item_txt'>账户安全</View>
                                 <View className='myMenu_list_item_icon'>
                                 <View className='at-icon at-icon-chevron-right'></View>
                                </View>
                           </View>
                    </View>
                    <View className='myMenu_list_item'>
                            <View className='myMenu_list_item_pic'><Image src={namedPng5}/></View>
                            <View className='myMenu_list_item_content'>
                                <View className='myMenu_list_item_txt'>问题反馈</View>
                                 <View className='myMenu_list_item_icon'>
                                 <View className='at-icon at-icon-chevron-right'></View>
                                </View>
                           </View>
                    </View>
             </View>
             <AtButton className='myMenu_btn myMenu_btn_cut'>切换账号</AtButton>
             <AtButton className='myMenu_btn myMenu_btn_quit'>退出登录</AtButton>
       </View>
      )
    }
  }