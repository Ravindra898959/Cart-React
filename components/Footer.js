import React from 'react'

const Footer = () => {
  return (
    <>
     <section>
<div className='grid grid-cols-2  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-5 bg p-5'>

<div className='hidden lg:contents  '>
  <img className='pt-10 ml-[80px] ' src='/Image/Mamtismamas.png' alt='Logo' width={120} height={60}  />
  </div>

 
<div>
<p className='text-xl  mb-6 white-text'> Service</p>
 <p className='text-base  mb-3 white-text'>Become a chef</p>
 <p className='text-base  mb-3 white-text'>Careers</p>
 <p className='text-base  mb-3 white-text'>About Us</p>
 <p className='text-base  mb-5 white-text'>Contact Us</p>
</div>

<div>
<p className='text-xl  mb-6 white-text' > Company</p>
 <p className='text-base  mb-3 white-text'>How It Work</p>
 <p className='text-base  mb-3 white-text'>Meet Our Team</p>
 <p className='text-base  mb-5 white-text'>Find Your Chef</p>
 
</div>

<div>
<p className='text-xl  mb-6 white-text'> Help & Support</p>
 <p className='text-base  mb-3 white-text'>FAQ</p>
 <p className='text-base  mb-3 white-text'>Chef’s FAQ</p>
 <p className='text-base  mb-3 white-text'>Privacy Policy</p>
 <p className='text-base  mb-5 white-text'>Terms & Condition</p>
</div>

<div>
<p className='text-xl  mb-6 white-text'> FOLLOW</p>

<div className='flex '>
<img className='mr-5'  src="/Image/Facebook.png"  alt="facebook" height={35} width={35} />

<img className='mx-5' src="/Image/Skype.png"  alt="Skype" height={35} width={35} />

<img className='mx-5' src="/Image/LinkedIn.png"  alt="Linkedin" height={35} width={35} />

</div>

</div>





</div>
</section> 
    </>
  )
}

export default Footer
