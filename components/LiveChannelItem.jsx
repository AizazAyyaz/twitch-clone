import Image from "next/image";
import React from "react";

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
  return (
    <div className="p-2">
      <Image src={img} alt="/"></Image>
      <div className="">
        <div className="">
          <Image
            src={profile_img}
            height="60"
            width="60"
            className="rounded-full"
            alt="/"
          ></Image>
        </div>
        <div className="">
          <h4 className="text-sm font-bold">{title}</h4>
          <p className="text-sm text-gray-500">{user}</p>
          <p className="text-sm text-gray-500">{game}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveChannelItem;
