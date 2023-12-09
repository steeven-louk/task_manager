import React from 'react'
import { Button, Empty } from 'antd';
 
const EmptyComponent = () => {

    

  return (
    <div className='flex mx-auto'>
         <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{ height: 190, display: "flex" }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    {/* <Button type="primary">Create Now</Button> */}
  </Empty>
    </div>
  )
}

export default EmptyComponent