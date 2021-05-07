// pages/ribao/ribao.js
import {format} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "日报"
    })
    const arr = [];
    for(let i=0;i<20;i++) {
      arr.push(this.getDateList(i));
    }
    this.setData({
      dataList:arr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getDateList(num) {
     const newDate = new Date();
     newDate.setDate(newDate.getDate() - num);
     var s1 = format(newDate,"yyyy-MM-dd");
     console.log(s1);
     return s1
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  toDetails(e) {
     const date = e.currentTarget.dataset.date;
     wx.navigateTo({
       url: '/pages/ribao/ribao-details?date=' + date,
     })
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