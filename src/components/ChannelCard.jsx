import React from 'react'

const ChannelCard = ({ setShowChannels }) => {
    return (
        <div className="flex justify-start items-center w-full p-2 hover:bg-[#212121cf] cursor-pointer gap-4 bg-[#212121] border-b border-black" onClick={() => setShowChannels(false)}>
            <img
                className="w-10 h-10 rounded-full inline"
                src="https://lh3.googleusercontent.com/-GhZPGqbJsL4/WJCcYrBHHzI/AAAAAAAADFM/ZwfXrZUX73c/%25255BUNSET%25255D.jpg"
                alt="Rounded avatar"
            />

            <h3 className='text-base md:text-lg max-w-[280px] trim-content text-white'>Suraksha Yojna</h3>
        </div>
    )
}

export default ChannelCard
