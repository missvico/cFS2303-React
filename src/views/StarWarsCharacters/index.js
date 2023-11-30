import CharacterCard from "./components/CharacterCard"
import {useState, useEffect} from 'react'
import axios from 'axios'
import Pagination from './components/Pagination'
import LoadingState from './components/LoadingState'

function StarWarsCharacters(){
    const [characters, setCharacters] = useState([])
    const [currPage, setCurrPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)
    console.log(currPage)


    useEffect(
        function(){
            setLoading(true)
            axios(
                {
                    url: `https://swapi.dev/api/people/?page=${currPage}`
                }
            ).then(response=>{
                setCharacters(response.data.results)
                setTotalPages(Math.ceil(response.data.count/10))
                setLoading(false)
            })
        },
        
    [currPage])

    return(
        <section>
            <h1>Star Wars Characters</h1>
            <Pagination currPage={currPage} setCurrPage={setCurrPage} totalPages={totalPages}/>
            {
                loading? 
                <LoadingState/> :
                <div class="row">
                    {
                        characters.map(character=><CharacterCard character={character}/>)
                    }
                </div>
            }
        </section>
    )
}

export default StarWarsCharacters