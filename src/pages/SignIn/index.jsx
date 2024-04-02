import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginWithEmailAndPassword } from '../../store/users/userThunks'
import { MdOutlineMailOutline, MdOutlineLock } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import './styles.sass';


const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((store) => store.user);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLoginWithEmailAndPassword = ( userData ) => {
    dispatch(loginWithEmailAndPassword(userData))
  }

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: 'Ooops!',
        text: 'Ha ocurrido un error, por favor verifique sus credenciales',
        icon: 'error'
      })
    } 
    if (error === false) { /** esta pasando derecho sin entrar aca  */
      Swal.fire({
        title: `Bienvenido ${user?.name}`,
        text: 'Has iniciado sesión exitosamente',
        icon: 'success'
      })
    }
  }, [error])

  return (
    <main className='sign-in'>
  <section className='sign-in__formWrapper'>
    <h2 className='sign-in__formWrapper--titleSignIn'>Iniciar sesión</h2>
    <form className='form'  onSubmit={handleSubmit(handleLoginWithEmailAndPassword)}>
      <div className='form__input-group'>
        <div className='custom-input'>
          <label htmlFor='email-input' className='input-label'>
            Email
          </label>
          <div className='input-wrapper'>
            <input
              type='email'
              placeholder='example@email.com'
              id='email-input'
              className='input'
              autoComplete='off'
              {...register('email', { required: 'Correo electrónico requerido' })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            <MdOutlineMailOutline className="icon" />
          </div>
          {errors.email && <p className='text-rose-500' role='alert'>{errors.email.message}</p>}
        </div>
        <div className='custom-input'>
          <label htmlFor='password-input' className='input-label'>
            Contraseña
          </label>
          <div className='input-wrapper'>
            <input
              type='password'
              placeholder='***********'
              id='password-input'
              className='input'
              {...register('password', { required: true, minLength: 8 })}
            />
             <MdOutlineLock className="icon" />
          </div>
          {errors.password && <p className='text-rose-500' role='alert'>La contraseña debe tener al menos 8 caracteres</p>}
        </div>
      </div>
      <div className='form__buttons-container'>
        <button className='form__buttons-container--sign-in' type='submit'>
          Iniciar sesión
        </button>
        {/* <button className='form__buttons-container--google flex'>
          <span>Google</span>
          <span>
            <FcGoogle />
          </span>
        </button>
        <button className='form__buttons-container--phone' onClick={() => navigate('/sign-in-phone')}>
          <FiPhone />
        </button> */}
      </div>
    </form>
    <p className='smaller'>¿No tienes cuenta? <Link to='/sign-up'>crea una cuenta</Link></p>
  </section> 
</main>

  );
};

export default SignIn;