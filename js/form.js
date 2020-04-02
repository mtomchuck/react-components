import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

const ContactForm = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    text: ""
  })
  const [errorBox, setErrorBox] = useState([])
  const [ok, setOk ] = useState(false)

  const handleInputs = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = [];
    let correct = true;

    if(inputs.name.length < 2) {
      correct = false
      errors.push("Pole 'Imię' musi zawierać co najmniej 2 znaki")
    }

    if(inputs.email.length < 3) {
      correct = false
      errors.push("Pole 'Adres email' musi zawierać co najmniej 3 znaki")
    }

    if (!inputs.email.includes("@")) {
      correct = false;
      errors.push("Pole 'Adres email' musi zawierać znak @")
    }

    if(inputs.text.length == 0) {
      correct = false
      errors.push("Pole 'Wiadomość' musi zostać uzupełnione")
    }

    if (!correct) {
      setErrorBox(errors)
      setOk(false)
      return;
    }

    setErrorBox([])
    setOk(true)
  }

  return (
    <form onSubmit={handleSubmit}>

      <ul>
          {
            errorBox.map((e, i) => {
                return <li key={i}>{e}</li>
            })
          }
      </ul>

      {
          ok && <p style={{color: "green"}}>Dziękujemy za wiadomość</p>
      }

      <label>Imię:<input className="form-control" onChange={handleInputs} value={inputs.name} name="name" type="text"/></label><br/>

      <label>Adres email:<input className="form-control" onChange={handleInputs} value={inputs.email} name="email" type="email"/></label><br/>

      <label>Wiadomość:<input className="form-control" onChange={handleInputs} type="text" name="text" value={inputs.text}/></label><br/>

      <button className="btn btn-primary" type="submit">Wyślij</button>

    </form>
  )
}

const App = () => {
  return <ContactForm/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  ContactForm
};
