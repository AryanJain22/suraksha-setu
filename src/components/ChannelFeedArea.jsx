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

                <h2 className='text-lg md:text-xl font-semibold '>Suraksha Yojna</h2>
            </div>

            <div className="w-full flex flex-col gap-8 bg-cover bg-center bg-no-repeat overflow-y-auto my-scrollbar p-8" style={{ height: 'calc(100% - 3.5rem)', backgroundImage: `url(${bg})` }}>
                <div className="bg-green-500 max-w-[80%] p-4 rounded-lg self-end">
                    <p className="text-grey text-sm font-bold">National Disaster Response Fund (NDRF):</p>
                    <p className="text-white text-sm">Financial assistance provided to states affected by natural disasters to support immediate relief activities.</p>
                    <a className="text-blue-600 underline" href="https://www.ndrf.gov.in/">https://www.ndrf.gov.in/</a>
                </div>
                <div className="bg-green-500 max-w-[80%] p-4 rounded-lg self-end">
                    <p className="text-grey text-sm font-bold">Pradhan Mantri Fasal Bima Yojana (PMFBY)</p>
                    <p className="text-white text-sm">Provides insurance coverage and financial support to farmers in case of crop damage due to natural calamities.</p>
                    <a className="text-blue-600 underline" href="https://pmfby.gov.in/">https://pmfby.gov.in/</a>
                </div>
                <div className="bg-green-500 max-w-[80%] p-4 rounded-lg self-end">
                    <p className="text-grey text-sm font-bold">Pradhan Mantri Awas Yojana (PMAY)</p>
                    <p className="text-white text-sm">Provides affordable housing to families affected by disasters.</p>
                </div>
                <div className="bg-green-500 max-w-[80%] p-4 rounded-lg self-end">
                    <p className="text-grey text-sm font-bold">National Social Assistance Programme (NSAP)</p>
                    <p className="text-white text-sm">Provides financial assistance to the elderly, widows, and disabled persons during disasters.</p>
                    <a className="text-blue-600 underline" href="https://nsap.nic.in/">https://nsap.nic.in/</a>
                </div>
                <div className="bg-green-500 max-w-[80%] p-4 rounded-lg self-end">
                    <p className="text-grey text-sm font-bold">National Cyclone Risk Mitigation Project (NCRMP)</p>
                    <p className="text-white text-sm">Aimed at minimizing the vulnerability of coastal communities to cyclones and other natural disasters.</p>
                    <a className="text-blue-600 underline" href="https://nidm.gov.in/ncrmp.asp">https://nidm.gov.in/ncrmp.asp</a>
                </div>
            </div>

        </div>
    )
}

export default ChannelFeedArea
