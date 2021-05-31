import React from 'react'
import MaterialTable, { MTableToolbar }  from 'material-table';

 const DataTable =()=> {
    const data=[
        {
            id:'MO63592DR2',
            date:'08.04.2021',
            description:'CODE 5928MD01',
            status:'COMPLETED',
            income: '$2450.00',
        },
        {
            id:'MO63592DR2',
            date:'08.04.2021',
            description:'CODE 5928MD01',
            status:'COMPLETED',
            income: '$2500.00',
        },
        {
            id:'MO63592DR2',
            date:'08.04.2021',
            description:'CODE 5928MD01',
            status:'COMPLETED',
            income: '$2760.00',
        },
        {
            id:'MO63592DR2',
            date:'08.04.2021',
            description:'CODE 5928MD01',
            status:'COMPLETED',
            income: '$2980.00',
        },
        {
            id:'MO63592DR2',
            date:'08.04.2021',
            description:'CODE 5928MD01',
            status:'COMPLETED',
            income: '$2530.00',
        }
    ]
    const columns=[
        {
            title:'Invoice ID', field:'id'

        },
        {
            title:'Date', field:'date'
        },
        {
            title:'Description', field:'description'
        },
        {
            title:'Status', field:'status'
        },
        {
            title:'Income', field:'income'
        }
    ]
    return(
        <div style={{font:'Arial, Helvetica, sans-serif', width:'1225px'}}>
            <MaterialTable title="Recent Transaction"
            data={data}
            columns={columns}
            options={{
                search: false,
                selection: true,
                paging: false 
            }}          
            />
        </div>
    )
}

export default DataTable;