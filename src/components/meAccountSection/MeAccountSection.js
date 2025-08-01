
const MeAccountSection = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col w-[100px]">
          <div className="text-lg font-bold md:text-xl text-textBlue">
            Account
          </div>
          <div className="w-full bg-brandLightGreen rounded-full h-2"></div>
          <div className="text-xs text-textBlue">100%</div>
        </div>
        <div className="flex items-center gap-2 w-[200px]">
          <button className="group relative">
            <img src="/account-icon-1.png" alt="account1" />
            <div className="transition-all absolute top-[-70px] left-0 opacity-0 group-hover:opacity-100 z-[999] pointer-events-none">
              <div className="relative bg-white border-[2px] w-[80px] p-3 text-xs text-textBlue border-brandLightBlue rounded-full before:content-[''] before:absolute before:top-[calc(100%-1px)] before:left-[23px] after:content-[''] after:absolute before:border-[12px] before:border-transparent after:border-[10px] after:border-transparent after:border-[10px] after:top-[calc(100%-1px)] after:left-[25px] after:border-t-white rotate-[10deg] before:!border-t-brandLightBlue">
                <span className="block rotate-[-10deg] flex flex-col leading-[1.2]">
                  <span className="font-bold">Kool Kid</span>
                  <span className="text-[10px]">Buy hot or trending toys</span>
                </span>
              </div>
            </div>
          </button>
          <button className="group relative">
            <img src="/account-icon-2.png" alt="account2" />
             <div className="transition-all absolute top-[-70px] left-0 opacity-0 group-hover:opacity-100 z-[999] pointer-events-none">
              <div className="relative bg-white border-[2px] w-[80px] p-3 text-xs text-textBlue border-brandLightBlue rounded-full before:content-[''] before:absolute before:top-[calc(100%-1px)] before:left-[23px] after:content-[''] after:absolute before:border-[12px] before:border-transparent after:border-[10px] after:border-transparent after:border-[10px] after:top-[calc(100%-1px)] after:left-[25px] after:border-t-white rotate-[10deg] before:!border-t-brandLightBlue">
                <span className="block rotate-[-10deg] flex flex-col leading-[1.2]">
                  <span className="font-bold">Dreamer</span>
                  <span className="text-[10px]">Make 3 wishlists</span>
                </span>
              </div>
            </div>
          </button>
          <button className="group relative">
            <img src="/account-icon-3.png" alt="account3" />
             <div className="transition-all absolute top-[-70px] left-0 opacity-0 group-hover:opacity-100 z-[999] pointer-events-none">
              <div className="relative bg-white border-[2px] w-[80px] p-3 text-xs text-textBlue border-brandLightBlue rounded-full before:content-[''] before:absolute before:top-[calc(100%-1px)] before:left-[23px] after:content-[''] after:absolute before:border-[12px] before:border-transparent after:border-[10px] after:border-transparent after:border-[10px] after:top-[calc(100%-1px)] after:left-[25px] after:border-t-white rotate-[10deg] before:!border-t-brandLightBlue">
                <span className="block rotate-[-10deg] flex flex-col leading-[1.2]">
                  <span className="font-bold">Jacks Pack</span>
                  <span className="text-[10px]">Buy a full wishlist</span>
                </span>
              </div>
            </div>
          </button>
          <button className="group relative">
            <img src="/account-icon-4.png" alt="account4" />
             <div className="transition-all absolute top-[-70px] left-0 opacity-0 group-hover:opacity-100 z-[999] pointer-events-none">
              <div className="relative bg-white border-[2px] w-[80px] p-3 text-xs text-textBlue border-brandLightBlue rounded-full before:content-[''] before:absolute before:top-[calc(100%-1px)] before:left-[23px] after:content-[''] after:absolute before:border-[12px] before:border-transparent after:border-[10px] after:border-transparent after:border-[10px] after:top-[calc(100%-1px)] after:left-[25px] after:border-t-white rotate-[10deg] before:!border-t-brandLightBlue">
                <span className="block rotate-[-10deg] flex flex-col leading-[1.2]">
                  <span className="font-bold">Santa Squad</span>
                  <span className="text-[10px]">Share an Xmas list</span>
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default MeAccountSection