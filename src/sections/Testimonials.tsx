'use client'
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import{motion} from 'framer-motion';
import React from "react";

const testimonials = [
  {
    text: "Yesrank's social media strategies boosted our engagement by 300%. Their expertise helped us connect with our audience in ways we never imagined!",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "Marketing Director at HealthPlus",
  },
  {
    text: "Their local SEO services put us on the map—literally! We saw a significant increase in foot traffic and online reservations thanks to Yesrank's tailored strategy. ",
    imageSrc: avatar2.src,
    name: "Raj Patel",
    username: "Owner of Patel's Bistro",
  },
  {
    text: "The team at Yesrank took our PPC campaigns to the next level. We saw a 4x return on our ad spend in just a few months!",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "Founder of Urban Decor Co.",
  },
  {
    text: "Yesrank's SEO strategy increased our organic traffic by 250%. We've seen tremendous growth in lead generation and conversions ever since partnering with them.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "CEO of Tech Innovations",
  },
  {
    text: "From content marketing to social media, Yesrank has been instrumental in driving our brand's digital presence. Their holistic approach has exceeded our expectations!",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "COO at Fashion & Flair",
  },
  {
    text: "Yesrank’s social media strategies grew our follower base by 150%!",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "Head of Sales at PureBeauty",
  },
  {
    text: "Their content marketing attracted high-quality traffic that converted",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "Co-Founder of EventPro",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Our digital visibility skyrocketed with Yesrank’s innovative strategies.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "CEO of GreenTech",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials }) => (
  <div className={props.className}>
  <motion.div animate={{
    translateY:'-50%'
  }}
  transition={{
    duration:8,
    repeat:Infinity,
    ease:'linear',
    repeatType:'loop'
  }}
    className="flex flex-col gap-6 pb-6 "
    
  >
    {[...new Array(2)].fill(0).map((_, index) => (
      <React.Fragment key={index}>
        {props.testimonials.map(({ text, imageSrc, name, username }) => (
          <div className="card" key={name}>
            <div>{text}</div>
            <div className="flex items-center gap-2 mt-5 ">
              <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">{name}</div>
                <div className="leading-5 tracking-tight">{username}</div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    ))}
  </motion.div>
  </div>
);


export const Testimonials = () => {
  return (
    <div className="bg-white pt-24 ">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center">
        <div className="tag">Testimonials</div>
        </div>
        <h2 className="section-title mt-5">What Our Clients Are Saying</h2>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block"  />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block"   />
        </div>
      </div>
    </div>
  );
};
