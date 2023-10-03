import './App.css';
import { useState, useEffect } from "react"

function App() {

  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);
  const currentYear = new Date().getFullYear();
  const newyear = new Date(`Jan 1 ${currentYear + 1} 00:00:00`);

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentDate = new Date();

      const diff = (newyear - currentDate) / 1000;
      if (diff > 0) {
        const days = Math.floor(diff / 60 / 60 / 24)
        const hours = Math.floor(diff / 60 / 60 % 24)
        const mins = Math.floor((diff / 60) % 24)
        const secs = Math.floor(diff % 60)
        setdays(days);
        sethours(hours);
        setminutes(mins);
        setseconds(secs);
      }
      else {
        clearInterval(timerId)
      }
    }, 1000)
    return () => clearInterval(timerId);
  },)

  // console.log(currentYear);
  // console.log(newyear);
  return (
    <div className="" id="countdowntimer">
      <p className="CountDown">CountDown</p>
      <p className="to">To</p>
      <h2>NewYear</h2>
      <div className="" id="counter">
        <div className="Box">
          <h4>{days<10?"0"+days:days}</h4>
          <small>Days</small>
        </div>
        <div className="Box">
          <h4>{hours<10?"0"+hours:hours}</h4>
          <small>Hours</small>
        </div>
        <div className="Box">
          <h4>{minutes<10?"0"+minutes:minutes}</h4>
          <small>Minutes</small>
        </div>
        <div className="Box">
          <h4>{seconds<10?"0"+seconds:seconds}</h4>
          <small>Seconds</small>
        </div>
      </div>

    </div>
  );
}

export default App;
