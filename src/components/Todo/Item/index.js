import style from './index.module.scss'


const TodoItem = ({ title, content }) => {
    return (
        <div className={style.item}>
            <div className={style.title}>{title}</div>
            <div className={style.content}>{content}</div>
        </div>
    )
}


export default TodoItem