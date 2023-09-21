import { Button } from '@mui/material'
import React from 'react'

interface SubmitButtonProps {
  title: string;
  active: boolean;
  href: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { title, active, href } = props;
  return (
    <Button variant="contained">{title}</Button>
  )
}

export default SubmitButton
