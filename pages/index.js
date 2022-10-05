import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'



export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify-clone</title>
      </Head>

     <main className=''>
      <SideBar/>
     </main>



    </div>
  )
}
