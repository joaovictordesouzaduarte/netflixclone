import React, { useEffect, useState }from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import './App.css'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header/Header'
import { FaLinkedin } from 'react-icons/fa'
import {GoMarkGithub} from 'react-icons/go'
const MyApp = () => {
  
  const[movieList, setMovieList] = useState([])
  const[featuredData, setFeaturedData] = useState([])
  const[blackHeader, setBlackHeader] = useState(false) 

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

  useEffect(() => {

    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }
      else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])




  return(
    <div className='page'>
      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Feito com <span role='img' aria-label='coração'>❤️</span> por João Victor Duarte <br/>
        Direitos de imagem para Netflix <br/>
        Dados coletados do site Themoviedb.org <br/>
        <a href='https://www.linkedin.com/in/joão-victor-duarte/' target="_blank">Meu LinkedIn <FaLinkedin/></a> <br/>
        <a href='https://github.com/joaovictordesouzaduarte' target="_blank">Meu Github <GoMarkGithub/></a> <br/>
      </footer>
      
      {movieList.length <=0 &&
           <div class="loading">
           <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt='Carregando'></img>
         </div>
      }
 

    </div>
  )
}
export default MyApp