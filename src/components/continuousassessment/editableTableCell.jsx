import React, { useState } from 'react';
import { TableCell, } from '@mui/material';

const EditableTableCell = ({ initialValue, onSave, key }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleTableCellClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    // onSave(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleInputBlur();
    }
  };
  return (
    <TableCell onClick={handleTableCellClick} align={"center"} key={key} >
      {isEditing || value === undefined ? (
        <input value={value} onChange={handleInputChange} autoFocus onBlur={handleInputBlur} onKeyDown={handleKeyDown} style={{ width: `${(value || '').toString().length * 9}px`, minWidth: '30px' }}></input>
      ) : (
        value
      )}
    </TableCell>
  );
};

export default EditableTableCell


// // Usage in your table
// const MyTable = () => {
//   const [tableData, setTableData] = useState(/* your initial table data */);

//   const handleCellSave = (rowIndex, columnName, newValue) => {
//     setTableData(prevData => {
//       const newData = [...prevData];
//       newData[rowIndex][columnName] = newValue;
//       return newData;
//     });
//   };

//   return (
//     <Table>
//       <TableBody>
//         {tableData.map((row, rowIndex) => (
//           <TableRow key={rowIndex}>
//             {Object.entries(row).map(([columnName, cellValue]) => (
//               <EditableTableCell
//                 key={columnName}
//                 initialValue={cellValue}
//                 onSave={(newValue) => handleCellSave(rowIndex, columnName, newValue)}
//               />
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };