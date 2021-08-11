import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Friends from './Friends'

function Inputs() {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [friendlist, setFriendlist] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/friends')
            .then((res) => {
                setFriendlist(res.data)
            })
            .catch(() => console.log("Some Error"))
    }, [])

    const addFriend = () => {
        axios.post('http://127.0.0.1:3001/insert', { name, age })
            .then(() => setFriendlist([...friendlist, { name, age }]))
            .catch(() => { alert(`it failed`) })
    }

    const updateFriend = (id) => {
        const newAge = prompt('Enter new age....')
        axios.put('http://127.0.0.1:3001/update', { id, newAge })
            .then(() => {
                setFriendlist(friendlist.map(friend => {
                    return friend._id === id ? { _id: id, name: friend.name, age: newAge } : friend
                }))
        })
    }

    return (
        <div>
            <div className="inputs">
                <input type="text" placeholder="name...." onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="age...." onChange={(e) => setAge(e.target.value)} />
                <button onClick={addFriend} >Add Friend</button>
            </div>
            <Friends friends={friendlist} updateFriend={updateFriend} />
        </div>
    )
}

export default Inputs
