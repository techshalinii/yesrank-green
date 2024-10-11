'use client'

const data= [
    {
        title: 'Holistic Approach',
        description: 'Integrated strategies that cover every aspect of digital marketing.',
    },
    {
        title: 'Proven Expertise',
        description: 'A seasoned team with a track record of delivering results',
    },
    {
        title: 'Client-Centric Focus',
        description: 'We tailor our solutions to meet your unique business needs',
    },
    {
        title: 'Innovative Solutions',
        description: 'Leveraging the latest technologies and trends',
    },
]

export const WhyUs = () => {
  return (
    <div className="bg-white  pt-24 ">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center gap-6">
        <div className="tag">Why Choose Yesrank</div>
        </div>
        <h2 className="section-title mt-5">Your Partner in Digital Excellence</h2>
        </div>
        <div className="flex justify-center gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 mt-10">
        {data.map(({ title,  description }) => (
          <div className="card " key={title}>
            <div className="font-bold text-center">{title}</div>
              <div className="flex flex-col">
                <div className="text-center mt-5">{description}</div>
              </div>
          </div>
        ))}</div>
        </div>
        </div>
      
    </div>
  );
};
