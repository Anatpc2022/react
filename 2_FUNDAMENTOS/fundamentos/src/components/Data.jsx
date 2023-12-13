import { useState } from "react";

const Data = () => {
    let somedata = 10;
    const [anotherNumber, setAnotherNumber] = useState(15);

    const [anotherName, setAnotherName] = useState("Ana");

    return (
        <div>
            <div>
                <p>Valor: {somedata}</p>
                <button onClick={() => (somedata = 15)}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {anotherNumber}</p>
                <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
            </div>
            <div>
                <p>Nome: {anotherName}</p>
                <button onClick={() => setAnotherName("Lanna")}>Mudar Nome</button>
            </div>
        </div>
    )
}

export default Data