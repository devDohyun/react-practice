import useInput from 'hooks/useInput'
import BookingReservation from '../components/Booking/Reservation'

const BookingInputContainer = () => {
  const [stateForm, handleOnChange] = useInput({
    name: null,
  })

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
