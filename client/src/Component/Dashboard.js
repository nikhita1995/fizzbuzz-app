import React, { useState } from 'react'
import axios from 'axios';
import styles from '../App.module.css'
import TableGrid from './TableGrid';

const Dashboard = () => {
    const api = axios.create({
        baseURL: "http://localhost:5000",
    })

    const [numbers, setNumbers] = useState([])

    const getNumbers = async () => {
        const apiData = await api.get('/numbers')
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