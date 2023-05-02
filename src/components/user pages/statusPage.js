import "./status.css";
import { useEffect, useRef, useState } from "react";
export default function Status(){
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
 
  const handleSubmit = async (e) => {
    setResult("");
    e.preventDefault();
    // validating data
    if (!name || !email || !subject || text?.length < 10) {
      alert("Please verify your inputs ...");
      return null;
    }
    else{
      alert("Feedback is submitted successfully!")
    }
  }
    return(
    <div class=" container items-center text-center " id="App">
       
        <h1 class="text-5xl font-bold m-3  bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-sky-400">Feedback</h1>
      <form onSubmit={handleSubmit} className="form__container bg-[#99f6e4]">
        <div className="form__controls">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            className="input__subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="text">Text</label>
          <textarea
            rows="5"
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <button className=" btn btn-success" id="button">Send Feedback</button>
        </div>
      </form> 
    </div>
    );
}