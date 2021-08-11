import React, { useState } from 'react'
import axios from 'axios'

function Inputs() {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    const addFriend = () => {
        axios.post('http://127.0.0.1:3001/insert', { name, age })
            .then((res) => { alert(res.data) })
            .catch(() => { alert(`it failed`) })
    }

    return (
        <div className="inputs">
            <input type="text" placeholder="name...." onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="age...." onChange={(e) => setAge(e.target.value)} />
            <button onClick={addFriend} >Add Friend</button>
        </div>
    )
}

export default Inputs
