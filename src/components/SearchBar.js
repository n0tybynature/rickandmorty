import React from "react"
import styled from "styled-components"


const Searchstyle = styled.input `
    background-color: rgb(245, 234, 86);
    border: 1px rgb(245, 234, 86) solid;
`
const Formstyle = styled.form`
    margin-bottom: 30px;
`


export default function SearchBar(props){

    const { onSubmit } = props;



    return (

        <div>
            <Formstyle onSubmit={onSubmit}>
                <Searchstyle type="text" placeholder="Find A Character!"/>
                <button type="submit">Search</button>
            </Formstyle>
        </div>



    )



}