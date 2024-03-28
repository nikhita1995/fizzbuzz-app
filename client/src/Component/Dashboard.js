import React, { useState } from 'react'
import axios from 'axios';

const Dashboard = () => {
    const api = axios.create({
        baseURL: "http://localhost:5000",
    })

    const [numbers, setNumbers] = useState([])

    const getNumbers = async () => {
        const apiData = await api.get('/numbers')
        setNumbers(apiData.data)
        console.log(apiData.data)
      }

    return (
        <div>Dashboard
            <button disabled={numbers.length > 0} onClick={getNumbers}>Fetch Data</button>
        </div>
    )
}

export default Dashboard