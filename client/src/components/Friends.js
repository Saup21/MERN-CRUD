import React from 'react'

function Friends({ friends }) {

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:3001/friends')
    //         .then((res) => setFriendlist(res.data))
    //         .catch(() => console.log("Some Error"))
    // }, [])

    return (
        <div className="friendlist">
            {
                friends.map(friend =>
                    <div className="friendContainer">
                        <div className="friend" key={friend._id}>
                            <h3>Name: {friend.name}</h3>
                            <h3>Age: {friend.age}</h3>
                        </div>
                        <button>Update</button>
                        <button id="border">X</button>
                    </div>
                )
            }
        </div>
    )
}

export default Friends
