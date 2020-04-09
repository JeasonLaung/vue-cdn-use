let ChannelType = ''
// Flutter调用渠道
if (window.flutter && window.flutter.postMessage) {
  ChannelType = 'flutter'
}


// 小程序渠道调用
if (window.wx && window.wx.miniProgram) {
  wx.miniProgram.getEnv(function(res) {
    if(res.miniprogram){
      // true代表在小程序里
      ChannelType = 'mp'
    }
  })
}

// 合并发送信息
let channelPostMessage = (data = {}) => {
  switch(ChannelType) {
    // 小程序
    case 'mp':
      wx.miniProgram.postMessage({
        data
      })
      break
    case 'flutter':
      flutter.postMessage(JSON.stringify(data))
      break
    default: 
      break
  }
}

// 合并发送信息
let navigateTo = (url, type = 'navigateTo') => {
  switch(ChannelType) {
    // 小程序
    case 'mp':
      if (type == 'navigateBack') {
        wx.miniProgram.navigateBack({
          delta: url
        })
      } else {
        wx.miniProgram[type]({
          url
        })
      }
      break
    case 'flutter':
      
      break
    default: 
      break
  }
}