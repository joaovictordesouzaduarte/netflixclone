import React from 'react'
import './Header.css'

const Header = ({black}) => {   

    return(
        
        <header className={black ? 'black' :  ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix'></img>
                </a>
            </div>  
                
                <ul className='header--list'>
                <li>
                    <b>Início</b>
                </li>
                <li>
                    Séries
                </li>
                <li>
                    Filmes
                </li>
                <li>
                    Bombando
                </li>
                <li>
                    Minha lista
                </li>
                </ul>            
            <div className='header--user'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
                </a>
            </div>        
        </header>
    )
}

export default Header