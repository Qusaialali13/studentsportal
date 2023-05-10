import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import TopNav from '@/components/topNavigation';
export default function App({ Component, pageProps }) {
  return (
<>
<ThemeProvider enableSystem={true} attribute="class">
  <div className='flex w-full max-w-[1554px]'>
    <TopNav />
  </div>
      <Component {...pageProps} />
    </ThemeProvider>
</>

  )
}
