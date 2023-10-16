const Anecdote = ({ anecdote }) => {
    return (
        <div>
            <h2>{anecdote.content} by {anecdote.author}</h2>
            <h3>Has {anecdote.votes} votes</h3>
            <h3>for more info see <a href={anecdote.info} >{anecdote.info}</a></h3>
        </div>
    )
}

export default Anecdote;