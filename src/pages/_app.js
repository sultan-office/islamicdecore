import { Noto_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Layout from '@/components/Layout'

// Redux Feature
import { Provider } from 'react-redux';
import store from '@/feature/store';

const poppins = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  )
}
