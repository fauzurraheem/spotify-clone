import { useSession } from "next-auth/react";
import { createContext, useState } from "react";
import useSpotify from '../hooks/useSpotify'


const SongContext = createContext();



export function Songs({children}) {
    const [playlistId, setplaylistId] = useState('2oBe8AfhwP13N76x4mipGn')
    const [playlist, setPlaylist] = useState(null)



 
  return (
    <SongContext.Provider value={{playlist, setPlaylist, playlistId, setplaylistId,}}>
      {children}
    </SongContext.Provider>
  );
}

export default SongContext