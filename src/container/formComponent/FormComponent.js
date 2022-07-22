import React, { useState } from "react";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { Controller } from "react-hook-form";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { Label, FormField, PasswordType } from "./styled.form";

export const TextField = React.forwardRef(
  function TextField ({ label, type, name, defaultValue, onChange, className, errors, placeholder,props }, ref){
    return (
      <FormField className={className}>
        <Label htmlFor={name}>{label}</Label>
        {type === "textarea" && (
          <textarea
            name={name}
            id={name}
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}
            {...props}
          />
        )}
        {[
          "name",
          "email",
          "text",
          "number",
          "tel",
          "date",
          "password",
          "file",
        ].includes(type) && (
          <input
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}
            placeholder={placeholder}
            className={className}
            style={{marginTop: 8}}
          />
        )}
      </FormField>
    );
  }
);

export const PasswordField = React.forwardRef(
  function PasswordField ({ name, label, required, defaultValue, onChange, error, disabled, placeholder }, ref){
    const [show, setShow] = useState(false);

    return (
      <FormField isDisable={disabled}>
        <Label htmlFor={name}>{label}</Label>
        <PasswordType isDisable={disabled} style={{marginTop: 8}}>
          <input
            disabled={disabled}
            type={show ? "text" : "password"}
            name={name}
            id={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}
          />
          {/* <span className="p_visible" onClick={() => setShow(!show)}>
            {!show ? <FiEye /> : <FiEyeOff />}
          </span> */}
        </PasswordType>
      </FormField>
    );
  }
);

export const SelectField = React.forwardRef(
  function SelectField({name, label, className, required, defaultValue, children}, ref){
    return (
        <FormField className={className}>
          <Label className="mb-2" htmlFor={name}>{label}</Label>
          <div className="flex justify-center">
            <div className="mb-3  w-full" >
              <select  className=" form-select appearance-none
                block
                w-full
                px-0
                py-2
                mt-2
                text-body4
                font-normal
                text-gray-400
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                {/* <option selected style={{fontSize: SIZES.body5, color: "red"}}>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> */}
                {children}
              </select>
            </div>
            </div>
        </FormField>
    )
  }
)

// export const PhoneField = forwardRef(
//   ({ name, label, control, required, defaultValue, onChange, error }, ref) => {
//     return (
//       <FormField>
//         <Label htmlFor={name}>{label}</Label>
//         <Controller
//           name={name}
//           control={control}
//           render={({ field: { onChange } }) => (
//             <PhoneInput defaultCountry="NG" onChange={onChange} ref={ref} />
//           )}
//         />
//       </FormField>
//     );
//   }
// );

