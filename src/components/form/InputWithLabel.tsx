import * as React from "react"
import { InputWithLabelProps } from "@/components/form/form"

const InputWithLabel = ({
  id,
  onInputChange,
  type,
  value,
  children,
  isFocused,
}: InputWithLabelProps) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        type={type}
        id={id}
        value={value}
        onChange={onInputChange}
        autoFocus={isFocused}
      />
    </>
  )
}

export default InputWithLabel
