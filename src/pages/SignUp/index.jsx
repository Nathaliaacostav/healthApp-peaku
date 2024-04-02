import React, { useState } from 'react';
import { MdOutlineMailOutline, MdOutlineLock } from 'react-icons/md';
import { FaRegUser, FaRegHeart } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './styles.sass';
import { useDispatch } from 'react-redux'
import { createAnAccountAsync } from '../../store/users/userThunks';


const SignUp = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const handleRegister = (data) => {
    console.log(data)
    const userData = {
      name: data.name,
      email: data.email,
      gender: data.gender,
      password: data.password,
    }

    dispatch(createAnAccountAsync(userData))
    navigate('/sign-in');
  }

  return (
    <main className="main-signUp">
      <section className="sign-up">
        <h1>Crear cuenta</h1>
        <form className="sign-in__form" onSubmit={handleSubmit(handleRegister)}>
          <div className="custom-input">
            <label htmlFor="name-input" className="input-label">
              Nombre
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Jane Doe"
                id="name-input"
                className="input"
                name="name"
                /* value={formData.name}
                onChange={handleChange} */
                autoComplete="off"
                {...register('name')}
              />
              <FaRegUser className="icon" />
            </div>
          </div>
          <div className="custom-input">
            <label htmlFor="email-input" className="input-label">
              Email
            </label>
            <div className="input-wrapper">
              <label htmlFor="email-input" className="icon">
                <MdOutlineMailOutline />
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                id="email-input"
                className="input"
                name="email"
                /* value={formData.email}
                onChange={handleChange} */
                autoComplete="off"
                {...register('email')}
              />
            </div>
          </div>
          <div className="custom-input">
            <label htmlFor="genre-input" className="input-label">
              Género
            </label>
            <div className="input-wrapper">
              <select
                name="gender"
                id="selected-radio"
                className="input text-300"
                /* value={formData.gender}
                onChange={handleChange} */
                {...register('gender')}
              >
                <option value="female">Femenino</option>
                <option value="male">Masculino</option>
                <option value="nonBinary">No binario</option>
                <option value="agender">Otro</option>
              </select>
              <FaRegHeart className="icon" />
            </div>
          </div>
          <div className="custom-input">
            <label
              htmlFor="password-input"
              className="input-label"
            >
              Contraseña
            </label>
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="***********"
                id="password-input"
                className="input"
                name="password"
                /* value={formData.password}
                onChange={handleChange} */
                {...register('password')}
              />
              <MdOutlineLock className="icon" />
            </div>
          </div>
          <div className="form__buttons-container">
            <button className="form__buttons-container--sign-in" type="submit">
              Crear cuenta
            </button>
          </div>
        </form>
        <p className="smaller">¿Ya tienes cuenta? <Link to='/sign-in'>inicia sesión</Link></p>
      </section>
    </main>
  );
};
export default SignUp;