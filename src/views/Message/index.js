import Form from './components/Form'
import {useState} from 'react'
import axios from 'axios'

function Message(){
    const [messageData, setMessageData] = useState({email: "", firstName: "", lastName: "", message:"", acceptedMailing: true})
    const [successMessage, setSuccessMesage] =useState(false)
    function handleChange(event){
        const value = event.target.type == "checkbox"? event.target.checked : event.target.value
        const property = event.target.id
        setMessageData({...messageData, [property]: value})
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post( "https://jsonplaceholder.typicode.com/posts", messageData)
        .then(response=>{
            setSuccessMesage(true)
        })
    }
    return(
        <section id="contact">
            <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
            {
                successMessage && 
                <div class="alert alert-success" role="alert">
                    Tu mensaje se ha enviado correctamente
                </div>
            }

        </section>
    )
}

export default Message