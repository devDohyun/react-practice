import BookingForm from 'components/Booking/Form'

const BookingInputContainer = () => {
  const handleOnChange = (e) => {
    console.log(e)
  }

  return <BookingForm onChange={handleOnChange} />
}

export default BookingInputContainer
