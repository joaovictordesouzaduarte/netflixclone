import React, { useEffect, useState }from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import './App.css'
import FeaturedMovie from './components/FeaturedMovie'

const MyApp = () => {
  
  const[movieList, setMovieList] = useState([])
  const[featuredData, setFeaturedData] = useState([])
  useEffect(() => {
    const loadAll = async () => {
      
      //Getting the list with all movies
      const list = await Tmdb.getHome()
      setMovieList(list);
      
      //Getting featured movies. By simplification, we wil use just originals from Netflix

      const originals = list.filter(i => i.slug === 'originals');

      //Getting random chosen from list
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)
      
    }
    loadAll();
  }, [])

  return(
    <div className='page'>
      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}
export default MyApp