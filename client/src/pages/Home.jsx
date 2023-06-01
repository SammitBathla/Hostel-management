import React from 'react'
import Banner from '../components/Banner'
import room from '../assets/room.jpg'
import water from '../assets/water.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {MdLocationPin, MdEmail, MdCall, MdAccessTimeFilled} from 'react-icons/md'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useContext } from 'react'
import {Context} from '../utils/context'
import about from '../assets/about.jpg'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'

const Home = () => {
  
  const {handleClick, scrollToRefs} = useContext(Context)
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className=''>
          {scrollPosition > 300 && <div className='fixed top-3/4 right-8 cursor-pointer' onClick={()=>handleClick('ref5')}><BsFillArrowUpCircleFill size={36}/></div>}
          {/* <div className='relative bottom-10 px-16 flex' >
          <motion.span className='text-4xl text-black font-bold w-1/3' variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}>A HOME AWAY FROM HOME</motion.span>
          <motion.span className='pl-32 pr-4 mt-2 text-black underline cursor-pointer' variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}>Explore</motion.span>  <motion.span className='text-black mt-4' variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}><AiOutlineArrowRight /></motion.span>
          </div> */}
          <Banner />
          <div className='' style={{ overflowX: 'hidden' }}>
          <motion.h2 className=' mt-2 mb-12 text-center text-4xl text-purple-500 font-serif underline' variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.7}} ref={scrollToRefs.ref2}>Services</motion.h2>
          <div className='px-10'>
            <div className='grid grid-cols-4 gap-8' style={{ overflowX: 'hidden' }}>
              <motion.div variants={fadeIn('right', 0.05)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.2}}>
                <img src={room} className='rounded-lg'/>
                <p className='text-center'>Spacious Room</p>
                <div className='flex justify-center mt-2'><button className='bg-purple-500 hover:bg-purple-600 px-2 py-1 rounded-md text-white' >Enquire</button></div>
              </motion.div>
              <motion.div variants={fadeIn('right', 0.05)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.2}}>
                <img src={water} className='rounded-lg'/>
                <p className='text-center'>Pure water</p>
                <div className='flex justify-center mt-2'><button className='bg-purple-500 hover:bg-purple-600 px-2 py-1 rounded-md text-white'>Enquire</button></div>
              </motion.div>
              <motion.div variants={fadeIn('right', 0.05)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.2}}>
                <img src={room} className='rounded-lg'/>
                <p className='text-center'>Spacious Room</p>
                <div className='flex justify-center mt-2'><button className='bg-purple-500 hover:bg-purple-600 px-2 py-1 rounded-md text-white'>Enquire</button></div>
              </motion.div>
              <motion.div variants={fadeIn('right', 0.05)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.2}}>
                <img src={water} className='rounded-lg'/>
                <p className='text-center'>Pure water</p>
                <div className='flex justify-center mt-2'><button className='bg-purple-500 hover:bg-purple-600 px-2 py-1 rounded-md text-white'>Enquire</button></div>
              </motion.div>
            </div>
          </div>
          </div> 
          <div>
          <motion.h2 className=' mt-16 mb-12 text-center text-4xl text-purple-500 font-serif underline' variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.7}} ref={scrollToRefs.ref2}>Complaints</motion.h2>
          <div className='px-10'>
          <div className='grid grid-cols-4 gap-8' style={{ overflowX: 'hidden' }}>
              <motion.div variants={fadeIn('right', 0.05)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.2}}>
                <img src={room} className='rounded-lg'/>
                <p className='text-center'>Spacious Room</p>
                <div className='flex justify-center mt-2'><button className='bg-purple-500 hover:bg-purple-600 px-2 py-1 rounded-md text-white'>Enquire</button></div>
              </motion.div>
              <motion.div variants={fadeIn('right', 0.05)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.2}}>
                <img src={water} className='rounded-lg'/>
                <p className='text-center'>Pure water</p>
                <div className='flex justify-center mt-2'><button className='bg-purple-500 hover:bg-purple-600 px-2 py-1 rounded-md text-white'>Enquire</button></div>
              </motion.div>
              <motion.div variants={fadeIn('right', 0.05)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.2}}>
                <img src={room} className='rounded-lg'/>
                <p className='text-center'>Spacious Room</p>
                <div className='flex justify-center mt-2'><button className='bg-purple-500 hover:bg-purple-600 px-2 py-1 rounded-md text-white'>Enquire</button></div>
              </motion.div>
              <motion.div variants={fadeIn('right', 0.05)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.2}}>
                <img src={water} className='rounded-lg'/>
                <p className='text-center'>Pure water</p>
                <div className='flex justify-center mt-2'><button className='bg-purple-500 hover:bg-purple-600 px-2 py-1 rounded-md text-white'>Enquire</button></div>
              </motion.div>
            </div>
          </div>
          </div>
          <div className='mb-24 px-6'>
          <h2 className=' mb-12 mt-36 text-center text-4xl text-purple-500 font-serif underline' ref={scrollToRefs.ref4}>Amenities</h2>
          <div className='px-10'>
            <div className='grid grid-cols-5 gap-32'>
              <div className=''>
                <img src='https://cdn-icons-png.flaticon.com/512/1242/1242477.png?w=740&t=st=1684218534~exp=1684219134~hmac=40acd5fc513c6b4f89a95c3f6d7a262a431589ff35a1b22930cee6644c1e59de' className='rounded-lg opacity-60'/>
                <p className='text-center'>Cupboard</p>
              </div>
              <div className=''>
                <img src='https://cdn-icons-png.flaticon.com/512/1257/1257109.png?w=740&t=st=1684218669~exp=1684219269~hmac=b25d711495327d058179f6779da537085ba478d0caf4e1b5a065b3746bfd4bf6' className='rounded-lg opacity-60'/>
                <p className='text-center'>Bed</p>
              </div>
              <div className=''>
                <img src='https://cdn-icons-png.flaticon.com/512/963/963876.png?w=740&t=st=1684218718~exp=1684219318~hmac=8c291f217d85de7ec5055d907176ba24726c8f4d9666a0fb85f135d7e8f1094e' className='rounded-lg opacity-60'/>
                <p className='text-center'>Table</p>
              </div>
              <div className=''>
                <img src='https://cdn-icons-png.flaticon.com/512/66/66046.png?w=740&t=st=1684218757~exp=1684219357~hmac=662a34956447806230e8bf0374e0052e1dfc7c1eb70e38e710fa5ac5ccb82526' className='rounded-lg opacity-60'/>
                <p className='text-center'>Chair</p>
              </div>
              <div className=''>
                <img src='https://cdn-icons-png.flaticon.com/512/708/708387.png?w=740&t=st=1684218801~exp=1684219401~hmac=319f3291c5b6d1ebc4a09d3196cb869ff8a47c4269b6f0d19b109ef797c0d9d0' className='rounded-lg opacity-60'/>
                <p className='text-center'>Geyser</p>
              </div>
            </div>
          </div>
          </div> 
          <div className='grid grid-cols-2 gap-12'>
            <div className=' pl-16'>
            <h2 className=' mb-12 mt-36 text-center text-4xl text-purple-500 font-serif' ref={scrollToRefs.ref1}>About Us</h2>
            <p>We strive to provide a safe and enjoyable living environment for all students studying at VIT (Vellore Institute of Technology). Our hostels are designed to offer a comfortable and enriching experience during your stay on campus.</p>
            <p>At VIT Hostels, we understand the importance of creating a home away from home. We aim to foster a vibrant community that promotes academic success, personal growth, and memorable experiences. Our dedicated team is committed to ensuring your stay is enjoyable and hassle-free.</p>
            </div>
            <motion.div variants={fadeIn('back', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.5}}>
              <img src={about} width='450px' className='rounded-md ml-12'/>
            </motion.div>
          </div>  
          <div>
          <h2 className=' mb-12 mt-24 text-center text-4xl text-purple-500 font-serif underline' ref={scrollToRefs.ref6}>Gallery</h2>
          <div className='px-10'>
            <div className='grid grid-cols-4 gap-8'>
              <div className=''>
                <img src='https://vit.ac.in/sites/default/files/boys_hostel%20%285%29.JPG' className='rounded-lg'/>                
              </div>
              <div className=''>
                <img src='https://vit.ac.in/sites/default/files/boys_hostel%20%286%29.JPG' className='rounded-lg'/>
              </div>
              <div className=''>
                <img src='https://vit.ac.in/sites/default/files/boys_hostel%20%281%29.JPG' className='rounded-lg'/>
              </div>
              <div className=''>
                <img src='https://vit.ac.in/sites/default/files/boys_hostel%20%283%29.JPG' className='rounded-lg'/>
              </div>
            </div>
          </div>
          </div>     
          <div>
          <h2 className=' mb-12 mt-36 text-center text-4xl text-purple-500 font-serif underline' ref={scrollToRefs.ref7}>Contact Us</h2>
          <div className='mx-32'>
            <div className='grid grid-cols-4 gap-16'>
              <div className='flex flex-col items-center'>
              <MdLocationPin size={48} className='opacity-60'/>  
              <p className='text-center'>Warden Office</p> 
              <p>Men's Indoor stadium, VIT, Katpadi, Vellore, Tamil Nadu</p>
              <p>801456</p>             
              </div>
              <div className='flex flex-col items-center'>
                <MdEmail size={48} className='opacity-60'/>
                <p>General Enquiries</p>
                <p>vithostel@vit.ac.in</p>
              </div>
              <div className='flex flex-col items-center'>
                <MdCall size={48} className='opacity-60'/>
                <p>Call Us</p>
                <p>+91-9876543215</p>
              </div>
              <div className='flex flex-col items-center'>
                <MdAccessTimeFilled size={48} className='opacity-60'/>
                <p>Our Timings</p>
                <p>Mon-Sat : 8:00 AM-8:00 PM</p>
              </div>
            </div>
          </div>
          </div>  
          <Footer />    

    </div>
  )
}

export default Home