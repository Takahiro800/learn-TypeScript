// import 'tailwindcss/tailwind.css'
import TextField from '@mui/material/TextField'

type VariantType = 'outlined' | 'filled' | 'standard'

export type InputProps = {
  variant: VariantType
  placeholder: string
  isError?: boolean
}

export const Input = (props: InputProps) => {
  const { placeholder, variant, isError = false } = props

  return (
    <>
      {isError ? (
        <TextField
          id="basic-input"
          error
          label={placeholder}
          variant={variant}
        />
      ) : (
        <TextField id="outlined-basic" label={placeholder} variant={variant} />
      )}
    </>
  )
}
