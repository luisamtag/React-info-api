
import './App.css'
import { useState, useEffect } from 'react';
import Card from './components/card';

const url = "https://rickandmortyapi.com/api/character"


function App() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data.results);
      });

  }, [])



  return (
    <>
      <h1>Info de personajes</h1>
      <div className='character'>
        {
          character?.map((cha) => (
            <Card key={cha.id} char={cha} />
          ))
        }
      </div>
    </>
  );
}

export default App
