import { useState } from 'react';
import axios from "axios";
import styles from '../App.module.css'

const Login = () => {

  const [formInput, setFormInput] = useState({
    email: "",
    password: ""
  })

  const [errorMsg, setErrorMsg] = useState("")

  const login = (event) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/login",
      data: {
        email: formInput.email,
        password: formInput.password
      }
    })
      .then((response) => {
        console.log("Logged in successfully")
      }).catch((error) => {
        if (error.response) {
          setErrorMsg("Invalid Username or password")
          console.log(error.response)
        }
      })

    setFormInput(({
      email: "",
      password: ""
    }))

    event.preventDefault()
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setFormInput(prev => ({ ...prev, [name]: value })
    )
  }

  return (
    <div className={`${styles.main}`}>
      <div className={styles.button_div}>
        <h1>Login</h1>
      </div>

      <div className={styles.data_main_div}>
        <form>
          <div className={styles.form_input}>
            <input onChange={handleChange} type="text"
              name="email" placeholder="Username"
              text={formInput.email} value={formInput.email}
            />
            <input onChange={handleChange} type="password"
              name="password" placeholder="Password"
              text={formInput.password} value={formInput.password}
            />
            <button onClick={login}>Submit</button>
          </div>
        </form>
      </div>
      <div className={styles.error_msg}>{errorMsg}</div>
    </div>
  );
}

export default Login;