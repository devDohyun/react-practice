import { useState } from "react"

const Form = props => {
    const initialFormContent = {
        content: ''
    }
    const [formContent, setFormContent] = useState({ ...initialFormContent })
    
    
    const onSubmit = (e) => {
        e.preventDefault()


        if (typeof props.onSubmit === 'function') props.onSubmit({ ...formContent })
        setFormContent({ ...initialFormContent })
    }
    const onInput = (e) => {
        setFormContent({
            ...formContent,
            content: e.target.value
        })
    }
    

    return (
        <form onSubmit={onSubmit}>
            <textarea onInput={onInput} value={formContent.content}></textarea>
            <button type="submit">추가</button>
        </form>
    )
}


export default Form