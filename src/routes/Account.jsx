import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//https://www.npmjs.com/package/react-toastify
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Account() {
  const navigate = useNavigate()
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { username, password } = data
    try {
      setIsLoggingIn(true)
      axios.post('http://localhost:3000/api/creds', { username, password })
      navigate('/')
      toast.success('Login successful 👌')
    } catch (err) {
      toast.error('Login rejected 🤯')
    } finally {
      setIsLoggingIn(false)
    }

    const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000))
    toast.promise(resolveAfter3Sec, {
      pending: 'Attempting to login user ' + data.username,
      success: 'Login successful 👌',
      error: 'Login rejected 🤯',
    })
  }

  return (
    <div className="bg-white rounded-xl w-[900px] flex justify-between items-center p-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full p-6 justify-center items-center "
      >
        <h1 className="text-black font-bold ">Welcome back !</h1>
        <p className="text-gray-500 pb-10 pl-1">
          Please enter credentials to login.
        </p>
        <div className="flex  flex-col gap-3">
          <div className="flex ">
            <label className="bg-[#36AD56] rounded-l-md w-[70px] h-[56px] flex justify-center items-center">
              <img className="w-5 h-5 " src="/user-icon.png"></img>
            </label>
            <input
              className="rounded-r-md w-full p-4 bg-white text-black border  h-[56px] border-[#36AD56]"
              placeholder="Username"
              required
              type="text"
              {...register('username')}
            />

            {errors.username && <span>{errors.username.message}</span>}
          </div>

          <div className="flex  rounded-md">
            <label className=" bg-[#36AD56] rounded-l-md  w-[70px] h-[56px]  flex justify-center items-center">
              <img className="w-5 h-5" src="/lock-icon.png"></img>
            </label>
            <input
              className="rounded-r-md  w-full p-4 bg-white h-[56px]  text-black border border-[#36AD56]"
              type="password"
              {...register('password')}
              placeholder="Password"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button
            className=" h-12 w-[450px] text-white bg-[#36AD56] rounded-md hover:bg-green-700 text-l"
            type="submit"
          >
            {isLoggingIn ? 'Logging in...' : 'Log In'}
          </button>
        </div>
      </form>
      <img
        className=" w-[372px] rounded-r-xl"
        src="/login.png"
        alt="Login illustration"
      />
    </div>
  )
}
