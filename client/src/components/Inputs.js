import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Friends from './Friends'

function Inputs() {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [friendlist, setFriendlist] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/friends')
            .then((res) => setFriendlist(res.data))
            .catch(() => console.log("Some Error"))
        console.log("effect");
    }, [])

    const addFriend = () => {
        axios.post('http://127.0.0.1:3001/insert', { name, age })
            .then(() => setFriendlist([...friendlist, { name, age }]))
            .catch(() => { alert(`it failed`) })
        console.log("add");
    }

    return (
        <div>
            <div className="inputs">
                <input type="text" placeholder="name...." onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="age...." onChange={(e) => setAge(e.target.value)} />
                <button onClick={addFriend} >Add Friend</button>
            </div>
            <Friends friends={friendlist} />
        </div>
    )
}

export default Inputs
