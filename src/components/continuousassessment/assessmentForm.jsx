import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DropDownButton from '../buttons/dropDownButton';
import { useEffect, useState } from 'react';
import TaskSetModal from './taskSetModal';
import EditableTableCell from './editableTableCell';
import ContinuousAssessmentConfigurationForm from './configurationForm';
import SimpleTabs from './tabs';
function createColumns(headingData) {
  let res = []
  Object.keys(headingData).map(
    (key) => {
      res = [...res, { 'id': key, 'label': headingData[key]['val'], 'minWidth': 100 }]
    },
  );
  return res
}

function createRows(api_data) {

  let res = []
  api_data.map(
    (item) => {
      let acc = {}
      Object.keys(item).map(
        (key) => {

          acc[key] = item[key]['val']
        }
      )
      res = [...res, acc]
    }
  )
  return res
}


export default function AssessmentForm({ assessment }) {
  const [my_api_data, set_my_api_data] = useState(assessment)
  let rows = my_api_data['data']
  let columns = ['termExam', 'position']
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    // React to changes and possibly update state
    rows = my_api_data
    columns = my_api_data

  }, [my_api_data]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>

      <div>

        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column}
                      align={"center"}
                      style={{ top: 57, minWidth: '30px' }}
                    >
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.values(rows).map((row, index) => (

                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {console.log(index)}
                    {columns.map((column) => {

                      const value = row[column];
                      return (
                        <EditableTableCell key={value} align="center" initialValue={value} />
                      );
                    })}
                  </TableRow>

                ))}
              </TableBody>

              {/* <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1} key={"1"}>
                  <EditableTableCell key={"Hello"} align="center" initialValue={"Hello"} />
                  <EditableTableCell key={"World"} align="center" initialValue={"World"} />


                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1} key={"2"}>
                  <EditableTableCell key={"Hello1"} align="center" initialValue={"Hello1"} />
                  <EditableTableCell key={"World1"} align="center" initialValue={"World1"} />


                </TableRow>

              </TableBody> */}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={Object.keys(rows).length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

    </div>

  );

}
