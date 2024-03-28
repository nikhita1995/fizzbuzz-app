import axios from "axios";
import styles from '../App.module.css'


const Toolbar = () => {
  const api = axios.create({
    baseURL: "http://localhost:5000",
  })

  const logout = async () => {
    await api.post('/logout')
      .then((response) => {
        console.log("Logout")
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
        }
      })
  }

  return (

    <div className={styles.button_div}>
      <h1>Welcome to the Fizz Buzz Application</h1>
      <button className={styles.logout_btn}
        onClick={logout}>
        Logout
      </button>

    </div>


  )
}

export default Toolbar