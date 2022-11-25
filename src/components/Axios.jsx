import React from 'react'
import axios from "axios"

function Axios() {

    const [fetchData, setFetchData] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        axios("adressss")
        
        .then((res) => setFetchData(res.data) )
        .catch((e) => console.log(e))
        .finally(()=> setIsLoading(false) )

    },[])


  return (
    <div>Axios "npm install axios" veya "npm i axios" temel aynı json a çevirmeye gerek yok 

        {
            isLoading && <div>... Loading </div>
        }
        {
           fetchData.map(user => <div key={user.id} >{user.name}</div>)
        }
    </div>
  )
}

export default Axios