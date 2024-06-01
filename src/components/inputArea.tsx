import { Checkbox, TextField, Typography, Stack } from '@mui/material';
import { InputAreaProps } from './types';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const InputArea = ({
  inputValue,
  setInputValue,
  isProductInStock,
  setIsProductInStock,
}: InputAreaProps) => {
  return (
    <Stack>
      <TextField
        label='Search Filter'
        variant='standard'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Stack
        direction='row'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Checkbox
          {...label}
          checked={isProductInStock}
          onChange={(e) => setIsProductInStock(e.target.checked)}
        />
        <Typography variant='body1' component='span'>
          Only show products in stock
        </Typography>
      </Stack>
    </Stack>
  );
};
