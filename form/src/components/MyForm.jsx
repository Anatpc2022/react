import { useState } from "react";
import "./MyForm.css";

const MyForm = ({userName, userEmail}) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);

    const handleName = (e) => {
       setName(e.target.value); 
    }
    console.log(name, email);

    // 5 - função do envio de formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email);
    }

    return (<div>
        {/* 1 - Criação de formulário */}
        {/* 5 - Envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome"
                onChange={handleName}
                // 6 - controlled input
                value={name || ""}
                />
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input 
                type="email" 
                name="email" 
                placeholder="Digite seu email"
                // 4 - Simplificando manipulação
                onChange={(e) => setEmail(e.target.value)}
                // 6 - controlled input
                value={email} 
                />
            </label>
            <input type="submit" value="Enviar" />
        </form>

    </div>
    )
}

export default MyForm