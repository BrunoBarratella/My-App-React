function Saudacao({nome}) {
function geraSaudacao(algumNome){
  return `Olá ${algumNome}, seja bem vindo`
}
  return (
    <>{nome && <p>{geraSaudacao(nome)}</p>}</>
  )
}

export default Saudacao