import style from './Form.module.scss'

const BookingForm = ({ state, onChange }) => {
  const { name } = state

  return (
    <form className={style.form}>
      <input type="text" name="name" value={name} onChange={onChange} />
    </form>
  )
}

export default BookingForm
