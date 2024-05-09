import React, { useState } from "react";
import ReadFeed from "./ReadFeed";

const FeedCard = ({ imageLink, date, title, content, adminName }) => {
    const [editableContent, setEditableContent] = useState(content);
    const [editableTitle, setEditableTitle] = useState(title);

    const manageStr = (str, maxLetter) => {
        if (str?.length > maxLetter) return str.slice(0, maxLetter) + "...";
        else return str;
    };

    const handleContentChange = (event) => {
        setEditableContent(event.target.value);
    };

    const handleTitleChange = (event) => {
        setEditableTitle(event.target.value);
    };

    return (
        <>
            <div className="card rounded-lg bg-[#7AB2B2] shadow-md w-[90%] lg:w-[96%] md:w-[95%] max-w-[400px] text-black flex flex-col justify-center items-start gap-2 p-4">
                <img
                    className="w-full h-64 sm:h-52 lg:h-64 md:h-56 rounded-lg object-cover"
                    src={imageLink}
                    alt="feed pic"
                />

                <span className="text-gray-700 text-[13px] md:text-sm">
                    {date}
                </span>

                <input
                    className="text-[17px] max-w-[95%] trim-content font-semibold bg-transparent outline-none border-none"
                    type="text"
                    value={editableTitle}
                    onChange={handleTitleChange}
                />

                <textarea
                    className="text-gray-900 text-[15px] py-1 h-[75px] max-h-[88px] bg-transparent outline-none border-none resize-none"
                    value={editableContent}
                    onChange={handleContentChange}
                />

                <ReadFeed imageLink={imageLink} title={editableTitle} content={editableContent} />

                <div className="w-full">
                    <h3 className="text-lg md:text-base font-semibold inline">
                        {manageStr(`${adminName}`, 25)}
                    </h3>
                </div>
            </div>

        </>
    );
};

export default FeedCard;
