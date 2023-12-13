import { useState } from "react"


const ListRender = () => {

    const [list] = useState(["Ana", "Lanna", "Nilson Jr.", "Felipe"]);

  return (
    <div>
        <ul>
           {list.map((item) => (
            <li>{item}</li>
           ))} 
        </ul>
    </div>
  )
}

export default ListRender