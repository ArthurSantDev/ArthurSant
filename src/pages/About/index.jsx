import StackColumn from '../../components/Stack'
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam repellat mollitia quos eos quas a magni debitis, cupiditate laborum voluptatum nulla sed sunt autem molestias quo hic, voluptate magnam.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corrupti quam nisi quis nihil, maxime molestiae esse nobis praesentium eaque dignissimos natus impedit quibusdam? Fugiat ex id earum officia nobis.
               </p>
            </div>
         </div>
      </div>
      <StackColumn />
   </div>
   </div>
  )
}

export default index