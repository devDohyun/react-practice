import style from './View.module.scss'

const BookingView = ({ name }) => {
  return (
    <div className={style.view}>
      <div className={style.name}>{name}</div>
    </div>
  )
}

export default BookingView
