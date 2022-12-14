import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Center from '../components/Center'
import Player from '../components/Player'
import SideBar from '../components/SideBar'




export default function Home() {


  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify-clone</title>
      </Head>

     <main className='flex'>
      <SideBar/>
      <Center />
     </main>

      <div className='sticky bottom-0'>
        <Player />
      </div>

    </div>
  )
}

export async function getServerSideProps(context){

  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session
    }
  }
}
