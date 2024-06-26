import { BiPlus } from "react-icons/bi"; 
import { Link } from 'react-router-dom'
import './index.css'

import { FaGithubAlt } from "react-icons/fa"; 
import { IoMdEyeOff } from "react-icons/io"; 
import { IoMdEye } from "react-icons/io"; 

const index = () => {
  return (
    <div id='Projects' className='container'>
        <section className="projects">
            <h1 className='Title'>
                My best projects
            </h1> 

            <div class="project  shadow">
                    <div class="project-about">
                    <div>
                        <h2 class="att">Nike Store</h2>
                        <p>
                            E-comerce com estética e produtos da Nike que possui sua base em Vite JS, React Js e Tailwind.
                            Responsivo para dispositivos, com tema Dark e 'carrinho' que é atualizado de acordo com quantidade e tamanho.
                        </p>
                    </div>
                    <div class="stack-icons">
                        <img src="/assets/stacks/vite-js.svg"/>
                        <img src="/assets/stacks/react.svg"/>
                        <img src="/assets/stacks/javascript.svg"/>
                        <img src="/assets/stacks/tailwind.svg"/>
                        <img src="/assets/stacks/github.svg"/>
                    </div>
                    <div className='about-buttons'>
                        <div class="project-link github-btn">
                            <a href=" https://github.com/ArthurSantDev/Nike " target='_blank'>
                                <FaGithubAlt />
                                <p>Github</p>
                            </a>
                        </div>
                        <div class="project-link deploy-btn">
                            <a href="https://nike-arthur.vercel.app/" target='_blank'>
                                <IoMdEye />
                                <p>Deploy</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-img">
                    <img src="/assets/projects/Nike.png"/>
                </div>
            </div>

            <div class="project shadow">
                <div class="project-about">
                    <div>
                        <h2 class="att">Mern.In</h2>
                        <p>
                            Aplicação que utiliza do pack MERN de stacks para sua estruturação. oAuth de usuário, permitindo cadastro
                            de suas informações no banco de dados (MongoDB) e armazenando o Store de suas atividades a partir da biblioteca
                            Redux.
                        </p>
                    </div>
                    <div class="stack-icons">
                        <img src="/assets/stacks/redux.svg"/>
                        <img src="/assets/stacks/react.svg"/>
                        <img src="/assets/stacks/javascript.svg"/>
                        <img src="/assets/stacks/mui.svg"/>
                        <img src="/assets/stacks/node.svg"/> 
                        <img src="/assets/stacks/mongodb.svg"/>
                        <img src="/assets/stacks/express.svg"/>
                    </div>
                    <div className='about-buttons'>
                    <div class="project-link github-btn">
                        <a href=" https://github.com/ArthurSantDev/Mern.In " target='_blank'>
                            <FaGithubAlt />
                            <p>Github</p>
                        </a>
                    </div>
                    <div class="project-link deploy-btn cant-btn">
                        <a target='_blank'>
                            <IoMdEyeOff />
                            <p>Deploy</p>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="project-img">
                    <img src="/assets/projects/Mern.png"/>
                </div>
            </div>

            <div class="project shadow">
                <div class="project-about">
                    <div>
                        <h2 class="att">HighTrip</h2>
                        <p>
                            Landing Page para um App de viagens e aventura. Com UX/UI Design responsivo e
                            atrativo, utilizando o metodo 'Mobile-First' do Framework Tailwind
                        </p>
                    </div>
                    <div class="stack-icons">
                        <img src="/assets/stacks/nextjs.svg"/>
                        <img src="/assets/stacks/react.svg"/>
                        <img src="/assets/stacks/typescript.svg"/>
                        <img src="/assets/stacks/tailwind.svg"/> 
                        <img src="/assets/stacks/github.svg"/>
                    </div>
                    <div className='about-buttons'>
                        <div class="project-link github-btn">
                            <a href="https://github.com/ArthurSantDev/HighTrip" target='_blank'>
                                <FaGithubAlt />
                                <p>Github</p>
                            </a>
                        </div>
                        <div class="project-link deploy-btn">
                            <a href="https://hightrip.vercel.app/" target='_blank'>
                                <IoMdEye />
                                <p>Deploy</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-img">
                    <img src="/assets/projects/HighTrip.png"/>
                </div>
            </div>
        </section>
        
        <Link to='projects'>
            <button className="shadow">
                SEE MORE PROJECTS <i><BiPlus /></i>
            </button>
        </Link>
    </div>
  )
}

export default index