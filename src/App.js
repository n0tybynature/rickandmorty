import React, {useState} from 'react';
import './App.css';
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar.js";
import styled from 'styled-components';
import img from "./images/rick.png";





const App = () => {
  
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')


const search = ( event ) => {
  const value = document.querySelector('input').value;
  setUrl( `https://rickandmortyapi.com/api/character/?name=${ value }` )
  event.preventDefault();
  
}   

  





  return (
    <Container>
      <Header></Header>
      <SearchBar onSubmit={search}/>
      <Midcontainer>
        <CharacterList link={url}/>
      </Midcontainer>
    </Container>
  );
}

const Container = styled.div ` 
  background-image: linear-gradient(
    #69C8ECFF, #97ce4c,#f0e14a
  );
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height:600;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 62px;
`
const Header = styled.div`
  margin:25px;
  background-image:url(${img});
  background-repeat:no-repeat;
  width:625px;
  height:200px;
`
const Midcontainer = styled.div `
  width: 90vw;
  height:539px;
  overflow:scroll;
  overflow-x: hidden;
`

export default App;
