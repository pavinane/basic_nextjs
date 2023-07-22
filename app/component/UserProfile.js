import React, { useState } from 'react'

const UserProfile = ({searchResult}) => {
    const [query,setQuery] = useState("");
    
    const handlesubmit = async (e) => {
        e.preventDefault();

        const result = await fetch(`/api/users/search?query=${query}`);
        const res = await result.json();
        searchResult(res )
    }
  return (
    <form onSubmit={handlesubmit}>
        <input
        type='text'
        className='search-input'
        placeholder='Search users ...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <button className='search-button' type='submit'>Search</button>
    </form>
  )
}

export default UserProfile