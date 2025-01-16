'use client'

import { useField, Field } from 'formik'

interface FormInputProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  as?: 'input' | 'textarea'
  rows?: number
  standalone?: boolean
}

const FormInput = ({ label, as = 'input', standalone = false, ...props }: FormInputProps) => {
  let fieldProps
  let errorMsg
  let touched

  if (!standalone) {
    const [field, meta] = useField(props)
    fieldProps = field
    errorMsg = meta.error
    touched = meta.touched
  }

  const inputClasses = `w-full px-4 py-2 rounded-lg border ${
    touched && errorMsg
      ? 'border-red-500'
      : 'border-gray-200'
  } focus:outline-none focus:border-[#FF6B98]`

  return (
    <div className="mb-4">
      <label className="block text-gray-600 text-sm mb-2">
        {label} {!standalone && <span className="text-red-500">*</span>}
      </label>
      {standalone ? (
        as === 'textarea' ? (
          <textarea
            {...props}
            className={inputClasses}
          />
        ) : (
          <input
            {...props}
            className={inputClasses}
          />
        )
      ) : (
        <Field
          {...props}
          as={as}
          className={inputClasses}
        />
      )}
      {touched && errorMsg ? (
        <div className="text-red-500 text-sm mt-1">{errorMsg}</div>
      ) : null}
    </div>
  )
}

export default FormInput

