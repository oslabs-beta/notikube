'use client'

import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { FormControlLabel, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';



const EmailSwitch = (props: {user_id: (string | undefined), status: (boolean | undefined)}) => {

  const [checked, setChecked] = useState<(boolean | undefined)>(props.status);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    fetch('/api/updateUser/email', {
      method:'POST',
      body: JSON.stringify({user_id: props.user_id, status: checked})
    })
    .then((res) => {
      return res.json()
    })
    .then((res) => console.log(res))
  };

  const RedSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: red[600],
      '&:hover': {
        backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: red[600],
    },
  }));



  return (
    <FormControlLabel
      control={<RedSwitch
      checked={checked}
      onChange={handleChange}
      inputProps={{'aria-label': 'controlled'}}
    />}
    label={<Typography fontSize={18}>Email Notifications</Typography>}
    />
  )
}

export default EmailSwitch;