// import TextArea from '@mui/base/TextareaAutosize'
import TextField from '@mui/material/TextField'

type TextareaProps = {
  label: string
  placeholder: string
  minRows?: number
  maxRows?: number
}

export const TextArea = (props: TextareaProps) => {
  const { label, placeholder, minRows = 4, maxRows = 10 } = props

  return (
    <TextField
      id="outlined-textarea"
      label={label}
      placeholder={placeholder}
      multiline
      minRows={minRows}
      maxRows={maxRows}
      fullWidth
    />
  )
}
