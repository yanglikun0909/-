// pages/wenda/wenda.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist: [{
      title:'锈病怎么防治呢？',
      desc:'在园林养护中，草坪锈病怎么防治？',
      time:'2021-05-01 11:21:30',
      ans:'10',
      look:'80'
    },{
      title:'为什么移栽树木时要剪掉一些枝叶',
      desc:'我看好多工地上苗来了都在那剪叶子',
      time:'2021-04-29 10:21:02',
      ans:'20',
      look:'138'
    },{
      title:'苗木修剪后的伤口怎么处理',
      desc:'修剪完伤口不美观，也不利于植株盛昌，该如何处理',
      time:'2021-04-23 18:21:30',
      ans:'3',
      look:'32'
    },{
      title:'草坪一年要修剪多少次',
      desc:'草坪一年要修剪多少次',
      time:'2021-04-21 15:00:30',
      ans:'10',
      look:'80'
    },{
      title:'毛杜鹃叶子发黄时什么原因',
      desc:'毛杜鹃叶子发黄了，不缺水，也不缺阳光',
      time:'2021-04-20 11:21:30',
      ans:'0',
      look:'20'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "问答"
    })
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