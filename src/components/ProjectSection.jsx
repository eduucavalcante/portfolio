import './ProjectSection.css';
import topTechImage from '../assets/img/TopTech.png';
import MemoBoxImage from '../assets/img/MemoBox.png';
import gcliImage from '../assets/img/gcli.png';

function ProjectSection() {
    return (
        <section id="Projects">
            <h2>Projetos</h2>
            <ul className="ProjectList">
                <li>
                    <div className="Project">
                        <img src={topTechImage} alt="TopTech Project" />
                        <div className="badges">
                            <p className="badge">WEB</p>
                            <p className="badge">HTML</p>
                            <p className="badge">CSS</p>
                            <p className="badge">JS</p>
                        </div>
                        <h3>TopTech</h3>
                        <p className="description">Landing page responsiva, minimalista e moderna para uma loja de eletrônicos.</p>
                        <div className="links">
                            <a href="https://toptechoficial.com.br" target='_blank' title='Ver projeto'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/eduucavalcante/TopTech" target='_blank' title='Ver repositório'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="Project">
                        <img src={MemoBoxImage} alt="MemoBox Project" />
                        <div className="badges">
                            <p className="badge">WEB</p>
                            <p className="badge">NODE</p>
                            <p className="badge">MYSQL</p>
                            <p className="badge">JWT</p>
                            <p className="badge">BCRYPT</p>
                        </div>
                        <h3>MemoBox</h3>
                        <p className="description">Aplicação full-stack simples de bloco de notas, com formatação de texto e cadastro de usuários.</p>
                        <div className="links">
                            <a href="https://memobox-notes.netlify.app" target='_blank' title='Ver projeto'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/eduucavalcante/MemoBox" target='_blank' title='Ver repositório'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="Project">
                        <img src={gcliImage} alt="GCLI Project" />
                        <div className="badges">
                            <p className="badge">CLI</p>
                            <p className="badge">NODE</p>
                            <p className="badge">NPM</p>
                            <p className="badge">JS</p>
                        </div>
                        <h3>GCLI</h3>
                        <p className="description">Uma ferramenta CLI básica que simplifica comandos Git comuns. Instalação pelo repositório com npm.</p>
                        <div className="links">
                            <a href="https://github.com/eduucavalcante/gcli" target='_blank' title='Ver repositório'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="Project">
                        <div id="soon">Em breve...</div>
                        <h3>Em breve...</h3>
                        <p className="description">Logo haverão mais projetos. Confira o GitHub para acompanhar todos os repositórios de projetos e exercícios.</p>
                        <div className="links">
                            <a href="https://github.com/eduucavalcante" target='_blank' title='Ver perfil no GitHub'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ProjectSection;