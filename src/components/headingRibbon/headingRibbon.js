
const HeadingRibbon = ({children, fullWidth}) => {
  return (
    <>
        <svg className='invisible absolute' width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="round"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="round" />
                    <feComposite in="SourceGraphic" in2="round" operator="atop"/>
                </filter>
            </defs>
        </svg>
        
        <div className={`${fullWidth ? 'w-full' : 'inline-block'} ribbon bg-brandRed px-20 text-center text-xl font-bold text-white p-inline-[3.8em] py-2 leading-[1.8]`}>
            {children}
        </div>
    </>
  )
}

export default HeadingRibbon