import React from "react"
import styled from "styled-components"


const Searchstyle = styled.input `
    background-color: rgb(245, 234, 86);
    border: 1px rgb(245, 234, 86) solid;
`
const Formstyle = styled.form`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Button = styled.button`
    background-color: #44281d;
    font-weight: bold;
    color:white;
`


export default function SearchBar(props){

    const { onSubmit } = props;



    return (

        <div>
            <Formstyle onSubmit={onSubmit}>
                <Searchstyle type="text" placeholder="Find A Character!"/>
                <Button type="submit">Wubba Lubba Dub Dub!</Button>
            </Formstyle>
        </div>



    )



}