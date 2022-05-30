import Cdn from './Cdn';

// import test from './test';
// console.log('test: ', test);

// import test, { age, bar } from './test'

// 等于以下写法

import test from './test'
import * as allTest from './test'
const { age, bar } = allTest


console.log('age, bar: ', age, bar);
console.log('test: ', test);

const ESModule = () => {
  return <>1<Cdn /></>
}

export default ESModule