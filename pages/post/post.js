// pages/post/post.js

var dataObj = require("../../data/data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
  }, 
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var postList = [{
      object: {
        date: "Sep 9 2019",
      },
      title: "小时候的冰棍儿与雪糕",
      postImg: "/img/postImg/83.jpg",
      avatar: "/img/avatar/STILogo.png",
      content: "冰棍与雪糕绝对不是同一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棒。时过境迁，…",
      readingNum: 92,
      collectionNum: {
        array: [108]
      },
      commentNum: 7
    },
    {
      object:{
        date: "Jan 9 2017",
      },
      title: "从童年呼啸而过的火车",
      postImg: "/img/postImg/725.jpg",
      avatar: "/img/avatar/STILogo.png",
      content: "小时候，家的后面有一条铁路。听说从南方北上的火车都必须经过这条铁路。火车大多在晚上经过， 但也不定是只有在夜深人静的时候，火车的声音才能从远方传来…",
      readingNum: 0,
      collectionNum: 0,
      commentNum: 0
    },
    {
      object: {
        date: "Jan 29 2017",
      },
      title: "记忆里的春节",
      postImg: "/img/postImg/729.jpg",
      avatar: "/img/avatar/STILogo.png",
      content: "年少时，有几样东西，是春节里必不可少的：烟花、新衣、凉菜、压岁钱、饺子。年分大小年，有的地方是腊月二十三过小年，而有的地方是腊月二十四",
      readingNum: 0,
      collectionNum: 0,
      commentNum: 0
    }]

    console.log("onLoad: 页面被加载")
    this.setData({
      postList: postList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady: 页面被加载")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow: 页面被加载")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide: 页面被加载")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnLoad: 页面被加载")
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