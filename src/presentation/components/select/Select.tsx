import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

interface itens {
  label: string;
  value: string;
}

interface ownProps {
  itens: itens[];
  label: string;
  helpText?: string;
}

const Select: React.FC<ownProps> = (props): JSX.Element => {
  const [currency, setCurrency] = useState();

  function handleChange(e: any) {
    setCurrency(e);
  }

  return (
    <TextField
      id="standard-select-currency"
      select
      label={props.label}
      value={currency}
      onChange={handleChange}
      helperText={props.helpText}
    >
      {props.itens.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
