//import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useLocation } from 'react-router-dom'

export default function NavBar() {
  //const location = useLocation()
  //const currentUrl = location.pathname.substring(1)

  const { isLoggedIn, logout } = useAuth()

  const askAiLink = isLoggedIn ? '/ask-ai' : '#'

  const location = useLocation()

  return (
    <div className="bg-white w-[100%] h-[65px] fixed top-0 left-0 flex justify-center align-center z-50">
      <div className="flex justify-between items-center w-[1152px]">
        <a href="/" className="flex justify-center align-center ml-[32px]">
          <img src="/giec.png" className="h-[60px] w-auto" />
        </a>
        <div className="flex justify-center items-center h-[40px]">
          <a
            className="flex justify-center items-center text-center py-[14px] px-[20px] h-[100%] relative hover:text-green-400 hover:underline b"
            href="/data"
          >
            <p className="font-normal">Data</p>
          </a>
          <a
            className="flex justify-center items-center text-center py-[14px] px-[20px] h-[100%] relative hover:text-green-400 hover:underline  ml-[32px]"
            href="/query"
          >
            <p className="font-normal">Query</p>
          </a>
          <a
            className={
              isLoggedIn
                ? 'flex justify-center items-center text-center py-[14px] px-[20px] h-[100%] relative hover:underline  ml-[32px]'
                : 'flex justify-center items-center text-center py-[14px] px-[20px] h-[100%] relative text-gray-400  ml-[32px]'
            }
            href={askAiLink}
          >
            <p className="font-normal">Ask ai</p>
          </a>
          {!isLoggedIn ? (
            <a
              className="flex justify-center items-center text-center h-[40px] w-[128px] relative bg-[#008037] text-white rounded-[4px] mr-[64px] hover:text-green-400 hover:underline ml-[32px]"
              href="/account"
            >
              <p>Login</p>
            </a>
          ) : (
            <button
              className=" text-center h-[40px] w-[128px] relative bg-[#008037] text-white rounded-[4px] mr-[64px] hover:text-green-400 hover:underline ml-[32px] "
              onClick={() => logout()}
            >
              <p className="text-white">Logout</p>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
