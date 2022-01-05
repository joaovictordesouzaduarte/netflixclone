import React, { useEffect, useState }from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import './App.css'

const MyApp = () => {
  const[movieList, setMovieList] = useState([])
  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHome()
      console.log(list)
      setMovieList(list);
      
    }
    loadAll();
  }, [])

  return(
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}
export default MyApp