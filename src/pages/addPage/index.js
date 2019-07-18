import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import { AtSwitch  } from 'taro-ui'
import './index.less'
// import indexJson from '../../../asset/json/index.json'

export default class Index extends Component {

    config = {
        navigationBarTitleText: '添加收货地址',
    }

    constructor() {
        super(...arguments)
        this.state = {
            value: false,
        }
    }
    handleChange = value => {
        this.setState({ value })
      }
    goBack=()=>{
        Taro.navigateBack({
            delta:1
        })
    }
    componentWillMount() { }
    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }


    render() { 
        return (
            <View className='index'>   
            <View className='list_wp'>
                  <View className='message-table'>
                  <View>
                      <View className='item-box'>
                          <Text className='name-txt'>收货人</Text>
                          <Input className='input' type='text' placeholder='请输入姓名'></Input>
                      </View>
                      <View className='item-box'>
                          <Text className='name-txt'>手机号码</Text>
                          <Input className='input' type='text' placeholder='请输入电话号码'></Input>
                      </View>
                      <View className='item-box'>
                          <Text className='name-txt'>所在地区</Text>
                          <Input className='input' type='text' placeholder='地区信息'></Input>
                      </View>
                      <View className='item-box'>
                          <Text className='name-txt'>详细地址</Text>
                          <Input className='input' type='text' placeholder='详细地址'></Input>
                      </View>
                      <View className='item-box item-box-last'>
                          <Text className='name-txt'>邮编</Text>
                          <Input className='input' type='text' placeholder='邮编'></Input>
                      </View>
                   </View>
                   </View>   
               </View>     
               <View className='set_switch'>
                   <View className='set_switch_txt'>设为默认</View>
                   <AtSwitch color='#F5D33A' checked={this.state.value} onChange={this.handleChange} />
               </View>
               <View className='add_btnWp'>
                <View className='add_btn' onClick={this.addPage}>保存</View>
            </View>        
            </View>
        )
    }
}
