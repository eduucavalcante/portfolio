import './Header.css'
import { useState, useEffect } from 'react';

function HeaderSection() {
    return (
        <header>
            <div className="HeaderContainer">
                <h1><a id='MainLink' href='#Home'>EC</a></h1>
                <ul>
                    <li><a href="#Home">Início</a></li>
                    <li><a href="#About">Sobre</a></li>
                    <li><a href="#Projects">Projetos</a></li>
                    <li><a href="#Contact">Contato</a></li>
                </ul>
            </div>
        </header>
    )
}

export default HeaderSection;