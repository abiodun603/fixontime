import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/theme";


export const Label = styled.label`
  /** style the label of input field */
  font-weight: 500;
  color: ${COLORS.kblackCom};
  font-size: ${SIZES.body5};
`;

export const FormField = styled.div`
  /** style input field here */
  max-width: 450px;
  margin: 10px 0;
  input,
  select,
  textarea {
    outline: none;
    border: none;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    height: 48px;
    padding: 0 10px;
    border: 1px solid #d9dcef;
    border-radius: 3px;

    ::placeholder{
      color: ${COLORS.ksecondary};
    }
  }
  textarea {
    line-height: 1em;
    height: 100px !important;
  }

  ::placeholder {
    color: red;
  }

  .file-input::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }
  .file-input::before {
    content: "select some file";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
`;

export const PasswordType = styled.div`
  /** style password input here */
  border: 1px solid #d9dcef;
  border-radius: 3px;
  position: relative;
  display: flex;
  padding-right: 5px;
  input {
    width: 95%;
    border: none;

    ::placeholder{
      color: ${COLORS.ksecondary};
    }
  }
  .p_visible {
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
    cursor: pointer;
    font-size: 16px;
  }


`;