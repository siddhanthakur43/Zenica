import React from 'react'

const Card2 = ({ heading, paragraph, imgPath }) => {
    return (
        <div className="flex space-x-10 my-20">
            <div className='pt-20'>
                <h1 className='font-bold'>{heading}</h1>
                <br />
                <h3>
                    {paragraph}
                </h3>
            </div>
            <div className='w-full h-full'>
                <img
                    src={imgPath}
                ></img>
            </div>
        </div>
    )
}

export default Card2;