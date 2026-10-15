function Greetings({nome, mensagem = "seja bem-vindo(a)!"}) {
    
    return(
     <div className="greeting">
        <span className="greeting__eyebrow">React - Primeiros Passos</span>
        <h1>{nome}, {mensagem}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Praesentium neque suscipit facere culpa quas distinctio 
           necessitatibus, magni atque dolorem eligendi nostrum ullam 
           cumque at aperiam saepe! Earum unde deserunt facere.</p>
      </div>    

    )
}
  export default Greetings