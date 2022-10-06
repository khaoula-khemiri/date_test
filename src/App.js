import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import './App.css';

function App() {
  const [Date1, setDate1] = useState();
  const [Date2, setDate2] = useState(null);
  const [Lmv, setLmv] = useState(false);
  const [Mjs, setMjs] = useState(false);
  const [Type, setType] = useState();
  const [Dayrange, setDayrange] = useState([]);
  


  const clear = () => {
    window.location.reload();
  }

  const high = (e) => { 
     var daysOfYear = [];
     console.log(Date1);
     console.log(Date2); 
      var d =new Date(Date1);
     for (d; d <= Date2; d.setDate(d.getDate() + 1)) {
       var num = d.getDay();
       console.log(num);
       if(Type=== "LMV"){
          if (num===1 || num===3|| num===5){
            daysOfYear.push(new Date(d));
          } 
        }
       if(Type=== "MJS"){
         if (num===2 || num===4 || num===6){
            daysOfYear.push(new Date(d));
          } 
       }
     }
      setDayrange(daysOfYear);
      console.log(daysOfYear);
      e.preventDefault();//To prevent basic React form submit from refreshing the entire page
  }

  return (
    <div className="App">
       <form action="" onSubmit={high}>
      <div className="date-container">


        <div className='date'>
          <h3>Date1</h3> 
          <div><DatePicker  placeholderText="Date1..." selected={Date1}
                onChange={(date) => setDate1(date)} minDate={new Date()} maxDate={subDays(Date2, 1)}  required/></div>
        </div>

        <div className='date'>
         <h3>Date2</h3>
         <div><DatePicker placeholderText="Date2..." selected={Date2} onChange={(date) => setDate2(date)} 
               minDate={addDays(Date1, 1)} required  /></div>
        </div>
     </div>
     
     <div className="type-container"   >
       <h3>Type:</h3>
         <label>LMV<input type="radio" name="name" value="LMV" onChange={e =>setType(e.target.value)} required/> </label>
         <label>MJS:<input type="radio" name="name" value="MJS"  onChange={e =>setType(e.target.value)}/></label>
     </div>
    
      
     <div className="result">
       <h3>result:</h3>
       <div className="date-result"><DatePicker  highlightDates={Dayrange}   inline  /></div>
     </div>

     <div className="button-container">
     <input type="submit" value="Submit"  />
      <button className="button-clear" onClick={clear}>clear</button>
     </div>
     </form>

    </div>
  );
}

export default App;
