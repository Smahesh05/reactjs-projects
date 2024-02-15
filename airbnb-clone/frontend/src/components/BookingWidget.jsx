import axios from "axios";
import { differenceInCalendarDays } from "date-fns";
import { useState } from "react";
import { useSelector } from "react-redux";

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  const { userInfo } = useSelector((state) => state.auth);

  const bookThisPlace = (e) => {
    e.preventDefault();

    const data = {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      place: place._id,
      price: numberOfNights * 3,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    };

    axios.post("http://localhost:5000/api/places/book-place", data, config);
  };

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: $place.price / per night
      </div>
      <div className="border  rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check in:</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of Guest:</label>
          <input
            type="number"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <label>Phone number:</label>
            <input
              type="tel"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>
        )}
      </div>
      <button className="primary mt-4" onClick={bookThisPlace}>
        Book this Place
        {numberOfNights > 0 && <span> {numberOfNights}</span>}
      </button>
    </div>
  );
};

export default BookingWidget;
