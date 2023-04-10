import React , {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Mamtismamas from '../public/Image/Mamtismamas.png'

const Header = () => {

  const [open ,setOpen] = useState(false)

  return (
    <>
     <nav className='bg text-white flex sm:justify-start  py-1 '>
     <Link href={"/"} style={{textDecoration: "none"}}> 
     <Image className='pl-10' src={Mamtismamas} alt='Logo' width={150} height={60} />
     </Link> 
            <ul className='px-2 py-7 flex space-x-3 justify-around ml-20 hidden lg:contents    '>
            <Link href={"/about"} style={{textDecoration: "none"}}>  <li className='text-lg mr-5 py-7 pl-20' >ABOUT</li> </Link> 

            <Link href={"/ourchef"} style={{textDecoration: "none"}}>  <li className='text-lg mr-5 py-7'>OUR CHEFS</li> </Link> 

            <Link href={"/"} style={{textDecoration: "none"}}>  <li className='text-lg mr-5 py-7'>FIND A CHEF</li> </Link> 

            <Link href={"/Pricing"} style={{textDecoration: "none"}}>  <li className='text-lg mr-5 py-7'> PRICING</li> </Link> 

            </ul> 

            <ul className=' flex space-x-3 justify-around ml-20 hidden lg:contents'>
             <li className='text-lg pl-20 py-7 pl-[30%]'>   <Link href={"/login"} style={{textDecoration: "none"}}>  Log In </Link> </li>
            <li className='text-lg py-5 pl-4 '>
            <button className='bg-slate-50 px-4 py-2 rounded-3xl green ' > <Link href={"/signup"} style={{textDecoration: "none"}}> SignUp</Link></button>
            </li>
            {/* <li> <img src='/Image/translate.png ' className='ml-2 mt-4' alt='' /></li> */}
            </ul> 
             
           

            <svg className='mt-5 menu-icon ' onClick={()=>setOpen(!open)}  width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11C1 5.47715 5.47715 1 11 1H39C40.1046 1 41 1.89543 41 3V31C41 36.5228 36.5228 41 31 41H3C1.89543 41 1 40.1046 1 39V11Z" fill="white" stroke="black" strokeWidth="0.2"/>
<g filter="url(#filter0_d_170_1751)">
<path d="M8 11H34" stroke="black" strokeWidth="2" strokeLinecap="round"/>
</g>
<g filter="url(#filter1_d_170_1751)">
<path d="M8 21H34" stroke="black" strokeWidth="2" strokeLinecap="round"/>
</g>
<g filter="url(#filter2_d_170_1751)">
<path d="M8 31H34" stroke="black" strokeWidth="2" strokeLinecap="round"/>
</g>
<defs>
<filter id="filter0_d_170_1751" x="3" y="10" width="36" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_170_1751"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_170_1751" result="shape"/>
</filter>
<filter id="filter1_d_170_1751" x="3" y="20" width="36" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_170_1751"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_170_1751" result="shape"/>
</filter>
<filter id="filter2_d_170_1751" x="3" y="30" width="36" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_170_1751"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_170_1751" result="shape"/>
</filter>
</defs>

</svg>

     </nav>

     {
      open ? 
      <ul className='p-2 duration-1000 '  style={{boxShadow: ' rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}>
      <Link href={"/about"} style={{textDecoration: "none"}}>  <li className='text-lg font-medium pb-1 pt-3 ml-10' onClick={()=>setOpen(!open)}>ABOUT</li> </Link> 
 
 <Link href={"/ourchef"} style={{textDecoration: "none"}}>  <li className='text-lg font-medium pb-1 ml-10' onClick={()=>setOpen(!open)}>OUR CHEFS</li> </Link> 
 
 <Link href={"/"} style={{textDecoration: "none"}}>  <li className='text-lg  font-medium ml-10 pb-1 ' onClick={()=>setOpen(!open)}>FIND A CHEF</li> </Link> 
 
 <Link href={"/Pricing"} style={{textDecoration: "none"}}>  <li className='text-lg font-medium pb-1 ml-10' onClick={()=>setOpen(!open)}> PRICING</li> </Link> 
 <div className='ml-7'> 
 <li className='text-lg  '>
             <button className='border-green-800 border-2 px-4 py-[2px] rounded-2xl green ml-2 ' > <Link href={"/login"} onClick={()=>setOpen(!open)} style={{textDecoration: "none"}}> LogIn</Link></button>
             </li>
 <li className='text-lg  '>
             <button className='bg px-3 py-1 mt-2 rounded-2xl text-white ml-2 ' > <Link href={"/signup"} onClick={()=>setOpen(!open)} style={{textDecoration: "none"}}> SignUp</Link></button>
             </li>

            
 </div>
 <div className='mt-3' style={{borderBottom:'4px solid green'}}></div>
      </ul>
      :
      null
     }
   
    </>
  )
}

export default Header
