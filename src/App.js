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
    rgb(103, 255, 255), white,rgb(245, 234, 86)
  );
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.div`
  margin:25px;
  background-image:url(${img});
  background-repeat:no-repeat;
  width:625px;
  height:330px;
`
const Midcontainer = styled.div `
  width: 90vw;
  height:800px;
  overflow:scroll;
  overflow-x: hidden;
  padding-bottom:25px;
`

export default App;
