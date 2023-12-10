import Image from 'next/image'
import React from 'react'

function Card({movie}) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original'
  return (
    <div className='p-3 bg-gray-700 text-gray-200 select-none cursor-pointer'>
        <Image
            src={BASE_URL + movie.backdrop_path}
            alt='movie-image'
            width={200}
            height={100}
            layout='responsive'
        />
        <div className='p-2'>
            <p className='truncate text-lg'>{movie.overview}</p>
            <h2 className='text-lg font-bold'>{movie.name || movie.title}</h2>
            <p>{movie.release_date || movie.first_air_date}</p>
        </div>
    </div>
  )
}

export default Card