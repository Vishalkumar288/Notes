import {
  FormHelperText,
  InputLabel,
  TextareaAutosize,
  styled,
} from "@mui/material";
import React, { useState } from "react";

import { Controller } from "react-hook-form";
import { primaryBackground } from "../theme/GlobalTheme";

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  padding: 12,
  background: primaryBackground,
  fontFamily: "Lovers Quarrel",
  fontSize: 34,
  marginBottom: -7,
  border: `none !important`,
  color: theme.palette.text.primary,
  "&::placeholder ": {
    color: theme.palette.text.disabled,
  },
  "&:focus": {
    border: `none !important`,
    outline: "none !important",
    "& .textLabel": {
      fontWeight: 500,
    },
  },
  "&.textarea_error": {
    borderColor: `red !important`,
  },
}));

const InputArea = ({
  name,
  control,
  helperText,
  placeholder,
  disabled = false,
  label,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleAreaFocus = (e) => {
    setIsFocused((prevFocus) => !prevFocus);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      render={({ field, fieldState: { error } }) => (
        <>
          <InputLabel
            htmlFor={name}
            sx={{ fontWeight: (field.value || isFocused) && 500 }}
            disabled={disabled}
          >
            {label}
          </InputLabel>
          <StyledTextArea
            {...field}
            minRows={6}
            placeholder={placeholder}
            id={name}
            className={!!error ? "textarea_error" : ""}
            onFocus={handleAreaFocus}
            onBlur={handleAreaFocus}
            disabled={disabled}
          />
          {helperText && (
            <FormHelperText sx={{ letterSpacing: "0.1em" }}>
              {helperText}
            </FormHelperText>
          )}
          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </>
      )}
    />
  );
};

export default InputArea;
