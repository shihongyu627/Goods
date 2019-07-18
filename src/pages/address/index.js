import Taro, { Component } from '@tarojs/taro'
import { View, Text,Children } from '@tarojs/components'
import './index.less'
import { AtIcon } from 'taro-ui'
import { getInTheaters, detail} from '../../service/app'
import namedPng1 from '../../assets/img/radius.png'
import namedPng2 from '../../assets/img/edit.png'
import namedPng3 from '../../assets/img/del.png'
export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { 
        addressList:[],
        acClass_id:'',
        id:''
     }
  }
  config = {
    navigationBarTitleText: '管理收货地址'
  }
  //编辑传参id
editPage=(id)=>{
    Taro.navigateTo({
        url:`/pages/editPage/index?id=${id}`
    })
}
//跳转添加地址
addPage=()=>{
    Taro.navigateTo({
        url:'/pages/addPage/index'
    })
}

goBack=()=>{
    Taro.navigateBack({
        delta:1
    })
}
  componentWillMount () { }
   active = (id) => {
     console.log(123); 
    this.setState({
       acClass_id: id,
    })
    }
  componentDidMount () { 
    this.getList()
  }
  getList = async () => {
    const params: object = {
    };
    const res = await getInTheaters(params);
    console.log(res);
     this.setState({
          addressList:res.data.data.data
         });
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  //删除
  del = async (value) => {
    console.log(123);
    const params: object = {
      id:value
    };
    console.log(params);
    
    const res = await detail(params);
    console.log(res);
  }
  render () {
    return (
   <View className='index_order_goods' >
      <View>
           {this.state.addressList.map((item)=>
               <View className='address_wrapper' key={item.id} >
                    <View className='address_name'>波波奇</View>
                     <View className='address_tel'>18271778293</View>
                    <View className='address_txt'>
                    浙江 杭州 滨江区 阡陌路飞飞啊说的的奥术大师大1按实际大水坑较好的发酵鲨发哪奥术大按键上阡陌路飞飞啊说的的奥术大师大1按实际大水坑较好的发酵鲨发哪奥术大按键上的…
                    </View>
                    <View className='address_br' ></View>
                   <View className='address_radio'>     
                         <Image src={namedPng1}/>
                      <View className={"address_id" + (this.state.acClass_id === item.id ? ' active' : "")} onClick={this.active.bind(this,item.id)} ></View>
                   </View>
                    <View className='address_text'>设为默认地址</View>
                    <View className='operation_wrapper'>
                    <View className='operation_box'>
                        <View className='operation_box_pic'><Image src={namedPng2}/></View>
                        <View className='operation_box_name'  onClick={this.editPage.bind(this,item.id)}>编辑</View>
                    </View>         
                    <View className='operation_box'>
                    <View className='operation_box_pic'><Image src={namedPng3}/></View>
                    <View className='operation_box_name' onClick={this.del.bind(this,item.id)}>删除</View>
                 </View>
                 </View>
                 </View>
             )}
             </View>
             <View className='add_btnWp'>
                <View className='add_btn' onClick={this.addPage}>新增地址</View>
          </View>     
    </View>
    )
  }
}
