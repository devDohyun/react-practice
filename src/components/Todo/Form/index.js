import { useState } from "react"

const Form = props => {
    const initialFormContent = {
        title: '',
        content: ''
    }
    const [formContent, setFormContent] = useState({ ...initialFormContent })
    
    
    const onSubmit = (e) => {
        e.preventDefault()


        if (typeof props.onSubmit === 'function') props.onSubmit({ ...formContent })
        setFormContent({ ...initialFormContent })
    }
    const onInput = (e, key) => {
        const state = {
            ...formContent,
        }
        state[key] = e.target.value
        
        
        setFormContent(state)
    }
    

    return (
        <form onSubmit={onSubmit}>
            <input type="text" onInput={e => onInput(e, 'title')} value={formContent.title} />
            <textarea onInput={e => onInput(e, 'content')} value={formContent.content}></textarea>
            <button type="submit">추가</button>
        </form>
    )
}


export default Form