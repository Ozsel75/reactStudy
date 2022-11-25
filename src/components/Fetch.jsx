import React from 'react'
import { useState } from 'react';
import {useEffect} from "react";

function Fetch() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch(e => console.log(e))
        .finally(()=> setIsLoading(false))

    },[])

  return (
    <div>Fetch
        <h1>Fetchs : 
           
        </h1>
        {isLoading && <div>....Loading</div> }
        <div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    </div>
  )
}

export default Fetch