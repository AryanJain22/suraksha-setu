import React from 'react'
import FeedCard from './FeedCard'
import { BiArrowBack } from "react-icons/bi";
import bg from "../images/bg.png"

const ChannelFeedArea = ({ showChannels, setShowChannels }) => {
    return (
        <div className="md:w-[60%] w-full h-full bg-blue-900">

            <div className="h-14 flex justify-start items-center w-full bg-[#202123] text-white px-2 md:px-4 gap-3 md:border-l md:border-white">

                <button className="block md:hidden text-2xl" onClick={e => setShowChannels(!showChannels)}>
                    <BiArrowBack />
                </button>

                <h2 className='text-lg md:text-xl font-semibold '>Name of Channel</h2>
            </div>

            <div className="w-full flex flex-col gap-8 bg-cover bg-center bg-no-repeat overflow-y-auto my-scrollbar p-8" style={{ height: 'calc(100% - 3.5rem)', backgroundImage: `url(${bg})` }}>
                <div className="bg-green-500 max-w-[80%] p-4 rounded-lg self-end">
                    <p className="text-white text-sm">This is some normal text.</p>
                    <p className="text-white text-sm">You can write anything you want here.</p>
                    <p className="text-white text-sm">Feel free to add more text or remove any of these lines.</p>
                </div>
                <div className="bg-green-500 max-w-[80%] p-4 rounded-lg self-end">
                    <p className="text-white text-sm">This is some normal text.</p>
                    <p className="text-white text-sm">You can write anything you want here.</p>
                    <p className="text-white text-sm">Feel free to add more text or remove any of these lines.</p>
                </div>
            </div>

        </div>
    )
}

export default ChannelFeedArea
