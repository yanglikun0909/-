// index.js
// 获取应用实例
import * as echarts from '../../ec-canvas/echarts';
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    image:'../../images/bg.png',
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    chartBar: {//图表柱状图表
      onInit: ''
    },
    iconw:'',
    curDates:{},
    chartData:{
      title: { 
        text: '',
        textStyle:{color:'#333',fontWeight:'bold',fontSize:14} 
      },
    grid:{
      x:5,
      y:50,
      x2:5,
      y2:80,
      height:90,
      borderWidth:10
     },
      xAxis: {
        type: 'category',
        show:true,
        data: [],
        maxInterval:7,
        axisLine:{
          show:true,
          lineStyle:{
            color:'#eee'
          }
        },
        axisTick:{
          show:true,
          inside:true,
          length:50,
          interval:0
        },
        nameTextStyle:{
          color:"red"
        },
      },
      yAxis: {
          type: 'value',
          show:false,
      },
      series: [{
          data: [],
          type: 'line',
          smooth:true,
          color: '#ffc300',
          itemStyle : { normal: {label : {show: true}}}
      },{
        data: [],
        type: 'line',
        smooth:true,
        color: '#40e0d0',
        itemStyle : { normal: {label : {show: true}}}
    }]
    }
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getWaters();
  },
  onShow() {
    app.globalData.allData.type = 0;
  },
  // 
  getWaters() {
    const that = this;
    wx.request({
      url: 'https://v0.yiketianqi.com/api?version=v9&appid=33955337&appsecret=QHGy6vhk',
      data: {
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
         const datalist = res.data.data.map((item) =>{
              return item.date.substr(5,5);
         })
         const minList = res.data.data.map((item) =>{
          return item.tem2;
        })
        const maxList = res.data.data.map((item) =>{
          return item.tem1;
        })
        const objs = that.data.chartData;
        objs.xAxis['data'] = datalist;
        objs.series[0]['data'] = maxList;
        objs.series[1]['data'] = minList;
        that.setData({
          chartData: objs,
          curDates: res.data.data[0],
          iconw:`../../images/${res.data.data[0].wea_img}.png`
        },() => {
         that.getList();
         console.log(that.data.curDates);
        })
         console.log(datalist);
      }
    });
  },
  getList(){
    var that = this;
    var chartBar = 'chartBar.onInit';
    that.setData({
        [chartBar]: that.initCharts,
    })
  },

   //图表结果
   initCharts(canvas, width, height,dpr) {
    var chartData = this.data.chartData;
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
    });
    canvas.setChart(chart);
    var option=chartData
    chart.setOption(option);
    return chart;
   },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toMapPage() {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  toWorkPage(e) {
     const type = e.currentTarget.dataset.type; 
     console.log(type);
    app.globalData.allData.type = type;
    wx.switchTab({
      url: '/pages/works/works?type=0',
    })
  },
  toRiBao() {
    wx.navigateTo({
      url: '/pages/ribao/ribao',
    })
  },
  toYueBao() {
    wx.navigateTo({
      url: '/pages/yuebao/yuebao',
    })
  }
})
