import HowItWorksStep from './HowItWorksStep';

export default function HowItWorksSection() {
  const howItWorksSteps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your profile as a project or an advisor',
      iconSrc: '/howItWorks/signUp.svg',
      iconAlt: 'Sign Up',
    },
    {
      number: '02',
      title: 'Get Matched',
      description: 'We pair you with the best-fit advisors or projects',
      iconSrc: '/howItWorks/getMatched.svg',
      iconAlt: 'Get Matched',
    },
    {
      number: '03',
      title: 'Connect',
      description: 'Work through our platform with built-in tools',
      iconSrc: '/howItWorks/connect.svg',
      iconAlt: 'Connect',
    },
    {
      number: '04',
      title: 'Succeed',
      description: 'Achieve results with expert guidance',
      iconSrc: '/howItWorks/succeed.svg',
      iconAlt: 'Succeed',
    },
  ];

  return (
    <section className="w-full bg-black py-32">
      <div className="w-full max-w-[1510px] mx-auto px-8">
        <h2 className="text-white text-5xl max-[600px]:text-3xl font-semibold mb-6">
          HOW IT WORKS
        </h2>
        <p className="text-white font-martian-mono text-base max-w-[592px] mb-16">
          Effortlessly connect with vetted Web3 advisors and start collaborating
          in just four steps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step) => (
            <HowItWorksStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              iconSrc={step.iconSrc}
              iconAlt={step.iconAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
