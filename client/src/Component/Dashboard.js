import React, { useState } from 'react'
import axios from 'axios';
import styles from '../App.module.css'
import TableGrid from './TableGrid';

const Dashboard = (props) => {
    const api = axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    })

    const [numbers, setNumbers] = useState([])

    //Function called when fetch data button is clicked to fetch data from backend
    const getNumbers = async () => {
        const apiData = await api.get('/numbers')
        apiData.data.access_token && props.setToken(apiData.data.access_token)
        setNumbers(apiData.data)
    }

    return (
        <div className={styles.main}>
            <div className={styles.button_div}>
                <button className={styles.btn}
                    disabled={numbers.length > 0}
                    onClick={getNumbers}>
                    Fetch Data
                </button>
                <button className={styles.btn}
                    disabled={numbers.length === 0}
                    onClick={() => setNumbers([])}>
                    Clear Data
                </button>
            </div>
            {numbers.length > 0 &&
                <div className={styles.data_main_div}>
                    <TableGrid data={numbers} />
                </div>
            }
        </div>
    )
}

export default Dashboard