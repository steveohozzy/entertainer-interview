import { useState } from "react"

import Button from "../button/Button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const AccountPopUp = () => {
  const [popUpShown, setPopUpShown] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const handleAccountPopUp = () => {
    setPopUpShown(!popUpShown);
  }

  const handleEmailChange = (e) => {
    setEmail(!e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(!e.target.value);
  }

  return (
    <>
    {!signedIn ? (
      <button
        onClick={handleAccountPopUp}
          className="transition-all hover:text-brandLightBlue md:flex items-center ml-4 text-sm group w-[122px]"
        >
          <span className="mr-1 transition-all transition-duration-500 group-hover:rotate-[20deg]">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.37 2.37C3.95 0.79 5.86 0 8.11 0C10.36 0 12.27 0.79 13.85 2.37C15.43 3.95 16.22 5.86 16.22 8.11C16.22 10.36 15.43 12.27 13.85 13.85C12.27 15.43 10.36 16.22 8.11 16.22C5.86 16.22 3.95 15.43 2.37 13.85C0.79 12.27 0 10.36 0 8.11C0 5.86 0.79 3.95 2.37 2.37ZM8.11 14.38C10.05 14.38 11.64 13.64 12.88 12.16C12.57 11.57 12.14 11.1 11.57 10.74C11 10.38 10.37 10.2 9.67 10.2C9.61 10.2 9.53 10.21 9.44 10.23C8.98 10.38 8.54 10.46 8.1 10.46C7.66 10.46 7.22 10.38 6.76 10.23C6.67 10.21 6.6 10.2 6.53 10.2C5.83 10.2 5.2 10.38 4.63 10.74C4.06 11.1 3.63 11.57 3.32 12.16C4.56 13.64 6.15 14.38 8.09 14.38H8.11ZM10.14 3.99C9.57 3.42 8.9 3.14 8.11 3.14C7.32 3.14 6.65 3.42 6.08 3.99C5.51 4.56 5.23 5.23 5.23 6.02C5.23 6.81 5.51 7.48 6.08 8.05C6.65 8.62 7.32 8.9 8.11 8.9C8.9 8.9 9.57 8.62 10.14 8.05C10.71 7.48 10.99 6.81 10.99 6.02C10.99 5.23 10.71 4.56 10.14 3.99Z" />
            </svg>
          </span>
          Register/Sign in
        </button>
      ) : (
        <Link className="transition-all hover:text-brandLightBlue md:flex items-center ml-4 text-sm group w-[122px] group flex" to='/account'>
          <span>Hi Jack!</span>
          <span className="transition-all text-brandLightBlue ml-1 rotate-[10deg] group-hover:rotate-[25deg]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="22" height="22" viewBox="-32 0 512 512"><path d="M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007 209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z"/></svg>
          </span>
        </Link>
      )
    }
    {popUpShown &&
      <div className="fixed h-screen top-0 left-0 inset-0 z-50 md:bg-brandBlue/60">
        <div className="absolute left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-3 border bg-white p-3 pb-6 shadow-lg sm:rounded-lg max-w-[320px] max-h-[90vh] overflow-y-auto">
          {!signedIn ? (
            <>
              <div className="relative flex flex-col gap-2">
                <button
                  name="Close quick view"
                  onClick={handleAccountPopUp}
                  className="absolute right-0 top-0 text-textBlue rounded-full border-[2px] border-textBlue z-[2]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x h-5 w-5"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <span className="sr-only">Close</span>
                </button>
                <div className="text-textBlue font-bold text-lg mb-2">Existing Customer?</div>
                <form id="address-form">
                <div className={`flex h-[40px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${email && 'border-red-600'}`}>
                    <input type="email" placeholder="Email" onChange={handleEmailChange} onBlur={handleEmailChange} className="peer text-base m-0 block h-[32px] w-full bg-transparent text-textBlue transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                    <label className="px-3 pointer-events-none absolute left-0 top-[2px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-brandBlue motion-reduce:transition-none">Email</label>
                    <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                      <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className={`flex mt-5 h-[40px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${password && 'border-red-600'}`}>
                    <input type={`${showPassword ? 'text' : 'password'}`} placeholder="Password" onChange={handlePasswordChange} onBlur={handlePasswordChange} className="peer text-base m-0 block h-[32px] w-full bg-transparent text-textBlue transition duration-200 ease-linear placeholder:text-transparent focus:outline-none pr-[70px]" />
                    <label className="px-3 pointer-events-none absolute left-0 top-[2px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-brandBlue motion-reduce:transition-none">Password</label>
                    <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                      <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                      </svg>
                    </span>
                    <button className="text-gray-400 white absolute right-10 top-2 text-xs border-l-[3px] pl-1" onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword)}}>
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <button className="text-textBlue text-sm mt-2" onClick={(e) => e.preventDefault()}>
                    Forgot password?
                  </button>
                </form>
                <Button
                  className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-1'
                  onClick={() => setSignedIn(true)}
                  iconpath={
                    <svg xmlns="http://www.w3.org/2000/svg" className="rotate-[20deg]" fill="currentColor" width="16" height="16" viewBox="0 0 60 60"><defs></defs><path class="cls-1" d="M794,356h32a4,4,0,0,1,4,4v26a4,4,0,0,1-4,4H794a4,4,0,0,1-4-4V360A4,4,0,0,1,794,356Zm18,17.445V378a2,2,0,0,1-4,0v-4.555A4,4,0,1,1,812,373.445ZM796,352v-6a10,10,0,0,0-20,0v6h-6v-6a16,16,0,0,1,32,0v6h-6Z" id="unlock" transform="translate(-770 -330)"/></svg>
                                }
                >
                  Login
                </Button>
              </div>
              <div className="relative flex justify-center text-gray-400 text-sm after:block after:content[''] after:w-full after:h-[2px] after:absolute after:bg-gray-300 after:top-1/2">
                <span className="block bg-white mt-2 px-3 z-20">Or</span>
              </div>
              <div className="text-textBlue font-bold text-lg">New to The Entertainer?</div>
              <p className="text-sm text-textBlue">Register to gain perks when shopping with us</p>
              <Button
                  className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold rounded-[30px] bg-brandBlue text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-textBlue hover:scale-105 mt-2'
                  link='/account'
                  iconpath={
                    <svg xmlns="http://www.w3.org/2000/svg" className="rotate-[20deg]" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5H9C7.11438 5 6.17157 5 5.58579 5.58579C5 6.17157 5 7.11438 5 9V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V12M9.31899 12.6911L15.2486 6.82803C15.7216 6.36041 16.4744 6.33462 16.9782 6.76876C17.5331 7.24688 17.5723 8.09299 17.064 8.62034L11.2329 14.6702L9 15L9.31899 12.6911Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                >
                  Find out more
                </Button>
              </>
              ) : (
                <>
                  <div className="flex justify-between pr-8">
                    <button
                      name="Close quick view"
                      onClick={handleAccountPopUp}
                      className="absolute right-2 top-2 text-textBlue rounded-full border-[2px] border-textBlue z-[2]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x h-5 w-5"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <span className="sr-only">Close</span>
                    </button>
                    <div>
                      <div className="text-lg text-textBlue">Hello Jack!</div>
                      <div className="text-lg text-textBlue">Welcome to your Account</div>
                    </div>
                    <div className="text-brandLightBlue rotate-[20deg] flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="22" height="22" viewBox="-32 0 512 512"><path d="M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007 209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z"/></svg>
                      <Star className="w-2 h-2" fill="currentColor" />
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-3 py-3">
                    <Link
                                to="/account"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg bg-brandBlue text-brandLightblue rounded-full  p-2 flex items-center justify-center">
                                  <svg
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#deeeee"
                                  >
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      {" "}
                                      <path d="M0 0h48v48H0z" fill="none"></path>{" "}
                                      <g id="Shopicon">
                                        {" "}
                                        <path d="M33.843,26.914L24,36l-9.843-9.086C8.674,30.421,5,36.749,5,44h38C43,36.749,39.326,30.421,33.843,26.914z"></path>{" "}
                                        <path d="M24,28c3.55,0,6.729-1.55,8.926-4C34.831,21.876,36,19.078,36,16c0-6.627-5.373-12-12-12S12,9.373,12,16 c0,3.078,1.169,5.876,3.074,8C17.271,26.45,20.45,28,24,28z"></path>{" "}
                                      </g>{" "}
                                    </g>
                                  </svg>
                                </span>
                                Login
                              </Link>
                              <Link
                                to="/account"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2  flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <g
                                      id="SVGRepo_bgCarrier"
                                      stroke-width="0"
                                      transform="matrix(16.940857, 0, 0, 16.940857, 19.580658, 5.832413)"
                                    />
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      transform="matrix(16.940857, 0, 0, 16.940857, 19.580658, 5.832413)"
                                    />
                                    <g
                                      id="SVGRepo_iconCarrier"
                                      transform="matrix(16.940857, 0, 0, 16.940857, 19.580658, 5.832413)"
                                    >
                                      <g transform="matrix(1.347268, 0, 0, 1.347268, -2.692593, -1.600651)">
                                        <path
                                          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                                          stroke="currentColor"
                                          fill="#deeeee"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M 11 4 L 6 4 C 4.939 4 3.922 4.421 3.172 5.171 C 2.421 5.921 2 6.939 2 8 L 2 18 C 2 19.061 2.421 20.078 3.172 20.828 C 3.922 21.578 4.939 22 6 22 L 17 22 C 19.21 22 20 20.2 20 18 L 20 13"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                                Register
                              </Link>
                              <Link
                                to="/category"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-1 flex items-center justify-center text-s">
                                  <Star className="h-7 w-7" fill="currentColor" />
                                </span>
                                New
                              </Link>
                              <Link
                                to="/category"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2 flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                      fill="currentColor"
                                      d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
                                    />
                                    <rect width="24" height="24" fill="none" />
                                  </svg>
                                </span>
                                Outdoor
                              </Link>
                              <Link
                                to="/category"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width=" 22"
                                    height=" 22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M21.4143 3.29285C21.8048 3.68337 21.8048 4.31653 21.4143 4.70706L4.70718 21.4142C4.31666 21.8047 3.68349 21.8047 3.29297 21.4142L2.58586 20.7071C2.19534 20.3165 2.19534 19.6834 2.58586 19.2928L19.293 2.58574C19.6835 2.19522 20.3167 2.19522 20.7072 2.58574L21.4143 3.29285Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M7.50009 2.99997C5.5671 2.99997 4.00009 4.56697 4.00009 6.49997C4.00009 8.43297 5.5671 9.99997 7.50009 9.99997C9.43309 9.99997 11.0001 8.43297 11.0001 6.49997C11.0001 4.56697 9.43309 2.99997 7.50009 2.99997Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M16.5001 14C14.5671 14 13.0001 15.567 13.0001 17.5C13.0001 19.433 14.5671 21 16.5001 21C18.4331 21 20.0001 19.433 20.0001 17.5C20.0001 15.567 18.4331 14 16.5001 14Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                Clearance
                              </Link>
                              <a
                                href="https://theentertainer.zendesk.com/hc/en-gb"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width=" 22"
                                    height=" 22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M9.03429 5.96305L6.49114 8.49856C6.02369 8.9646 5.59488 9.3921 5.25624 9.77856C5.03877 10.0267 4.82145 10.2984 4.63737 10.5985L4.61259 10.5738C4.56555 10.5269 4.54201 10.5034 4.51839 10.4805C4.07636 10.0516 3.55641 9.71062 2.98636 9.47575C2.9559 9.4632 2.92498 9.45095 2.86314 9.42645L2.48449 9.27641C1.97153 9.07315 1.83482 8.41279 2.22514 8.02365C3.34535 6.90684 4.69032 5.56594 5.33941 5.29662C5.91185 5.05911 6.53023 4.98008 7.12664 5.06822C7.67311 5.14898 8.19006 5.42968 9.03429 5.96305Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.3767 19.3132C13.5816 19.5212 13.7177 19.6681 13.8408 19.8251C14.0031 20.0322 14.1483 20.2523 14.2748 20.4829C14.4172 20.7426 14.5278 21.02 14.749 21.5748C14.929 22.0265 15.5272 22.1459 15.8746 21.7995L15.9586 21.7157C17.0788 20.5988 18.4237 19.2579 18.6938 18.6108C18.9321 18.04 19.0113 17.4235 18.9229 16.8289C18.8419 16.2841 18.5605 15.7688 18.0256 14.9273L15.474 17.4713C14.9959 17.9479 14.5576 18.385 14.1612 18.7273C13.9236 18.9325 13.6637 19.1376 13.3767 19.3132Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.4467 16.3769L20.2935 10.5476C21.1356 9.70811 21.5566 9.28836 21.7783 8.75458C22.0001 8.22081 22.0001 7.62719 22.0001 6.43996V5.87277C22.0001 4.04713 22.0001 3.13431 21.4312 2.56715C20.8624 2 19.9468 2 18.1157 2H17.5468C16.356 2 15.7606 2 15.2252 2.2211C14.6898 2.4422 14.2688 2.86195 13.4268 3.70146L7.57991 9.53078C6.59599 10.5117 5.98591 11.12 5.74966 11.7075C5.67502 11.8931 5.6377 12.0767 5.6377 12.2692C5.6377 13.0713 6.2851 13.7168 7.57991 15.0077L7.75393 15.1812L9.79245 13.1123C10.0832 12.8172 10.558 12.8137 10.8531 13.1044C11.1481 13.3951 11.1516 13.87 10.8609 14.1651L8.8162 16.2403L8.95326 16.3769C10.2481 17.6679 10.8955 18.3133 11.7 18.3133C11.8777 18.3133 12.0478 18.2818 12.2189 18.2188C12.8222 17.9966 13.438 17.3826 14.4467 16.3769ZM17.1935 9.5312C16.435 10.2874 15.2053 10.2874 14.4468 9.5312C13.6883 8.775 13.6883 7.54895 14.4468 6.79274C15.2053 6.03653 16.435 6.03653 17.1935 6.79274C17.952 7.54895 17.952 8.775 17.1935 9.5312Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                Discover
                              </a>
                              <Link to="/#toy-types"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="37"
                                    height="50"
                                    viewBox="0 0 37 50"
                                    fill="none"
                                  >
                                    <path
                                      d="M18.5547 32.5V23.75H22.0547V37.75C22.0547 38.224 21.8724 38.625 21.5078 38.9531C21.1797 39.3177 20.7786 39.5 20.3047 39.5H6.30469C5.83073 39.5 5.41146 39.3177 5.04688 38.9531C4.71875 38.625 4.55469 38.224 4.55469 37.75V23.75H8.05469V32.5H18.5547ZM35.7812 19.2656C36.1458 19.849 36.1641 20.4505 35.8359 21.0703C35.5078 21.6901 34.9974 22 34.3047 22H2.80469C2.11198 22 1.60156 21.6901 1.27344 21.0703C0.945312 20.4505 0.981771 19.849 1.38281 19.2656L6.03125 12.2656C6.35938 11.7552 6.83333 11.5 7.45312 11.5H29.6562C30.276 11.5 30.75 11.7552 31.0781 12.2656L35.7812 19.2656ZM29.0547 38.625V23.75H32.5547V38.625C32.5547 38.8802 32.4635 39.0807 32.2812 39.2266C32.1354 39.4089 31.9349 39.5 31.6797 39.5H29.9297C29.6745 39.5 29.4557 39.4089 29.2734 39.2266C29.1276 39.0807 29.0547 38.8802 29.0547 38.625Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                Toy Types
                              </Link>
                              <Link to="/#age"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2  flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    class="si-glyph si-glyph-birthday-cake"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="currentColor">
                                        <path
                                          d="M2.002,13.062 L2.002,14.169 C2.002,15.474 1.895,15.944 3.484,15.944 L12.394,15.944 C13.982,15.944 13.874,15.473 13.874,14.169 L13.874,13.062 L2.002,13.062 L2.002,13.062 Z"
                                          class="si-glyph-fill"
                                        ></path>
                    
                                        <rect
                                          x="4"
                                          y="3"
                                          width="0.935"
                                          height="3.072"
                                          class="si-glyph-fill"
                                        ></rect>
                    
                                        <rect
                                          x="7"
                                          y="3"
                                          width="1"
                                          height="2.969"
                                          class="si-glyph-fill"
                                        ></rect>
                    
                                        <rect
                                          x="11"
                                          y="3"
                                          width="0.99"
                                          height="2.851"
                                          class="si-glyph-fill"
                                        ></rect>
                    
                                        <path
                                          d="M4.965,0.975 C5.065,1.381 4.907,1.848 4.528,1.89 C4.174,1.93 3.903,1.473 4.175,1.02 C4.454,0.56 4.528,0.06 4.528,0.06 C4.528,0.06 4.848,0.487 4.965,0.975 L4.965,0.975 Z"
                                          class="si-glyph-fill"
                                        ></path>
                    
                                        <path
                                          d="M7.938,1.021 C8.043,1.447 7.877,1.939 7.469,1.983 C7.088,2.025 6.797,1.544 7.091,1.069 C7.391,0.584 7.469,0.059 7.469,0.059 C7.469,0.059 7.811,0.509 7.938,1.021 L7.938,1.021 Z"
                                          class="si-glyph-fill"
                                        ></path>
                    
                                        <path
                                          d="M11.974,1.023 C12.086,1.449 11.908,1.939 11.476,1.983 C11.072,2.025 10.762,1.545 11.075,1.07 C11.394,0.587 11.476,0.062 11.476,0.062 C11.476,0.062 11.839,0.512 11.974,1.023 L11.974,1.023 Z"
                                          class="si-glyph-fill"
                                        ></path>
                    
                                        <g transform="translate(2.000000, 6.000000)">
                                          <path
                                            d="M1.146,2.437 C1.561,2.437 2.162,2.043 2.339,1.905 C2.344,1.899 3.066,1.221 3.941,1.221 C4.812,1.221 5.564,1.893 5.595,1.922 C5.757,2.062 6.293,2.437 6.769,2.437 C7.331,2.437 7.877,1.932 7.877,1.932 C7.917,1.894 8.664,1.221 9.565,1.221 C10.47,1.221 11.191,1.899 11.221,1.928 C11.382,2.066 11.685,2.269 11.958,2.37 C11.927,1.069 11.329,0.03 9.782,0.03 L2.259,0.03 C0.868,0.03 0.241,0.867 0.105,1.979 C0.33,2.146 0.793,2.437 1.146,2.437 L1.146,2.437 Z"
                                            class="si-glyph-fill"
                                          ></path>
                    
                                          <path
                                            d="M10.717,3.469 C10.699,3.453 10.16,2.95 9.566,2.95 C8.967,2.95 8.401,3.457 8.394,3.463 C8.368,3.486 7.643,4.163 6.77,4.163 C5.905,4.163 5.129,3.496 5.096,3.467 C4.933,3.321 4.414,2.95 3.942,2.95 C3.38,2.95 2.838,3.453 2.831,3.457 C2.716,3.549 1.899,4.163 1.147,4.163 C0.761,4.163 0.375,4.004 0.077,3.838 L0.077,5.945 L11.966,5.945 L11.966,4.131 C11.355,4.004 10.789,3.53 10.717,3.469 L10.717,3.469 Z"
                                            class="si-glyph-fill"
                                          ></path>
                                        </g>
                    
                                        <rect
                                          x="0"
                                          y="14"
                                          width="15.851"
                                          height="1.935"
                                          class="si-glyph-fill"
                                        ></rect>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                                Age
                              </Link>
                              <Link to="/#brands"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2  flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width=" 22"
                                    height=" 22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M1.94971 4.44987C1.94969 3.06915 3.06898 1.94985 4.4497 1.94984L12.0209 1.94983C12.8165 1.94983 13.5796 2.2659 14.1422 2.82851L22.0417 10.728C23.6038 12.2901 23.6038 14.8228 22.0417 16.3849L16.3848 22.0417C14.8227 23.6038 12.2901 23.6038 10.728 22.0417L2.82846 14.1422C2.26586 13.5796 1.94979 12.8166 1.94978 12.0209L1.94971 4.44987ZM8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                Brands
                              </Link>
                              <Link to="/#top-picks"
                                className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs "
                              >
                                <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2  flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.0"
                                    id="Layer_1"
                                    viewBox="0 0 64 64"
                                    enable-background="new 0 0 64 64"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M60,4H48c0-2.215-1.789-4-4-4H20c-2.211,0-4,1.785-4,4H4C1.789,4,0,5.785,0,8v8c0,8.836,7.164,16,16,16  c0.188,0,0.363-0.051,0.547-0.059C17.984,37.57,22.379,41.973,28,43.43V56h-8c-2.211,0-4,1.785-4,4v4h32v-4c0-2.215-1.789-4-4-4h-8  V43.43c5.621-1.457,10.016-5.859,11.453-11.488C47.637,31.949,47.812,32,48,32c8.836,0,16-7.164,16-16V8C64,5.785,62.211,4,60,4z   M8,16v-4h8v12C11.582,24,8,20.414,8,16z M56,16c0,4.414-3.582,8-8,8V12h8V16z"
                                    />
                                  </svg>
                                </span>
                                Top Picks
                              </Link>
                  </div>
                </>
              )
            }
        </div>
      </div>
    }
  </>
)
}

export default AccountPopUp