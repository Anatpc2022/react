const Events = () => {

const handleClick = (e) => {
    console.log(e)
    console.log("Executou!")
}

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento.")}>Clique Aqui!</button>
        </div>
        <div>
            <button onClick={handleClick}>Clique Aqui com função</button>
        </div>
    </div>
  )
}

export default Events