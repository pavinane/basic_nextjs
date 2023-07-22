import React from 'react'

const Users = ({users}) => {
  return (
    <div className='users'>
        {users.map((user) => {
            return(
                <div className='card' key={user.id}>
                    <h2>{user.name}</h2>
                    <small>UserName: {user.name}</small>
                    <p>{user.website}</p>
                    <p>{user.phone}</p>
                    <a href={`mailto:${user.email}`} target='_blank' className='btn'>
                    Email Me
                    </a>

                </div>
            )
        })}
    </div>
  )
}

export default Users