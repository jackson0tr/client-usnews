import React from 'react'

const BoxOption = ({image1,image1Author,
    image1Date,image1Except,image2,image2Author,image2Date,image2Except,image3,image3Author,image3Date,image3Except,url,url1,url2}) => {
    return (
        <>
            <div className="boxOption">
                <div className="boxOptionWrapper flex items-center gap-[15px]">
                    <div className="item flex-[1] relative mb-[10px]">
                        <a href={url}>
                        <img className='w-full h-full cursor-pointer' src={image1} alt="photo" />
                        </a>
                        <div className="postInfo absolute bottom-0 left-0 flex flex-col">
                            <ul className="nav list-none flex m-0 p-0 items-center gap-[15px] text-white duration-500 text-xs ml-[10px] hover:text-[#ce0000]">
                                <li className='text-xs font-extrabold invisible'>{image1Author}</li>
                                <li className='text-xs font-extrabold invisible'>{image1Date}</li>
                            </ul>
                            <h3 className='pt-0 px-[10px] pb-5 text-sm font-extrabold invisible text-white duration-500 hover:text-[#ce0000] hover:cursor-pointer'>{image1Except}</h3>
                        </div>
                    </div>
                    <div className="item flex-[1] relative mb-[10px]">
                        <a href={url1}>
                        <img className='w-full h-full cursor-pointer' src={image2} alt="photo" />
                        </a>
                        <div className="postInfo absolute bottom-0 left-0 flex flex-col">
                            <ul className="nav list-none flex m-0 p-0 items-center gap-[15px] text-white duration-500 text-xs ml-[10px] hover:text-[#ce0000]">
                                <li className='text-xs font-extrabold invisible'>{image2Author}</li>
                                <li className='text-xs font-extrabold invisible'>{image2Date}</li>
                            </ul>
                            <h3 className='pt-0 px-[10px] pb-5 text-sm font-extrabold invisible text-white duration-500 hover:text-[#ce0000] hover:cursor-pointer'>{image2Except}</h3>
                        </div>
                    </div>
                    <div className="item flex-[1] relative mb-[10px]">
                        <a href={url2}>
                        <img className='w-full h-full cursor-pointer' src={image3} alt="photo" />
                        </a>
                        <div className="postInfo absolute bottom-0 left-0 flex flex-col">
                            <ul className="nav list-none flex m-0 p-0 items-center gap-[15px] text-white duration-500 text-xs ml-[10px] hover:text-[#ce0000]">
                                <li className='text-xs font-extrabold invisible'>{image3Author}</li>
                                <li className='text-xs font-extrabold invisible'>{image3Date}</li>
                            </ul>
                            <h3 className='pt-0 px-[10px] pb-5 text-sm font-extrabold invisible text-white duration-500 hover:text-[#ce0000] hover:cursor-pointer'>{image3Except}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxOption