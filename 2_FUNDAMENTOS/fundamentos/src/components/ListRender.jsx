import { useState } from "react"


const ListRender = () => {

   const [list] = useState(["Ana", "Lanna", "Nilson Jr.", "Felipe", "Ana"]);

    const [users, setUsers] = useState([
      {id: 1, name: "Ana", age: 43},
      {id: 2, name: "Felipe", age: 24},
      {id: 3, name: "Nilson jr.", age: 23},
      {id: 4, name: "Lanna", age: 17}
    ])

  return (
    <div>
         <ul>
           {list.map((item, i) => (
            <li key={i}>{item}</li>
           ))} 
        </ul>
        {/*render com key */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age} anos</li>
          ))}
        </ul>
    </div>
  )
}

export default ListRender