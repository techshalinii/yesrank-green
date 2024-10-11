'use client'
import Image from "next/image";
import React from "react";
import pyramidImg from '@/assets/pyramid.png'
import star from '@/assets/star.png'
import spring from '@/assets/spring.png'
import helix from '@/assets/helix.png'
import cube from '@/assets/cube-helix 1.png'

const service= [
    {
        title: 'SEO',
        imageSrc: pyramidImg,
        description: 'Boost your organic visibility and attract high-quality traffic.',
    },
    {
        title: 'Local SEO',
        imageSrc: star,
        description: 'Dominate local search and connect with nearby customers.',
    },
    {
        title: 'PPC Advertising',
        imageSrc:spring,
        description: ' Drive immediate traffic with targeted ad campaigns.',
    },
    {
        title: 'Social Media Marketing',
        imageSrc:cube,
        description: 'Engage your audience on platforms they love.',
    },
    {
        title: 'Content Marketing',
        imageSrc:helix,
        description: 'Deliver valuable content that resonates and converts',
    }
]

export const Service = () => {
  return (
    <div className="bg-white  pt-24 ">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center gap-6">
        <div className="tag">Services</div>
        </div>
        <h2 className="section-title mt-5">Your One-Stop Digital Marketing Partner</h2>
        <p className="section-description mt-5">Explore our comprehensive range of services designed to propel your business to new heights in the digital realm.</p></div>
        <div className="flex justify-center gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {service.map(({ title, imageSrc, description }) => (
          <div className="card " key={title}>
            <div className="flex justify-center gap-2 mt-5 ">
            <Image src={imageSrc} alt={title} width={80} height={80} className="h-32 w-32 rounded-full items-center mb-10" /></div>
            <div className="font-bold text-center">{title}</div>
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5 text-center">{description}</div>
              </div>
          </div>
        ))}</div>
        </div>
        </div>
      
    </div>
  );
};