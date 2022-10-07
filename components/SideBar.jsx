import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineLibrary} from 'react-icons/hi'
import {BsHeartFill} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineWifi} from 'react-icons/ai'
import { signOut, useSession } from 'next-auth/react'
import { useContext, useEffect, useState } from 'react'
import useSpotify from '../hooks/useSpotify'
import SongContext from '../context/songContext'
// import { useRecoilState } from 'recoil'
// import { playlistIdState } from '../atoms/playlistatom'



const SideBar = () => {
  const spotifyApi = useSpotify()
  const {data:session, status} = useSession()
  const [playlists, setPlaylists] = useState([])
  // const [playlistId, setplaylistId] = useRecoilState(playlistIdState)
  const { setplaylistId,playlistsId} = useContext(SongContext)
  

  useEffect(() => {
    if(spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then(data => {
        setPlaylists(data.body.items);
        setplaylistId(data.body.items[0.].id)

      })
    }

    
  },[session, spotifyApi])


 





  return (
    <div className='text-gray-500 p-5 text-xs border-r border-gray-900 scrollbar-hide overflow-y-scroll h-screen lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white' >
          <AiOutlineHome className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white' >
          <AiOutlineSearch className='h-5 w-5' />
          <p>search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white' >
          <HiOutlineLibrary className='h-5 w-5' />
          <p>Library</p>
        </button>
        <hr  className='border-t-[0.1px] border-gray-900'/>

        <button className='flex items-center space-x-2 hover:text-white' >
          <AiOutlinePlusCircle className='h-5 w-5' />
          <p>Create Playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white' >
          <BsHeartFill className='h-5 w-5  text-blue-500' />
          <p>Liked Songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white' >
          <AiOutlineWifi className='h-5 w-5 text-green-500' />
          <p>Your episodes</p>
        </button>
        <hr  className='border-t-[0.1px] border-gray-900'/>


        {/* playlist */}
        {playlists.map((playlist) => (
          <p key={playlist.id} onClick={(e) => setplaylistId(playlist.id)} className='cursor-pointer hover:text-white'>{playlist.name}</p>
        ))}
      </div>
    </div>
  )
}

export default SideBar