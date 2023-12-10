import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import requests from '@/utils/requests'
import axios from '@/utils/axios'
import Movies from '@/components/movies'

const inter = Inter({ subsets: ['latin'] })

export default function Home({movies}) {
  return (
    <div className={inter.className}>
      <Header/>
      <Navbar/>
      <Movies movies={movies}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || 'fetchTrending';
  const fetchResult = await axios.get(requests[genre].url)

  return {
    props: {
      movies: fetchResult.data.results
    }
  }
}
