import BookingForm from 'components/Booking/Form'
import BookingView from 'components/Booking/View'

import style from './Reservation.module.scss'

const BookingReservation = ({ stateForm, handleOnChange }) => {
  return (
    <div className={style.reservation}>
      <BookingView {...stateForm} />
      <BookingForm state={stateForm} onChange={handleOnChange} />
    </div>
  )
}

BookingReservation.defaultProps = {
  stateForm: {},
  handleOnChange: () => {},
}

export default BookingReservation
