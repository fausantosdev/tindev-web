import React, {useEffect,useState} from 'react'
import {useParams, Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png';
import like from '../../assets/images/like.png';
import dislike from '../../assets/images/dislike.png';

import './styles.css'

import api from '../../services/api'

const Main = () => {
    const [usersList, setUsersList] = useState([])
    const { id: userId } = useParams()

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('user', {
                headers: {
                    user: userId
                }
            })

            setUsersList(response.data.data)
        }

        loadUsers()
    }, [ userId ])


    const handleLike = async (id) => {
        await api.post(`user/${id}/like`, null, {
            headers: {
                user: userId
            }
        })

        listItemRemover(id)
    }

    const handleDislike = async (id) => {
        await api.post(`user/${id}/dislike`, null, {
            headers: {
                user: userId
            }
        })

        listItemRemover(id)
    }

    const listItemRemover = (id) => {
        setUsersList(usersList.filter(user => user._id !== id))
    }

    return(
        <div className='main-container'>
            <Link to='/'>
                <img src={logo} alt='Tindev' />
            </Link>
            { usersList.length > 0 ? (
                <ul>
                    {usersList.map(user => {
                        return (
                            <li key={user._id}>
                                <img src={user.avatar} alt={user.name} />
                                <footer>
                                    <strong>{user.name}</strong>
                                    <p>{user.bio}</p>
                                </footer>

                                <div className='buttons'>
                                    <button type='button' onClick={() => handleDislike(user._id)}>
                                        <img src={dislike} alt='Dislike' />
                                    </button>

                                    <button type='button' onClick={() => handleLike(user._id)}>
                                        <img src={like} alt='Dislike' />
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <div className='empty'>Acabou! Volte em breve. :)</div>
            ) }

        </div>
    )
}

export default Main