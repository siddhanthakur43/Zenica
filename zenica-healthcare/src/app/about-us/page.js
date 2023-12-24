import React from 'react'

const takeTime = async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })
}

const AboutUs = async () => {
    await takeTime();
  return <div className="text-5xl mx-20">AboutUs</div>;
}

export default AboutUs