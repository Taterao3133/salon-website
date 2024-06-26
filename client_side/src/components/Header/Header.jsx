

function Header() {
  return (
    <div className="Header  h-[50px] mb-3 bg-[white] ">
        <div className="flex flex-nowrap gap-x-[700px]  h-[52px] ml-[120px] mt-[25px]">
            <div className="leftheader flex flex-nowrap">
                <div className="logo">Logo</div>
                <div className="name">
                    <p>Unique Beauty <span>Salon</span></p>
                </div>
            </div>
            <div className="rightheader flex flex-nowrap ">
                <div className="headerlinks flex flex-nowrap space-x-[46px] mt-2">
                   <p className="  text-[16px]">Home</p>
                   <p className="  text-[16px]">AboutUs</p>
                   <p className="  text-[16px]">Contact Us</p>
                   
                </div>
                <div className="AuthButtons flex flex-nowrap space-x-[20px] ml-[36px]">
                    <p className="bt rounded-md border-[black] border-solid border-[2px] text-center p-[8px] text-[16px] font-bold mb-2">Loggin</p>
                    <p className="bt rounded-md border-[black] border-solid border-[2px] text-center p-[8px] text-[16px] font-bold mb-2">Sign-Up</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header