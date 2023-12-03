import React from 'react'
import Image from 'next/image';

const Projet = () => {
  return (
    <div className="container rounded-md">
        
  <div className="loading w-full h-80">
    <Image src={"/assets/gifs/comingSoon2.gif"} width={100} height={100} className=' objetFit-cover' alt="gif"/>
  </div>
    </div>
  )
}

export default Projet