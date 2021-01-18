import React, {useState} from 'react'

import './App.css'
import Subtitle from './components/Sub-title/Sub-title'
import Header from './components/Header/Header'

function App() {
    const [todo, setTodo] = useState([])
    const [doing, setDoing] = useState([])
    const [finish, setFinish] = useState([])

    // useState retorna um array com 2 posições: 
    // 1. Variável com o seu valor inicial
    // 2. Função para atualizarmos esse valor  

    function handleTodo() {
        //projecsdts.push(`Novo projeto ${Date.now()}`)
        const todoInput = document.getElementById('todo').value
        setTodo([...todo, todoInput])
        document.getElementById('todo').value=''
        
    }

    function handleDoing() {
        const doingInput = document.getElementById('doingInput').value
        setDoing([...doing, doingInput])
        document.getElementById('doingInput').value=''
    }

    function handleFinish() {
        const doneInput = document.getElementById('done').value
        setFinish([...finish, doneInput])
        document.getElementById('done').value=''
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

                    <input type="text" name="nome" id="todo" maxlength="80"/><br/>

                    <button type="button" onClick={handleTodo}>Adicionar projeto</button>
                </div>

                <div className='fazendo'>
                    <Subtitle subtitle='Fazendo'/>
                    <ul>
                        {doing.map(project => <li key={project}>{project}</li>)}
                    </ul>

                    <input type="text" name="nome" id="doingInput" maxlength="80"/><br/>

                    <button type="button" onClick={handleDoing}>Adicionar projeto</button>
                </div>

                <div className='feito'>
                    <Subtitle subtitle='Feito'/>
                    <ul>
                        {finish.map(project => <li key={project}>{project}</li>)}
                    </ul>

                    <input type="text" name="nome" id="done" maxlength="80"/><br/>

                    <button type="button" onClick={handleFinish}>Adicionar projeto</button>
                </div>
            </div>
        </>
    )
}

export default App