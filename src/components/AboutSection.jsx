import './AboutSection.css';

function AboutSection() {
    return (
        <section id="About">
            <h2>Sobre mim</h2>
            <p>Sou um desenvolvedor full-stack com foco no back-end e estudante de Engenharia de Software na UFC. Estou construindo uma carreira sólida buscando soluções eficientes e bem estruturadas. Com formação técnica em Logística, levo comigo organização, pensamento sistêmico e visão estratégica para além do código.</p>
            <h3>Techs</h3>
            <ul className="StackList">
                <li><img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" title="Node.js" className="StackIcons" /></li>
                <li><img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" title="MySQL" className="StackIcons" /></li>
                <li><img src="https://skillicons.dev/icons?i=html" alt="HTML" title="HTML" className="StackIcons" /></li>
                <li><img src="https://skillicons.dev/icons?i=css" alt="CSS" title="CSS" className="StackIcons" /></li>
                <li><img src="https://skillicons.dev/icons?i=js" alt="JavaScript" title="JavaScript" className="StackIcons" /></li>
                <li><img src="https://skillicons.dev/icons?i=git" alt="Git" title="Git" className="StackIcons" /></li>
                <li><img src="https://skillicons.dev/icons?i=react" alt="React" title="React" className="StackIcons" /></li>
                <li><img src="https://skillicons.dev/icons?i=vscode" alt="VSCode" title="VSCode" className="StackIcons" /></li>
                <li><img src="https://skillicons.dev/icons?i=netlify" alt="Netlify deploy" title="Netlify" className="StackIcons" /></li>
            </ul>
            <h3>Soft Skills</h3>
            <ul className='SoftSkills'>
                <li className='Skill'>Comunicação clara</li>
                <li className='Skill'>Liderança</li>
                <li className='Skill'>Trabalho em equipe</li>
                <li className='Skill'>Aprendizado rápido</li>
                <li className='Skill'>Visão empreendedora</li>
                <li className='Skill'>Autodidatismo</li>
                <li className='Skill'>Resolução de problemas</li>
                <li className='Skill'>Visão sistêmica</li>
            </ul>
        </section>
    )
}

export default AboutSection;