import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
// import { AtTextarea } from 'taro-ui'
import './index.less'
// import indexJson from '../../../asset/json/index.json'

export default class Index extends Component {

    config = {
        navigationBarTitleText: '编辑收货地址',
    }

    constructor() {
        super(...arguments)
        this.state = {
            value: '',
            editAddressList:[],
            editList:[]
        }
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    goBack=()=>{
        Taro.navigateBack({
            delta:1
        })
    }
    componentWillMount() {
        Taro.request({
            url: 'http://www.doclever.cn:8090/mock/5d1c10554a9da91cd64d19a6/address/lists',
            data: {
                // foo: 'foo',
                // category_name:''
                // bar: 10
            },
            header: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                this.setState({
                    editAddressList: res.data.data.data
                })
                // console.log(res.data.data.data);
            })
    }
    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }


    render() {
        console.log(this.state.editAddressList);
         this.state.editAddressList.map((item)=>{     
            if(item.id==this.$router.params.id) {
               this.state.editList.push(item)
            }
            
      }) 
      console.log(this.state.editList);
      
        return (
            <View className='index'>   
            <View className='list_wp'>
                  <View className='message-table'>
                  {this.state.editList.map((item)=>
                  <View>
                      <View className='item-box'>
                          <Text className='name-txt'>收货人</Text>
                          <Input className='input' type='text' placeholder='请输入姓名' value={item.consigner}></Input>
                      </View>
                      <View className='item-box'>
                          <Text className='name-txt'>手机号码</Text>
                          <Input className='input' type='text' placeholder='请输入电话号码' value={item.mobile}></Input>
                      </View>
                      <View className='item-box'>
                          <Text className='name-txt'>所在地区</Text>
                      </View>
                      <View className='item-box'>
                          <Text className='name-txt'>详情地址</Text>
                      </View>
                      <View className='item-box item-box-last'>
                          <Text className='name-txt'>邮编</Text>
                      </View>
                   </View>
                 )} 
                   </View>   
               </View>     
               <View className='add_btnWp'>
                <View className='add_btn' onClick={this.addPage}>保存</View>
            </View>        
            </View>
        )
    }
}
