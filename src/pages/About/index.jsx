import StacksColumn from '../../components/Stack'
import './index.css'

const index = () => {
  return (
   <div className='center'>
   <div id='About' className='container back'>
      <h1 className='Title'>
         About Me
      </h1>
      <div className='center'>
         <div className='about_grid'>
            <div className='about_img'>
               <img src="/profile.png" className='shadow' />
            </div>
            <div className='about_text'>
               <h2>
                  Olá mundo!
               </h2>
               <p>
               Me chamo Arthur Gabriel Sant e sou um desenvolvedor Full Stack.  
               Entrei no mundo da programação com intuito de achar soluções para problemas como  layout, 
               usabilidade e fluidez, o que considero ser meu forte. Como estou me especializando para 
               futuramente me tornar referência na área, busco sempre aprender e me atualizar sobre as principais 
               técnicas e tecnologias do mercado, tendo como minhas principais características a capacidade de compreender 
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