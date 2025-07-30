
export default function Contact() {
  return (
    <>
     <div style={{display: "flex",
      justifyContent: "center",
      marginBottom: "10px",
     }}>
      <div className="form">
        <h1>Reserve Your Seat Now?</h1>
      <input type="text" placeholder="Enter Your Full Name" className="input-btn" /><br />
      <input type="email" placeholder="Enter Your Email" className="input-btn"/><br />
      <input type="number" placeholder="Enter Your Number" className="input-btn"/><br />
      <input type="date" placeholder="Enter Reservation Date" className="input-btn"/><br />
      <input type="Time" placeholder="Enter Reservation Time" className="input-btn"/><br />
      <textarea name="" id="" placeholder="Any Special Request?" className="input-btn"></textarea><br />
      <button type="submit"className="input-btn" id="btn">Submit</button>
      </div> 
     </div>
    </>
  )
}
