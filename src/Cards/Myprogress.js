import React from 'react'
import { Progress } from 'antd'
const Myprogress = () => {
  return (
    <>
        <label>HTML</label>
        <Progress percent={90} status="active"/>
        <lable>CSS</lable>
        <Progress percent={100} status="success"/>
        <label>JS</label>
        <Progress percent={100} status="active"/>
        <label>REACT JS</label>
        <Progress percent={100} status="success"/>
    </>
  )
}

export default Myprogress