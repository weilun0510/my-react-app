import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const cardDataList = [
  {
    title: '杭州市通用5元券',
    subTitle: '杭味面馆非常好吃，太好吃了，相当不错，味道鲜美，特别划算，快快抢购，聚划算',
  },
  {
    title: '杭州市10元券',
    subTitle: '兰州拉面非常好吃'
  },
];

const delay = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}


/** 这里是react实现方式**/
const CardReact = (props) => {
  const { data } = props;
  let [btnText, setBtnText] = useState(10)
  let timer = useRef(null)

  // 抢购
  const handleBuy = () => {
    delay('已抢购').then(res => {
      setBtnText(res)
    })
  }

  // 开始倒计时
  useEffect(() => {
    timer.current = setInterval(() => {
      setBtnText(--btnText)
    }, 1000)
    return () => {
      timer.current && clearInterval(timer.current)
    }
  }, [])

  // 满足条件后清除定时器
  useEffect(() => {
    if (btnText < 1) {
      clearInterval(timer.current)
      setBtnText('抢购')
    }
  }, [btnText])

  return (
    <div className="card">
    	<div className="info">
    		<div className="title">{data.title}</div>
      	<div className="subTitle">{data.subTitle}</div>
    	</div>
			<button className='btn' onClick={handleBuy}>{btnText}</button>
    </div>
  );
}


const CardList = (props) => {
  return (
    <>
      {props.list.map((data) => (
        <CardReact data={data} />
      ))}
    </>
  );
};

export default function a () {
  return <CardList list={cardDataList} />
}
