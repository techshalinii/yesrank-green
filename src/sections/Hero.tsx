'use client';
import cogImage from '@/assets/cog-g.png'
import cylinderImage from '@/assets/cylinder1.png';
import noodleImage from '@/assets/half.png'
import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion'
import {useRef} from 'react';
import saly from '@/assets/Saly.png'
import sphere from '@/assets/sphere.png'
import Image from 'next/image';

export const Hero = () => {


  
  const heroRef = useRef(null);
  const{scrollYProgress} = useScroll({
    target:heroRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  return (
    <div id='home' ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#06D6A0,#EAEEFE_100%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
        <div className='md:w-[478px]'>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#02382A] text-transparent bg-clip-text mt-6">Accelerate Your Business Growth</h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
          Partner with Yesrank for innovative digital marketing strategies that drive exceptional ROI and measurable success
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get a Free Consultation</button>
          </div>
        </div>
        <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
          <Image 
          src={sphere} 
          alt="cog image" 
          className='md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0 opacity-50'
         layout="responsive"
          />
          <motion.img 
          src={saly.src} 
          alt="cog image" 
          className='md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0'
          animate={{translateY: [-30, 30],}}
          transition={{
            repeat: Infinity,
            repeatType:'mirror',
            duration: 3,
            ease: 'easeInOut'
          }}
          
          />
          <motion.img 
          src={cylinderImage.src} 
          width={220} height={220} 
          alt='Cylinder image' 
          className='hidden md:block -top-8 -left-32 md:absolute'
          style={{
            translateY: translateY
          }} 
          />
          <motion.img  
          src={noodleImage.src} 
          alt='img' 
          width={220} 
          className='hidden lg:block absolute top-[640px] left-[448px] rotate-[31deg]'
          style={{
            rotate:30,
            translateY: translateY}} 
          />
        </div>
        </div>
      </div>
    </div>
  );
};
