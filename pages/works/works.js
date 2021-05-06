// pages/works/works.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topStates:0,
    allList: [{
      title:'董子园风景区跑水',
      desc:'董子园风景区跑水',
      time:'2021年4月12日 10:20:32',
      state: 1,
      images:'../../images/bg.png',
      adrrass:'德州市经济技术开发区东方红东路',
      
    },{
      title:'人民公园跑水',
      desc:'人民公园跑水',
      time:'2021年4月10日 13:10:10',
      state: 2,
      images:'../../images/renmingongyuan.png',
      unit:'一大队',
      personLiable: '张工',
      adrrass: '山东省德州市东风中路1487'
    },{
      title:'长河公园跑水',
      desc:'长河公园跑水',
      time:'2021年4月22日 20:58:32',
      state: 3,
      images:'../../images/changhe.png',
      unit:'一大队',
      personLiable: '张工',
      adrrass: '山东省德州市德城区长河大道(蔚来城对面)'
    }],
    curList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const type = Number.parseInt(app.globalData.allData.type,10) ;
    this.setData({
      topStates:type ? type: 0
    })
    this.changeList(type ? type: 0);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },  
  changTap(e) {
    const type =  Number.parseInt(e.currentTarget.dataset.type,10) ;
    this.setData({
      topStates:type ? type: 0,
    });
    this.changeList(type ? type: 0);
  },
  changeList(type) {
    const _that = this;

    if (!type) {
      _that.setData({
        curList: _that.data.allList
      })
    } else if (type !== 0) {
      _that.setData({
        curList: _that.data.allList.filter((item) => {
              if (item.state === type) return item;
        })
      })
    }
  },
  toDetails(e) {
    const index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/works/workDetails?obj='+JSON.stringify(this.data.curList[index])
    })
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