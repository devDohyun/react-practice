import { useState } from 'react'
import BookingReservation from '../components/Booking/Reservation'

const BookingInputContainer = () => {
  const [stateForm, setStateForm] = useState({
    name: null,
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target

    setStateForm((state) => ({
      ...state,
      [name]: value,
    }))
  }

  return (
    <>
      <BookingReservation
        stateForm={stateForm}
        handleOnChange={handleOnChange}
      />
    </>
  )
}

export default BookingInputContainer
