import React from 'react'
import { useState, useEffect} from "react";

function Fetch2() {
    const [fetchData, setFetchData] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        fetch("adressss")
        .then((res)=> res.json())
        .then((data) =>setFetchData(data) )
        .catch((e) => console.log(e))
        .finally(()=> setIsLoading(false) )

    },[])

  return (
    <div>Fetch2
        {
            isLoading && <div>... Loading </div>
        }
        {
           fetchData.map(user => <div key={user.id} >{user.name}</div>)
        }

    </div>
  )
}

export default Fetch2