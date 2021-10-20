import React, {useState, useEffect} from "react"
import axios from "axios"
import Character from "./Character"



export default function CharacterList (props){


    const [info, setInfo] = useState([]);
    const {link} = props;




    useEffect(() => {
    
            axios.get(`${link}`)
            .then( (res) => {
                console.log(res)
                setInfo(res.data.results)
            })
            .catch( (err) => {
                console.log(err)
            })
       
        
    },[link])

    return (


        <div className="wrapper">

            {
               
                info.map( person => {
                    return <Character data={person} key={person.id}/>
                })

            }


        </div>


    )


}