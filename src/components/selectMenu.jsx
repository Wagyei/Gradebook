import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function SelectMenu({ items, title }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {title}
        </InputLabel>
        <NativeSelect
          defaultValue={items[0]?.value || ''}
          inputProps={{
            name: title,
            id: 'uncontrolled-native',
          }}
        >
          {items.map((item, index) => (
            <option key={index} value={item.value}>
              {item}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}