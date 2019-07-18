import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, } from '@tarojs/components'
import './index.less'
import { AtIcon, AtButton } from 'taro-ui'
import namedPng6 from '../../assets/img/list.png'
import namedPng4 from '../../assets/img/add.png'
import namedPng5 from '../../assets/img/sub.png'
import namedPng1 from '../../assets/img/raduis_one.png'
export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { 
       buyCarList:[{
             pic:'../../assets/img/list.png',
             txt:'产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题………',
             sell:'¥378',
             pic_add:'../../assets/img/add.png',
             pic_sub:'../../assets/img/sub.png',
             sum:11
       },{
            pic:'../../assets/img/list.png',
            txt:'产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题…………',
            sell:'¥378',
            pic_add:'../../assets/img/add.png',
            pic_sub:'../../assets/img/sub.png',
            sum:12
      },{
            pic:'../../assets/img/list.png',
            txt:'产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题…………',
            sell:'¥378',
            pic_add:'../../assets/img/add.png',
            pic_sub:'../../assets/img/sub.png',
            sum:10
      },{
            pic:'../../assets/img/list.png',
            txt:'产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题…………',
            sell:'¥378',
            pic_add:'../../assets/img/add.png',
            pic_sub:'../../assets/img/sub.png',
            sum:17
      }],
      acClass_id: '',
      buyCarValue:false,
      buyList:'',
      checkboxIds:[]
     }
  }
  config = {
    navigationBarTitleText: '首页'
  }
  buyCarRaduis=(id)=>{
  //       const checkboxIds =this.state.checkboxIds
  //     console.log(123);
  //      if (checkboxIds.includes(id)) {
  //           // checkboxIds 数组中是否存在当前点击的 checkbox id
  //           checkboxIds.splice(checkboxIds.indexOf(id), 1); // 如果有，则删除
  //         } else {
  //           checkboxIds.push(id); // 如果 childIds 数组中不存在当前点击的 checkbox id，则将其加入数组
  //         }
  //     this.setState({
  //         checkboxIds
  //     })
        
  // }
     console.log(id);
     this.setState({
      acClass_id:id
     })
     
  }
  btnClick = (type,index) => {
      let buyList =this.state.buyCarList
          if(type === 'add') {
            buyList[index].sum++    
            // console.log( buyList[index].sum);
            this.setState({
               buyList:buyList 
            })                 
            }else {
            buyList[index].sum--    
            if (buyList[index].sum < 1) {
                  buyList[index].sum = 0;
            }
            // console.log( buyList[index].sum);
            this.setState({
               buyList:buyList 
            }) 
       }
      // this.state.buyCarList.map((item,index)=>{
      //       if(id==index) {
      //          if(type === 'add') {
      //                item.sum += 1
                     
      //          }
      //          console.log(item.sum);
      //       return this.setState({
      //            totalNum: item.sum
      //       })
          
      //       }
      // })
//     console.log(this.setState.buyList);
    
      // let num = this.state.totalNum;
      // num = type === 'add' ? (num += 1) : (num -= 1);
      // if (num < 1) {
      //   num = 0;
      // }
      // let money = this.props.goodInfo.price;
      // this.setState({
      //   totalNum: num,
      // //   totalMoney: (money * num).toFixed(2),
      // });
    };
  componentWillMount () {}

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='buyCar_index' >
            <View className='buyCar_header'>
                <View className='buyCar_header_txtWp'>
                    <View>全场满</View>
                    <View className='buyCar_header_txt'>88元</View>
                    <View>包邮</View>
                </View>
          </View>
              <View className='burCar_edit'>
              <View className='burCar_edit_btn'>编辑</View>
          </View>
           <View className='buyCar_list'>
           {this.state.buyCarList.map((item,index)=>
                   <View className='buyCar_list_item' key={index}>
                         <View className={"buyCar_list_item_raduis" + (this.state.acClass_id == index ? ' onActive' : "")} onClick={this.buyCarRaduis.bind(this,index,item)}>            
                           <View className={"taro-text at-icon at-icon-check" + (this.state.acClass_id == index ? ' active' : "")}></View>                 
                        </View>
                        <View className='buyCar_list_item_pic'><Image src={namedPng6}/></View>
                        <View className='buyCar_list_item_txt'>{item.txt}</View>
                        <View className='buyCar_list_item_sell'>{item.sell}</View>
                        <View className='buyCar_list_item_btn'>
                              <View className='buyCar_list_item_sub' onClick={this.btnClick.bind(this, 'sub',index)}><Image src={namedPng5}/></View>
                              <View className='buyCar_list_item_sum'>{item.sum}</View>
                              <View className='buyCar_list_item_add' onClick={this.btnClick.bind(this, 'add',index)}><Image src={namedPng4}/></View>
                        </View>
                  </View>
            )}
                  
          </View>
             <View className='buyCar_footer'>
                    <View className='buyCar_footer_raduis'></View>
                    <View className='buyCar_footer_all'>全选</View>
                    <View className='buyCar_footer_total'>合计：￥0.00</View>
                    <View className='buyCar_footer_btn'>去结算(0)</View>
           </View>
    </View>
    )
  }
}
