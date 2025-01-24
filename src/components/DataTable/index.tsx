import React, { FC } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.less'
import SearchInput from './SearchInput';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#2f3032' },
    // secondary: { main: '#f48fb1' },
    background: { default: 'rgba(255, 255, 255, 0.06)', paper: '#2f3032' },
    // text: { primary: '#fff', secondary: 'rgba(255, 255, 255, 0.7)' },
  },
});

const columns: GridColDef[] = [
  { field: 'uid', headerName: 'User Id' },
  { field: 'lamport_id', headerName: 'Lamport Id', minWidth: 150 },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const paginationModel = { page: 0, pageSize: 15 };

const DataTable : FC<{isShow: boolean, data: any}> = ({isShow, data}) => {
  const [inputVal, setInputVal] = React.useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      {
        isShow ? (
          <div className="table-container" >
            <SearchInput value={inputVal} onChange={(e) => onInputChange(e)} />
            <Paper className='paper'>
              <DataGrid
                rows={data}
                getRowId={(row) => row.uid}
                disableColumnMenu={true}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[15]}
                sx={{
                  border: 0,
                  '.MuiDataGrid-columnHeaderTitle': {
                    fontWeight: 600,
                  },
                  '.MuiDataGrid-cell': {
                    fontWeight: 100,
                    fontSize: 12,
                    opacity: 0.8,
                  }
                }}
              />
            </Paper>
          </div>
        ) : null
      }
    </ThemeProvider>
    
  );
}

export default DataTable;