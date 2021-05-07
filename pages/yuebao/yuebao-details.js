// pages/yuebao/yuebao-details.js
import * as echarts from '../../ec-canvas/echarts';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datetext:'',
    pieData:{
      title:{
        text: '巡查次数情况',
        top:"5%",
        textStyle:{
          color:"#333",
          fontWerght:600,
          fontSize:'30rpx',
          align:"center"
        }
      },
      tooltip: {
          trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        // left: 'right',
        top:'12%',
        right:'5%',
      },
    
      series: [
          {  
              center: ['30%', '50%'],
              type: 'pie',
              radius: '50%',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '40',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  {value: 1, name: '巡查次数'},
                  {value: 1, name: '发现问题'},
              ],
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  },
  chartBara: {//图表柱状图表
    onInit: ''
  },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "月报详情"
    })
    this.setData({
      datetext:options.date
    })
    this.getListA();
  },
  getListA(){
    var that = this;
    var chartBara = 'chartBara.onInit';
    that.setData({
        [chartBara]: that.initChartsa,
    })
  },
  initChartsa(canvas, width, height,dpr) {
    var chartData = this.data.pieData;
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})