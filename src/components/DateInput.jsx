import React from 'react'
import { icons } from '../constants'

const DateInput = ({ ...props }) => {
  const calendarRef = React.useRef(null)

  const handleImageClick = () => {
    if (calendarRef.current) {
      // console.log(calendarRef.current);
      calendarRef.current.showPicker()
    }
  }
  return (
    <div className="mb-4">
      <label
        htmlFor='dob'
        className="hidden mb-1 text-sm font-medium"
      >
        {'date'}
      </label>
      <div className="flex items-center bg-zinc-300 rounded-lg">
        <img
          onClick={handleImageClick}
          src={icons.calendar}
          alt={`date icon`}
          className="mr-2 py-2 ps-3"
          width={35}
        />
        <input
          ref={calendarRef}
          id='dob'
          type='date'
          className="flex-1 focus:ring-0 bg-transparent text-black py-4 px-1 outline-none rounded-md "
          style={{ WebkitAppearance: "none" }}
          {...props}
          required
        />
      </div>
    </div>
  )
}

export default DateInput