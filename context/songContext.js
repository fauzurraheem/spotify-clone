import { useSession } from "next-auth/react";
import { createContext, useState } from "react";
import useSpotify from '../hooks/useSpotify'


const SongContext = createContext();



export function Songs({children}) {
    const [playlistId, setplaylistId] = useState('')
    const [playlist, setPlaylist] = useState(null)
    const [currentTrackId, setCurrentTrackId] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)



 
  return (
    <SongContext.Provider value={{playlist, setPlaylist, playlistId, setplaylistId,setCurrentTrackId,setIsPlaying,isPlaying,currentTrackId}}>
      {children}
    </SongContext.Provider>
  );
}

export default SongContext