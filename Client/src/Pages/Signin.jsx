import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoEyeOff, IoEye, IoAlertCircleOutline } from 'react-icons/io5';
import Textbox from '../Components/Textbox';
export const Signin = () => {
  const { user } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (data) => {
    console.log('submit');
    'submit';
  };

  useEffect(() => {
    if (user) navigate(`/profile/${user._id}`);
  }, [user, navigate]);

  return (
    <div className='w-full pt-16 flex place-items-center justify-center flex-col'>
      <div className='w-full md:w-auto flex gap-0 flex-col items-center justify-center'>

        <p className='w-full md:w-[400px] flex flex-col gap-0  pb-3 text-4xl lg:text-5xl 2xl:text-5xl font-semibold text-center text-[#FF5757]'><span>Welcome to Outfitty</span></p>
        <span className='pb-10 text-gray-500 font-semibold'>Find Your Style, Flaunt Your Confidence</span>

        <form onSubmit={handleSubmit(submitHandler)} className='form-container w-full md:w-[400px] flex flex-col gap-y-4 bg-white px-10'>

          <div className='flex flex-col '>
            <label className='pl-2 pb-1 text-gray-900'>Email</label>

            <Textbox
              placeholder="Email"
              type="email"
              name='email'
              className='w-full rounded-md'
              register={register("email", { required: 'Email address is required' })}
              error={errors.email ? errors.email.message : ''}
            />
          </div>

          <div className='flex flex-col relative'>
            <label className='pl-2 pb-1 text-gray-900'>Password</label>
            <Textbox
              placeholder="Create a password"
              type={showPassword ? "text" : "password"}
              name='password'
              className='w-full rounded-md'
              register={register("password", {
                required: 'Password is required', pattern: {
                  value: /^[A-Za-z0-9]{8,}$/,
                  message: "Password must contain at least 8 characters (letters and/or digits)"
                }
              })}
              error={errors.password ? errors.password.message : ''}
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-5 top-11 text-gray-500 hover:text-[#FF5757] '>
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-row gap-2'>
              <label className='pl-2 pb-1 text-gray-900'>Birthdate</label>
              <IoAlertCircleOutline
              />
            </div>

            <Textbox
              type="date"
              name='birthdate'
              className='w-full rounded-md '
              register={register("birthdate", { required: 'Your birthdate is required' })}
              error={errors.birthdate ? errors.birthdate.message : ''}
            />
          </div>
          <button
            type='submit'
            value='Submit'
            className='w-full h-10 font-semibold text-lg bg-[#FF5757] rounded-md border text-white'>Continue</button>

          <span className='text-center  text-sm text-gray-700'>
            By continuing, you agree to Outfitty's <Link to={"/terms-of-service"} className='underline hover:text-[#FF5757] font-semibold'>Terms of Service</Link> and acknowledge you've read our <Link className='underline font-semibold hover:text-[#FF5757]' to={"/privacy-policy"}>Privacy Policy</Link>
            . </span>


          <div className='flex flex-col items-center gap-y-3 '>
            <div className='border w-60 border-b-0'></div>
            <Link to={"/log-in"}>
              <span className='text-sm text-gray-700 font-semibold'>Already a member?
                Log in</span></Link>

          </div>
        </form>
      </div>
    </div>
  )
}
