import logo from './logo.svg';
import './App.css';
import { Characters } from './Characters';
import React, { useState, useEffect } from 'react';


function App() {

  const [characters, setCharacters] = useState([]);


  function getCharacters(pageNumber = 1) {
    const res = fetch("https://rickandmortyapi.com/api/character/?page-19")
      .then(response => response.json())
      .then(({ results, info }) => { return { results } })
      .catch(() => { return [] });
    return res;
  }

  async function consoleCharacters() {
    const resp = await getCharacters();
    console.log(resp);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <header className='Header'>
        <img className='Logo' src="/logo.jpg" alt="" />

        <h1 className='Terms'>Terms + Conditions</h1>

      </header>

      <div className='Hero'>
        <h1 className='Text1'>
          Rick and Morty
        </h1>
        <h1 className='Text2'>
          See all characters and more.
        </h1>

      </div>

      <main>

        <h1 className='Text3'>Character list</h1>
        <hr />




        {
          characters && characters.map(character => {
            return <Characters character={character} />;
          })
        }
        <Characters />






      </main>
      <footer>

      </footer>

    </div>
  );
}

export default App;