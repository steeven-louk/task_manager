import React from 'react'
import { Button, Empty } from 'antd';

const Projet = () => {
  return (
    <div className="container rounded-md">
         <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{ height: 60 }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
    </div>
  )
}

export default Projet