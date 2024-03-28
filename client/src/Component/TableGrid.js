import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import styles from '../App.module.css'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const TableGrid = (props) => {
    const colDef = [
        { field: "num", flex: 1, headerName: "Number" },
        { field: "val", flex: 1, headerName: "Alternate Value" }]
    const [rowData, setRowData] = useState([])

    //When the props.data is updated below is called - (hook equivalent of ComponentDidUpdate in class component)
    useEffect(() => {
        if (props.data.length > 0) {
            setRowData(props.data)
        }
    }, [props.data])

    return (
        rowData.length > 0 &&
        <div className={`ag-theme-quartz ${styles.table_grid}`} >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDef}
                rowSelection="multiple"
                suppressRowClickSelection={true}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={[10, 25, 50]}
            />
        </div>
    );

}

export default TableGrid