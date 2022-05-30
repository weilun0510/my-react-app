import React from 'react';
import { Test, KLine } from 'echarts-for-abc';
import moment from 'moment'
import './index.css';
import { request } from '../../utils';

const Library = () => {
  const initConfig = {
    yAxisSplitNumber: 6,
    showTips: true,
    canDrag: true,
    canScroll: true
  }
  /**
   * 请求K线图数据
   * @param {number} pageSize 页数
   * @param {string} endTime 结束时间
   */
   const onRequestData = (pageSize = 20, endTime = moment().format('MM-DD') ) => {
    console.log('endTime: ', endTime);
    console.log('pageSize: ', pageSize);
    return request({ pageSize, endTime })
  }

  return (
    <div className='library'>
      <h1>echarts for abc</h1>
      {/* <Test /> */}
      <KLine
        initConfig={initConfig}
        loadData={onRequestData}
      />
    </div>
  )
}

export default Library