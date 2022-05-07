export const powerChatOption = {
  title: {
    text: '用电量'
  },
    xAxis: {
      data: []
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [100, 100, 100, 100]
      }
    ]
  }

  export const dengChatOption = {
    title: {
      text: '灯泡状态'
    },
    xAxis: {
      data: []
    },
    yAxis: {},
    series: [
      {
        type: 'scatter',
        data: []
      }
    ]
  }

  export const lightChatOption = {
    title: {
      text: '光照强度'
    },
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [],
        type: 'line'
      }
    ]
  }
  export const temChatOption = {
    title: {
      text: '温度'
    },
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [],
        type: 'line'
      }
    ]
  }

  export const humidityChatOption = {
    title: {
      text: '空气湿度'
    },
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}'
        },
        data: [
          {
            value: 50,
            name: 'SCORE'
          }
        ]
      }
    ]
  }
