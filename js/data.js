const defaultImageUrl = './img/'
const draws = {
  use: {
    count: 7,
    name: 'use',
    title: '如何用车',
    positions: [
      { x: 120, y: 530 },
      { x: 160, y: 550 },
      { x: 140, y: 150 },
      { x: 40, y: 300 },
      { x: 160, y: 550 },
      { x: 270, y: 570 },
      { x: 200, y: 600 },
    ]
  },
  wallet: {
    name: 'wallet',
    count: 2,
    title: '关于钱包',
    positions: [
      { x: 200, y: 250 },
      { x: 250, y: 420 },
    ]
  },
  upload: {
    name: 'upload',
    count: 10,
    title: '如何上传车辆',
    positions: [
      { x: 50, y: 150 },
      { x: 250, y: 140 },
      { x: 120, y: 90 },
      { x: 220, y: 250 },
      { x: 250, y: 240 },
      { x: 160, y: 100 },
      { x: 130, y: 550 },
      { x: 160, y: 620 },
      { x: 160, y: 600 },
      { x: 250, y: 100 },
    ]
  },
  
  finish: {
    name: 'finish',
    count: 5,
    title: '其他费用及结算行程',
    positions: [
      { x: 280, y: 580 },
      { x: 160, y: 100 },
      { x: 160, y: 350 },
      { x: 160, y: 450 },
      { x: 160, y: 600 },
    ]
  },

  output: {
    name: 'output',
    count: 4,
    title: '导出行程',
    positions: [
      { x: 160, y: 550 },
      { x: -20, y: 250 },
      { x: 160, y: 380 },
      { x: 160, y: 600 },
    ]
  },
}