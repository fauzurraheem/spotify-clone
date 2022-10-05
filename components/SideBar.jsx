import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineLibrary} from 'react-icons/hi'
import {FiHeart} from 'react-icons/fi'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineWifi} from 'react-icons/ai'
import { signOut, useSession } from 'next-auth/react'

const SideBar = () => {
  const {data, status} = useSession()
  console.log(data)


  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white' onClick={() => signOut()}>
          <AiOutlineHome className='h-5 w-5' />
          <p>LogOut</p>
        </button>
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
          <FiHeart className='h-5 w-5' />
          <p>Liked Songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white' >
          <AiOutlineWifi className='h-5 w-5' />
          <p>Your episodes</p>
        </button>
        <hr  className='border-t-[0.1px] border-gray-900'/>


        {/* playlist */}
        <p className='cursor-pointer hover:text-white'>
          playlist Name
        </p>
        <p className='cursor-pointer hover:text-white'>
          playlist Name
        </p>
        <p className='cursor-pointer hover:text-white'>
          playlist Name
        </p>
        <p className='cursor-pointer hover:text-white'>
          playlist Name
        </p>
        <p className='cursor-pointer hover:text-white'>
          playlist Name
        </p>
        <p className='cursor-pointer hover:text-white'>
          playlist Name
        </p>
        <p className='cursor-pointer hover:text-white'>
          playlist Name
        </p>
      </div>
    </div>
  )
}

export default SideBar