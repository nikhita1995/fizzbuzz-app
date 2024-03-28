import { useState } from 'react';
import axios from "axios";
import styles from '../App.module.css'

const Login = (props) => {

  const [formInput, setFormInput] = useState({
    email: "",
    password: ""
  })

  const [errorMsg, setErrorMsg] = useState("")

  //Function called when login button is clicked - generates jwt token
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
        props.setToken(response.data.access_token)
      }).catch((error) => {
        if (error.response) {
          setErrorMsg(error.response.data.message)
          console.log(error.response)
        }
      })

    setFormInput(({
      email: "",
      password: ""
    }))

    event.preventDefault()
  }

  //Function called when username and password inputs are changed
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