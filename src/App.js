import React, {useState} from 'react'

import './App.css'
import Subtitle from './components/Sub-title'
import Header from './components/Header'

function App() {
    const [todo, setTodo] = useState(['Desenvolvimento de app', 'Front-end web'])
    const [doing, setDoing] = useState(['Dando Aula', 'Projeto PIBIC'])
    const [finish, setFinish] = useState(['Segundo período', 'Programação em C'])

    // useState retorna um array com 2 posições: 
    // 1. Variável com o seu valor inicial
    // 2. Função para atualizarmos esse valor

    function handleTodo() {
        //projecsdts.push(`Novo projeto ${Date.now()}`)
        
        setTodo([...todo, `Novo projeto ${Date.now()}`])
    }

    function handleDoing() {
        setDoing([...doing, `Projeto em andamento ${Date.now()}`])
    }

    function handleFinish() {
        setFinish([...finish, `Projeto Finalizado ${Date.now()}`])
    }

    return (
        <>
            <Header title="Projetos"/>

            <div className='projectsTitle'>
                <div className='para-fazer'>
                    <Subtitle subtitle='Para Fazer'/>
                    <ul>
                        {todo.map(project => <li key={project}>{project}</li>)}
                    </ul>

                    <button type="button" onClick={handleTodo}>Adicionar projeto</button>
                </div>

                <div className='fazendo'>
                    <Subtitle subtitle='Fazendo'/>
                    <ul>
                        {doing.map(project => <li key={project}>{project}</li>)}
                    </ul>

                    <button type="button" onClick={handleDoing}>Adicionar projeto</button>
                </div>

                <div className='feito'>
                    <Subtitle subtitle='Feito'/>
                    <ul>
                        {finish.map(project => <li key={project}>{project}</li>)}
                    </ul>

                    <button type="button" onClick={handleFinish}>Adicionar projeto</button>
                </div>
            </div>
        </>
    )
}

export default App