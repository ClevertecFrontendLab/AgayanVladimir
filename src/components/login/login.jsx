import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import style from './login.module.css';
import { fetchAuth } from '../../redux/actions/actions';

const LoginContainer = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    props.fetchAuth(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register('identifier')} />
        <input {...register('password')} />
      </label>
      {/* <NavLink>Забыли логин или пароль?</NavLink> */}
      <input type='submit' />
      {/* <div className={style.registerBlock}>
        <NavLink>Нет учётной записи?</NavLink>
        <NavLink>Регистрация</NavLink>
      </div> */}
    </form>
  );
};
const mapDispatchToProps = {
  fetchAuth,
};
export const Login = connect(null, mapDispatchToProps)(LoginContainer);
