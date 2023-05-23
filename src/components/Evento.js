import Button from "./Eventos/Button";

function Evento(){
// function Evento({numero}){

  function meuEvento(){
    // console.log(`Opa, fui ativado! ${numero}`)
    console.log(`Ativando primeiro evento!`)
  }

  function segundoEvento(){
    console.log(`Ativando o segundo evento!`)
  }

  return (
    <div>
      <p>Clique para dispara um evento: </p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" /> 
      {/* <button onClick={meuEvento}>Ativar!</button> */}
    </div>
  )
}

export default Evento;