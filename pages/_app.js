import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
import { Songs } from '../context/songContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {



  return (
    <SessionProvider session={session}>
      <Songs>
        <RecoilRoot>
        <Component {...pageProps} />
       </RecoilRoot>
      </Songs>
    </SessionProvider>
)}

export default MyApp
