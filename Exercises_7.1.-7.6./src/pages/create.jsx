import { useField } from "../hooks"

const Create = (props) => {
    const contentField = useField('text', 'content');
    const authorField = useField('text', 'author');
    const infoField = useField('text', 'info');

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNew({
            content: contentField.value,
            author: authorField.value,
            info: infoField.value,
            votes: 0
        })
    }

    const resetFields = () => {
        contentField.reset();
        authorField.reset();
        infoField.reset();
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input {...contentField} reset=""/>
                </div>
                <div>
                    author
                    <input {...authorField} reset=""/>
                </div>
                <div>
                    url for more info
                    <input {...infoField} reset=""/>
                </div>
                <button type="submit">create</button>
                <button type="reset" onClick={resetFields}>reset</button>
            </form>
        </div>
    )
}
export default Create;