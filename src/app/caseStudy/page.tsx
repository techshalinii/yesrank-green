'use client'
import Image from "next/image";
import React from "react";
import stella from '@/assets/StellarTech.png'
import tech from '@/assets/Tech.png'
import urban from '@/assets/Urban.png'
import spa from '@/assets/Spa.png'
import green from '@/assets/GreenEarth.png'
import health from '@/assets/HealthPlus.png'
import { Result } from "postcss";

const service= [
    {
        title: 'Tech Innovations',
        imageSrc:tech,
        problem: 'Tech Innovations was struggling to drive organic traffic to its site, despite offering innovative solutions in the tech space. They needed a comprehensive SEO strategy to increase visibility and capture a larger share of their target audience.',
        solution:'We implemented a robust SEO strategy, focusing on content optimization, keyword targeting, and technical SEO improvements.',
        result: ' Increased organic traffic by 250% within 8 months.'
    },
    {
        title: 'Urban Fashion Co.',
        imageSrc: urban,
        problem: 'Urban Fashion Co. faced high competition in the fashion industry, and their pay-per-click (PPC) campaigns were not delivering sufficient ROI.',
        solution:'We revamped their PPC strategy, optimizing ad copy, targeting, and budget allocation to maximize their investment.',
        result: ' Achieved 5x ROI on PPC campaigns.'
    },
    {
        title: 'GreenEarth Landscaping',
        imageSrc:  green,
        problem: 'GreenEarth Landscaping struggled to attract local customers due to poor online visibility. Competitors were outranking them in local searches, and their Google My Business profile was under-optimized.',
        solution:'We implemented a local SEO strategy, optimizing their Google My Business profile, creating location-specific content, and building local citations. Targeted ads were also used to capture nearby search traffic.',
        result: ' Increased local search traffic by 80% and saw a 45% rise in inquiries and foot traffic within 4 months.'
    },
    {
        title: 'StellarTech Solutions',
        imageSrc: stella,
        problem: 'StellarTech Solutions lacked a strong content presence and struggled to generate organic leads. Their website was not ranking for key industry terms, and they needed to position themselves as thought leaders in IT consulting.',
        solution:'We created an in-depth content marketing strategy, focusing on long-tail keyword optimization and producing high-value content such as blogs, case studies, and white papers. Technical SEO improvements were also made.',
        result: ' Achieved a 150% increase in organic traffic and a 30% rise in qualified leads within 6 months.'
    },
    {
        title: "Bella Beauty Spa",
        imageSrc: spa,
        problem: 'Bella Beauty Spa had low engagement on social media and struggled to convert followers into paying customers, leading to fewer bookings for premium beauty treatments.',
        solution:'We developed a social media strategy, focusing on visually engaging posts, targeted Instagram and Facebook ads, and collaborations with local influencers. Seasonal promotions were also introduced.',
        result: ' Increased social media engagement by 500% and bookings by 40%, while doubling their Instagram followers in 6 months.'
    },
    {
        title: 'HealthPlus Clinic',
        imageSrc: health,
        problem: 'HealthPlus Clinic was struggling to attract new patients through online channels. Their website had low traffic, and their presence on local search results was weak, limiting their ability to reach potential patients in their area.',
        solution:'We implemented a local SEO and content marketing strategy, optimizing their website for local search terms, enhancing their Google My Business profile, and creating blog content focused on health tips relevant to their services.',
        result: ' Increased website traffic by 120% and saw a 35% rise in new patient inquiries within 5 months.'
    },
]

const CaseStudy = () => {
  return (
    <div className="bg-white  pt-24 " id="caseStudy">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center gap-6">
        <div className="tag">Case Studies</div>
        </div>
        <h2 className="section-title mt-5">Success Stories</h2>
        <p className="section-description mt-5">See how we've helped businesses like yours achieve outstanding results.</p></div>
        <div className="flex justify-center gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 mb-24">
        {service.map(({ title, imageSrc, problem, solution, result}) => (
          <div className="card " key={title}>
            <div className="flex justify-center gap-2 mt-5 ">
            <Image src={imageSrc} alt={title} width={100} height={100} className="h-24 w-24  items-center mb-10" /></div>
            <div className="font-bold text-center">{title}</div>
              <div className="flex flex-col ">
                <div className="font-small tracking-tight  text-center mt-8 mb-8">{problem}</div>
              </div>
              <div className="flex flex-col">
                <div className="font-small tracking-tight  text-center mb-8">{solution}</div>
              </div>
              <div className="flex flex-col">
                <div className="font-small tracking-tight  text-center mb-8"><span className="font-bold">Result: </span>{ result}</div>
              </div>
          </div>
        ))}</div>
        </div>
        </div>
      
    </div>
  );
};
export default CaseStudy;