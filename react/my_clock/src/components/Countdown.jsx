import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [times, setTimes] = useState([
    "⏳⌛️⏳⌛️⏳⌛️",
    "⏳⌛️⏳⌛️⏳⌛️",
    "⏳⌛️⏳⌛️⏳⌛️",
  ]);
  const [eventArray, setEventArray] = useState([
    "🇪🇸 Madrid",
    "🇳🇱 Amsterdam",
    "🇹🇭 Thailand",
  ]);
  useEffect(() => {
    let countDownDateArray = [
      "July 14, 2023 18:30:00",
      "October 21, 2023 7:00:00",
      "November 30, 2023 15:30:00",
    ];
    let timesArray = [];

    for (let i = 0; i < countDownDateArray.length; i++) {
      let x = setInterval(() => {
        let now = new Date().getTime();
        let countDownDate = new Date(countDownDateArray[i]).getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
          clearInterval(x);
          time = "COUNTDOWN FINISHED";
        }

        timesArray[i] = time;
        setTimes([...timesArray]);
        setEventArray([...eventArray]);
      }, 1000);
    }
  }, []);

  return (
    <div className="countdown">
      {times.length === eventArray.length &&
        times.map((time, index) => (
          <h3 key={index}>
            Days to {eventArray[index]}: {time}
          </h3>
        ))}
    </div>
  );
};

export default Countdown;
