import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
    //3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
       setName(e.target.value); 
    }
    console.log(name, email);

    return (<div>
        {/*1 - Criação de formulário */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome"
                onChange={handleName}
                />
            </div>
            {/*2 - Label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input 
                type="email" 
                name="email" 
                placeholder="Digite seu email"
                //4 - Simplificando manipulação
                onChange={(e) => setEmail(e.target.value)} 
                />
            </label>
            <input type="submit" value="Enviar" />
        </form>

    </div>
    )
}

export default MyForm