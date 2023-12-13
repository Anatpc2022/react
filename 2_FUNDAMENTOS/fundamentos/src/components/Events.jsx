const Events = () => {

const handleClick = (e) => {
    console.log(e);
    console.log("Executou!");
};

const renderSomething = (x) => {
   if(x) {
   return <h1>Renderizando isso!</h1>
   }else {
    return <h1>Renderizando outra coisa.</h1>
   }
}

   // return 10 > 2 && <p>Carregando...</p>

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento.")}>Clique Aqui!</button>
        </div>
        <div>
            <button onClick={handleClick}>Clique Aqui com função</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events