'use client'
import Arrow from '@/assets/arrow-right.svg'

const data= [
    {
        title: 'Maximizing ROI with PPC Advertising',
        description: 'Learn how to create PPC campaigns that deliver exceptional returns',
    },
    {
        title: 'The Power of Video Marketing in 2024',
        description: 'Discover why video is essential for your digital strategy',
    },
]

export const Blog = () => {
  return (
    <div className="bg-white  pt-24 ">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center gap-6">
        <div className="tag">Latest Insights
        </div>
        </div>
        <h2 className="section-title mt-5">From Our Blog</h2>
        </div>
        <div className="flex justify-center gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-10">
        {data.map(({ title,  description }) => (
          <div className="card " key={title}>
            <div className="font-bold text-center">{title}</div>
              <div className="flex flex-col">
                <div className="text-center mt-5">{description}</div>
              </div>
              <div className='w-full flex'>
              <button className="btn btn-text gap-1 mt-5">
            <span>Learn more</span>
            <Arrow className="h-5 w-5" />
          </button>
              </div>
          </div>
        ))}</div>
        </div>
        </div>
      
    </div>
  );
};
