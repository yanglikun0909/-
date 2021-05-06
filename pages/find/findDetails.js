// pages/find/findDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     datalist:{
       bing: [{
        image:'../../images/bwyb.png',
        name:'白纹羽病'
      },{
        image:'../../images/bjb.png',
        name:'白绢病'
      },{
        image:'../../images/gjxcb.png',
        name:'根结线虫病'
      },{
        image:'../../images/sygsb.png',
        name:'落叶松枯梢病'
      },{
        image:'../../images/ymcdb.png',
        name:'幼苗猝倒病'
      },{
        image:'../../images/scxcb.png',
        name:'松材线虫病',
        otherName:'松树萎蔫病'
      },{
        image:'../../images/yjkzb.png',
        name:'月季枯枝病',
      },{
        image:'../../images/zgxb.png',
        name:'竹秆锈病',
      },{
        image:'../../images/spxb.png',
        name:'松疱锈病',
      }],
       chong:[{
        image:'../../images/ltljg.png',
        name:'铜绿丽金龟'
      },{
        image:'../../images/bxhjg.png',
        name:'白星花金龟'
      },{
        image:'../../images/ddlh.png',
        name:'大地老虎'
      },{
        image:'../../images/xqhjg.png',
        name:'小青花金龟'
      },{
        image:'../../images/dflg.png',
        name:'东方蝼蛄'
      },{
        image:'../../images/hblg.png',
        name:'华北蝼蛄',
        otherName:'土狗'
      }],
       yao:[{
        image:'../../images/fg.png',
        name:'福根'
      },{
        image:'../../images/kwx.png',
        name:'枯萎消'
      },{
        image:'../../images/rx.png',
        name:'溶线'
      },{
        image:'../../images/flbl.png',
        name:'肥料伴侣'
      },{
        image:'../../images/jyj.png',
        name:'尖叶竞'
      },{
        image:'../../images/leparc.png',
        name:'莱恩平安瑞刺',
      }],
     },
     curData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      this.setData({
        curData:this.data.datalist[options['type']]
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