import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

import logo from '../../assets/images/logo.png';

const Login = () => {
    const [username, setUsername] = useState('')

    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if(username === ''){
            alert('Digite seu usuário do Github!')
        }else{
            const response = await api.post('/user', {
                username
            })
    
            const { _id } = response.data.data
    
            navigate(`home/${_id}`)
        }
    }

    return(
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input 
                    placeholder='Git username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Login