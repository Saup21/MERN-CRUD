import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Friends() {

    const [friendlist, setFriendlist] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/friends')
            .then((res) => setFriendlist(res.data))
            .catch(() => console.log("Some Error") )
    }, [])

    return (
        <div>
            {
                friendlist.map(friend => <div key={friend._id}> {friend.name} {friend.age} </div> )
            }
        </div>
    )
}

export default Friends
