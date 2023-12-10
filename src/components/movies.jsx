import React from 'react'
import Card from './card'

function Movies({movies}) {
  return (
    <div className='sm: grid grid-cols-2 lg: grid-cols-3 xl: grid-cols-4 2xl: grid-cols-5'>
        {
            movies.map((item) => (
                <Card key={item.id} movie={item}/>
            ))
        }
    </div>
  )
}

export default Movies