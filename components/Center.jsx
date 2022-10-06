import { signOut, useSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistatom";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs";
import SongContext from "../context/songContext";

const Center = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  // const [playlistId] = useRecoilValue(playlistIdState);
  // const [playlist, setPlaylist] = useRecoilState(playlistState);
  const {playlistId, setPlaylist , playlist} = useContext(SongContext)

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => console.log("somethinng wrong", err));
   
  }, [spotifyApi, playlistId]);




  const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
  ];

  useEffect(() => {
    setColor(shuffle(colors).pop())
  },[playlist])


  console.log(playlistId, playlist);




  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 p-r-2 text-white" onClick={signOut}>
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <MdOutlineKeyboardArrowDown size={15} />
        </div>
      </header>


      {
        playlist === null ? 
        (
          <section
          className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white  p-8`}
        >
          {/* <img src="" alt="" /> */}
          <img
            className="h-44 w-44 shadow-2xl"
            src=""
            alt=""
          />
          <div>
            <p>PLAYLIST</p>
            <h1 className="text-2xl md:text-3xl xl:text-5xl">{playlist?.name}</h1>
          </div>
        </section>
        ) : (
          <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white  p-8`}
      >
        {/* <img src="" alt="" /> */}
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[0]?.url}
          alt=""
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl">{playlist?.name}</h1>
        </div>
      </section>
        )
      }
      

      <div>
        <Songs />
      </div>
    </div>
  );
};

export default Center;
