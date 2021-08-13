import React from 'react'

function Friends({ friends, updateFriend, deleteFriend }) {

    return (
        <div className="friendlist">
            {
                friends.map(friend => {
                    return (
                        <div className="friendContainer" key={friend._id}>
                            <div className="friend" >
                                <h3>Name: {friend.name}</h3>
                                <h3>Age: {friend.age}</h3>
                            </div>
                            <button onClick={() => { updateFriend(friend._id) }} >Update</button>
                            <button id="border" onClick={() => { deleteFriend(friend._id) }} >X</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Friends
