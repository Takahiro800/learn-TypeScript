import React, { useRef, useState, useCallback, useEffect } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

// import Text from 'components/atoms/Text'

export interface CheckBoxProps
  // TODO Omitとは？
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'dafaultValue'> {
  label?: string
}

/**
 * チェックボックス
 */
export const CheckBox = (props: CheckBoxProps) => {
  const { id, label, onChange, checked, ...rest } = props
  const [isChecked, setIsChecked] = useState(checked)

  // TODO useRefとは?
  const ref = useRef<HTMLInputElement>(null)

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      ref.current?.click()
      setIsChecked((isChecked) => !isChecked)
    },
    [ref, setIsChecked],
  )

  // TODO useEffect
  /**
   * 再描画を制御するためのフック
   */
  useEffect(() => {
    // パラメータからの変更を受け付ける
    setIsChecked(checked ?? false)
  }, [checked])

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox checked={isChecked} onChange={onChange} onClick={onClick} />
        }
        label={label}
      />
    </>
  )
}
