import { useState } from 'react'
import Create from './pages/create'
import Footer from './components/Footer'
import Menu from './components/Menu'
import AnecdoteList from './pages/Anecdotes'
import About from './pages/About'
import { Route, Routes, useMatch, useNavigate } from 'react-router-dom'
import Anecdote from './pages/Anecdote'
import { useNotificationDispatch } from './notificationContext'
import Notification from './components/Notification'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])
  const notificationDispatch = useNotificationDispatch()
  const navigate = useNavigate()

  const match = useMatch('/anecdotes/:id')
  const annecdote = match 
    ? anecdotes.find(note => note.id === Number(match.params.id))
    : null

  // const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    notificationDispatch({ type: 'SET', payload: `New anecdote added: ${anecdote.content}` })
    navigate('/')
  }

  // const anecdoteById = (id) =>
  //   anecdotes.find(a => a.id === id)

  // const vote = (id) => {
  //   const anecdote = anecdoteById(id)

  //   const voted = {
  //     ...anecdote,
  //     votes: anecdote.votes + 1
  //   }

  //   setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  // }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu/>
      <Notification></Notification>
      <Routes>
        <Route path="/anecdotes/:id" element={<Anecdote anecdote={annecdote} />} />
        <Route path="/create" element={<Create addNew={addNew}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes}/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
