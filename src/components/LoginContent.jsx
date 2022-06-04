import React from "react";
import logo from "../assests/images/logo.png";
import background from "../assests/images/background.png";
import laptop from "../assests/images/laptop.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  LoginWrapper,
  LoginContainer,
  LoginContentInput,
  LoginContentImage,
  LoginContentWrapper,
  LoginContentTitle,
  LoginContentInputForm,
  LoginContentInputField,
  LoginContentButton,
  LoginContentBg,
  LoginContentBgImageBg,
  LoginContentBgImageNote,
  LoginContentImageImg,
  LoginMessage,
} from "../styles/TropaStyled";

// form validation
const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Favor digitar um  email válido!")
    .required("Campo obrigatório!"),
  password: yup
    .string()
    .min(6, "Favor digitar uma senha com no mínimo 6 caracteres!")
    .required("Campo obrigatório!"),
});

const LoginContent = ({ user, setUser }) => {
  let navigate = useNavigate();

  const onSubmit = () => {
    if (!user) {
      setUser(true); 
      navigate("/home");
    }
  };

  // Formik values
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validateOnBlur: true,
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginContentInput>
          <LoginContentImage>
            <LoginContentImageImg src={logo} alt="" />
          </LoginContentImage>
          <LoginContentWrapper>
            <LoginContentTitle>
              <h2>
                Bem Vindo ao <span>painel</span>
              </h2>
            </LoginContentTitle>

            <LoginContentInputForm autoComplete="off" onSubmit={handleSubmit}>
              <LoginContentInputField
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={values.email}
                onChange={handleChange}
                id="email"
                onBlur={handleBlur}
              />
              <LoginMessage>
                {touched.email && errors.email ? errors.email : ""}
              </LoginMessage>
              <LoginContentInputField
                type="password"
                name="password"
                placeholder="Digite sua senha"
                value={values.password}
                onChange={handleChange}
                id="password"
                onBlur={handleBlur}
              />
              <LoginMessage>
                {touched.password && errors.password ? errors.password : ""}
              </LoginMessage>

              <LoginContentButton type="submit">Acessar</LoginContentButton>
            </LoginContentInputForm>
          </LoginContentWrapper>
        </LoginContentInput>
        <LoginContentBg>
          <LoginContentBgImageBg src={background} alt="Background" />
          <LoginContentBgImageNote src={laptop} alt="Laptop" title="Laptop" />
        </LoginContentBg>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default LoginContent;
