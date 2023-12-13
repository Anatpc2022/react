
const TemplateExpression = () => {

    const name = "Ana Cláudia";
    const data = {
        age: 43,
        job: "Programadora"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Meu nome é {name}</h3>
        <p>Tenho {data.age} anos e sou {data.job}</p>
    </div>
  )
}

export default TemplateExpression