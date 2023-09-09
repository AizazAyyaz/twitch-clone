import React from "react";
import { rec_channels, top_channels } from "../data/mock-data";
import { RiMovieLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import Image from "next/image";

const SideMenu = () => {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg=[#0e0e10]">
      <div>
        <p className="hidden xl:flex uppercase font-bold text-sm">
          Recommended Channels
        </p>
        <p>
          <RiMovieLine
            size={20}
            className="xl:hidden justify-center w-full"
          ></RiMovieLine>
        </p>
      </div>
      {rec_channels.map((item, index) => (
        <div
          className="inline-flex gap-2 items-center w-full py-[2px]"
          key={index}
        >
          <div>
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.username}
            ></Image>
          </div>
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <h6>{item.username}</h6>
              <p className="text-gray-400 text-[13px]">{item.game_name}</p>
            </div>
            <span className='flex items-center'>
              <BsDot color='red' size={40} />
              {item.rank}K
            </span>
          </div>
        </div>
      ))}
      <div>
        <p className="hidden xl:flex uppercase font-bold text-sm py-4">
          Top Channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>
      {top_channels.map((item, index) => (
        <div
          className="inline-flex gap-2 items-center w-full py-[2px]"
          key={index}
        >
          <div>
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.username}
            ></Image>
          </div>
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <h6>{item.username}</h6>
              <p className="text-gray-400 text-[13px]">{item.game_name}</p>
            </div>
            <span className='flex items-center'>
              <BsDot color='red' size={40} />
              {item.rank}K
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
