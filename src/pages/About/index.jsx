import StacksColumn from '../../components/Stack'
import './index.css'

const index = () => {
  return (
   <div className='center'>
      <div id='About' className='container background-image'>
         <h1 className='Title'>
            About Me_
         </h1>
         <div className='center'>
            <div className='about-grid'>
               <div className='about-img'>
                  <img src="/profile.svg" className='shadow' />
               </div>
               <div className='about-text'>
                  <h2>
                     Olá mundo!
                  </h2>
                  <p>
                     Me chamo Arthur Gabriel Sant e sou um <o>desenvolvedor Full Stack</o>.  
                     Entrei no mundo da programação com intuito de achar soluções para problemas como  <o>layout, 
                     usabilidade e fluidez</o>, o que considero ser meu forte. Como estou me especializando para 
                     futuramente me tornar referência na área, busco sempre aprender e me atualizar sobre as <o>principais 
                     técnicas e tecnologias do mercado</o>, tendo como minhas mais fortes características a capacidade de compreender 
                     e elevar o código e funcionalidades das aplicações em que trabalho.
                  </p>
               </div>
            </div>
         </div>
        <StacksColumn />
      </div>
   </div>
  )
}

export default index