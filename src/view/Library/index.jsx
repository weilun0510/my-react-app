import React, { useState, useEffect } from 'react';
import {  KLine, Line, Bar } from 'light-charts';
import moment from 'moment'
import './index.css';
import { request } from '../../utils';

const Library = () => {
  const [lineData, setLineData] = useState([]);
  /**
   * 请求K线图数据
   * @param {number} pageSize 页数
   * @param {string} endTime 结束时间
   */
  const getKLineData = (pageSize = 20, endTime = moment().format('MM-DD')) => {
    return new Promise((resolved, rejected) => {
      setTimeout(resolved, 500, new Array(pageSize).fill({}).map((item, index) => {
        return {
          id: Math.random().toString().slice(2, 7),
          date: moment(endTime).subtract(pageSize - index - 1, 'days').format('MM-DD'),
          heightPrice: +('10' + Math.random().toString().slice(2, 4)),
          lowPrice: +('7' + Math.random().toString().slice(2, 4)),
          openingPrice: +('8' + Math.random().toString().slice(2, 4)),
          closingPice: +('8' + Math.random().toString().slice(2, 4)),
        }
      }))
    })
  }

  /**
   *
   * @param {Object} param 获取折线图接口数据
   * @returns
   */
   const getLineMockData = function () {
    return new Promise((resolved, rejected) => {
      setTimeout(resolved, 500, new Array(7).fill({}).map((item, index) => {
        return {
          date: moment().subtract(7 - index - 1, 'days').format('MM-DD'),
          value: +('10' + Math.random().toString().slice(2, 3)),
        }
      }))
    })
  }

  useEffect(() => {
    getLineMockData().then((res) => {
      const data = res || [];
      setLineData(data)
    })
  }, [])

  return (
    <div className='library'>
      <h1>light charts</h1>

      <KLine
        loadData={getKLineData}
        style={{ width: '600px', height: '300px' }}
      />
      <Line
        option={{
          yData: lineData.map(x => x.value),
          xData: lineData.map(x => x.date),
        }}
        style={{ width: '600px', height: '300px' }}
      />
      <Bar
        option={{
          yData: lineData.map(x => x.value),
          xData: lineData.map(x => x.date),
        }}
        style={{ width: '600px', height: '300px' }}
      />
    </div>
  )
}

export default Library