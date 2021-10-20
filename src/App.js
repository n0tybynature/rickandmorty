import React, {useState} from 'react';
import './App.css';
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar.js";
import styled from 'styled-components';
import img from "./images/rick.png";
import img2 from "./images/rick2.png";





const App = () => {
  
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')


const search = ( event ) => {
  const value = document.querySelector('input').value;
  setUrl( `https://rickandmortyapi.com/api/character/?name=${ value }` )
  event.preventDefault();
  
}   

  





  return (
    <Container>
     <Mouth><Header></Header></Mouth>
      <Bar><SearchBar onSubmit={search}/></Bar>
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
  height:140vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const Mouth = styled.div`
  
  background-image: url(${img2});
  top:0;
  height: 500px;
  width:100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75%;
  margin-bottom: 40px;
  
`
const Header = styled.div`
  background-image:url(${img});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: top;
  height: 500px;
  width:100%;
  position:relative;

`
const Bar = styled.div`
  position: relative;
`
const Midcontainer = styled.div `
  width: 90vw;
  height:70vh;
  margin-left:50px;
  overflow:scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {width:3px;height:3px;};
  ::-webkit-scrollbar-button {background-color:rgba(255,255,255,0);};
  ::-webkit-scrollbar-track {background-color:rgba(255,255,255,0);};
  ::-webkit-scrollbar-track-piece {background-color:rgba(60,40,29,1);};
  ::-webkit-scrollbar-thumb {height:50px; background-color:rgba(232,154,199,1); border-radius:3px;};
  ::-webkit-scrollbar-corner {background-color:rgba(238,238,238,1);};
`

export default App;
