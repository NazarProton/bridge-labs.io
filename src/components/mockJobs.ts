export interface Job {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  salary: string;
  type: string;
  tags: string[];
  logo: string;
  country: string;
  countryName: string;
  employmentType: 'full-time' | 'part-time' | 'contract' | 'remote';
  businessSector: string;
  salaryMin: number;
  salaryMax: number;
  aboutCompany: string;
  opportunity: string;
  whatYouWillDo: string[];
  whatWeAreLookingFor: string[];
  compensation: string;
}

export const mockJobs: Job[] = [
  {
    id: 1,
    title: 'Chief Marketing Officer (CMO)',
    company: 'Prompty',
    description:
      'Lead the global marketing vision for AI-powered app creation platform. Define the category of AI-native software development.',
    location: 'London, UK',
    salary: '$150k - $250k',
    type: 'Full-time',
    tags: ['AI', 'Marketing', 'Web3', 'Leadership'],
    logo: '/marketplace/companyLogo.png',
    country: 'GB',
    countryName: 'United Kingdom',
    employmentType: 'full-time',
    businessSector: 'AI',
    salaryMin: 150000,
    salaryMax: 250000,
    aboutCompany:
      'Prompty is the future of software creation. It is the AI-powered app factory that transforms a simple idea into a fully functioning application within minutes. Whether a mobile app, a browser extension, or a Web3 dApp, Prompty removes every barrier between imagination and execution. No development teams. No friction. Just pure creativity delivered at speed.',
    opportunity:
      'We are looking for a Chief Marketing Officer who will take Prompty to the global stage and define the category of AI-native app creation. This is not a traditional marketing role. It is a chance to lead a movement where software is built by ideas rather than code. The CMO will create the voice of Prompty, scale adoption across developers and enterprises, and place the brand at the centre of the AI and Web3 revolutions.',
    whatYouWillDo: [
      'Craft and execute a global marketing vision that establishes Prompty as the leader in AI-driven app creation',
      'Build community engagement with developers, creators, founders, and enterprises around the world',
      'Drive brand storytelling across digital, media, and live stages, positioning Prompty as a category-defining product',
      'Launch high-impact campaigns that turn curiosity into adoption and adoption into market dominance',
      'Develop deep partnerships with AI communities, LLM providers, app marketplaces, and startup ecosystems',
      'Lead with data, setting clear growth metrics while building long-term brand equity',
    ],
    whatWeAreLookingFor: [
      'A visionary leader with CMO or senior marketing experience in AI, SaaS, or Web3',
      'Proven success in taking frontier products to mass adoption',
      'The ability to create cultural moments, not just marketing campaigns',
      'A strong network across AI, Web3, and technology communities',
      'Exceptional communication and leadership skills with the ability to inspire at scale',
    ],
    compensation:
      'This is the opportunity to define how the world creates software. The CMO of Prompty will not only lead growth but also shape the narrative of an entire industry.',
  },
  {
    id: 2,
    title: 'Chief Business Development Officer (CBDO)',
    company: 'CyberLife',
    description:
      'Lead business development for next-generation AI gaming platform with blockchain economies and tokenized ownership.',
    location: 'Washington, DC',
    salary: '$140k - $220k',
    type: 'Full-time',
    tags: ['Gaming', 'AI', 'Blockchain', 'Business Development'],
    logo: '/marketplace/companyLogo2.svg',
    country: 'US',
    countryName: 'United States',
    employmentType: 'full-time',
    businessSector: 'Web3',
    salaryMin: 140000,
    salaryMax: 220000,
    aboutCompany:
      'CyberLife is where artificial intelligence meets gaming and ownership. It is a next-generation gaming platform that enables developers and players to co-create intelligent, immersive game worlds powered by AI and secured on-chain. CyberLife brings together AI-generated logic, assets, and dialogue with tokenized economies that reward players and empower creators. The result is a new standard for how games are built, owned, and monetized.',
    opportunity:
      "We are seeking a Chief Business Development Officer who will lead CyberLife's expansion into a global force in AI gaming. This role is at the intersection of artificial intelligence, blockchain economies, and the future of digital entertainment. The CBDO will architect the partnerships that bring the world's studios, AI providers, and blockchain ecosystems into the CyberLife universe. This is not just a role in business development. It is the chance to be a founding force in redefining how gaming and ownership will look for decades to come.",
    whatYouWillDo: [
      'Design and execute the global business development strategy for CyberLife',
      'Forge partnerships with top game studios, AI providers, and blockchain ecosystems to drive adoption',
      'Scale the CyberLife developer and creator ecosystem through licensing, SDK distribution, and strategic alliances',
      'Build the $LIFE token economy into a sustainable, deflationary model that powers player-owned universes',
      'Negotiate sponsorships, marketplace integrations, and global distribution deals with the biggest names in gaming and tech',
      'Represent CyberLife on the world stage at conferences, events, and with investors, establishing the brand as the premier AI gaming platform',
    ],
    whatWeAreLookingFor: [
      'Senior-level experience in business development within gaming, blockchain, or AI',
      'A strong network of decision-makers in game studios, AI infrastructure, and blockchain ecosystems',
      'Proven track record of closing high-value deals and scaling ecosystems at pace',
      'A deep understanding of tokenized economies, marketplaces, and Web3 monetisation models',
      'Strategic thinking combined with exceptional relationship-building and negotiation skills',
    ],
    compensation:
      'This is the opportunity to stand at the frontier of AI and gaming. The CBDO of CyberLife will play a defining role in shaping not only the platform but also the future of how players and developers experience ownership, creativity, and digital economies.',
  },
  {
    id: 3,
    title: 'Senior Frontend Engineer',
    company: 'Stealth Startup',
    description:
      'Build the frontend stack for a frontier finance and blockchain platform using Next.js, Tailwind, and Web3 tooling.',
    location: 'London, UK',
    salary: '$120k - $180k',
    type: 'Full-time',
    tags: ['Frontend', 'Next.js', 'Web3', 'Blockchain'],
    logo: '/marketplace/companyLogo.png',
    country: 'GB',
    countryName: 'United Kingdom',
    employmentType: 'full-time',
    businessSector: 'Web3',
    salaryMin: 120000,
    salaryMax: 180000,
    aboutCompany:
      'We are building at the frontier of finance and blockchain, creating a stealth platform that will redefine how value moves across the world. Our mission is to fuse the scale of global financial systems with the openness of decentralised infrastructure, unlocking new levels of efficiency, access, and ownership. Backed by seasoned operators and capital partners, we are assembling a founding team that will shape the architecture of the next financial era.',
    opportunity:
      'We are seeking a Senior Frontend Engineer to become one of the earliest technical leaders on our team. This is not a conventional engineering role. It is a chance to shape product experiences that will sit at the heart of a category-defining company. You will be building the interfaces that allow users to interact seamlessly with decentralised systems, setting the standard for usability, performance, and trust in the next generation of financial applications.',
    whatYouWillDo: [
      'Own the frontend stack and deliver world-class applications using Next.js, Tailwind, and modern web3 tooling',
      'Collaborate with product, design, and operations to create elegant, intuitive user experiences that bridge Web2 and Web3',
      'Translate ambitious product ideas into clean, efficient, and scalable code that can support global adoption',
      'Uphold a culture of technical excellence through test-first development, peer reviews, and knowledge sharing',
      'Drive innovation in web3 integrations across both EVM and Solana ecosystems',
      'Build the tools and interfaces that will accelerate our journey from stealth to global launch',
    ],
    whatWeAreLookingFor: [
      'A senior engineer with 5+ years of frontend development experience, ideally in high-growth or early-stage environments',
      'Deep proficiency in Next.js and Tailwind with a passion for responsive, user-centric design',
      'Familiarity with web3 tooling across both EVM and Solana ecosystems, including viem, wagmi, and @solana/web3.js',
      'Strong ability to move quickly, iterate fast, and deliver polished products under high autonomy',
      'Excellent problem-solving skills, attention to detail, and the mindset of an owner, not just a contributor',
      'A builder who thrives in frontier environments where product and infrastructure are being defined in real time',
    ],
    compensation:
      'This is the opportunity to join a stealth project as one of its earliest engineers, shaping both the technology and the culture from day one. You will work with a world-class founding team, gain exposure to cutting-edge blockchain and financial infrastructure, and build products with the potential to impact millions globally. The Senior Frontend Engineer role is not only about writing code. It is about creating the face of a platform that will define the next era of financial technology.',
  },
  {
    id: 4,
    title: 'Senior Solidity Developer',
    company: 'DeFi Protocol',
    description:
      'Build smart contracts for DeFi protocols and DeFi applications with focus on security and scalability.',
    location: 'Remote',
    salary: '$130k - $190k',
    type: 'Full-time',
    tags: ['Solidity', 'DeFi', 'Smart Contracts', 'Web3'],
    logo: '/marketplace/companyLogo2.svg',
    country: 'UA',
    countryName: 'Ukraine',
    employmentType: 'remote',
    businessSector: 'Web3',
    salaryMin: 130000,
    salaryMax: 190000,
    aboutCompany:
      'We are a leading DeFi protocol building the future of decentralized finance. Our platform enables users to access advanced financial services through smart contracts, providing lending, borrowing, and yield farming opportunities. We focus on security, transparency, and innovation to create a more accessible and efficient financial system.',
    opportunity:
      'We are seeking a Senior Solidity Developer to join our core development team. This role involves designing, developing, and auditing smart contracts that will handle millions of dollars in user funds. You will work on cutting-edge DeFi protocols and contribute to the security and scalability of our platform.',
    whatYouWillDo: [
      'Design and implement smart contracts for DeFi protocols using Solidity',
      'Conduct security audits and implement best practices for smart contract development',
      'Optimize gas usage and ensure scalability of smart contracts',
      'Collaborate with the team to design new DeFi products and features',
      'Write comprehensive tests and documentation for all smart contracts',
      'Stay updated with the latest developments in Ethereum and DeFi protocols',
    ],
    whatWeAreLookingFor: [
      '3+ years of experience in Solidity development and smart contract architecture',
      'Deep understanding of Ethereum, DeFi protocols, and blockchain security',
      'Experience with testing frameworks like Hardhat, Truffle, or Foundry',
      'Knowledge of common DeFi patterns and security vulnerabilities',
      'Strong problem-solving skills and attention to detail',
      'Experience with gas optimization and contract upgradeability patterns',
    ],
    compensation:
      'Join us in building the future of decentralized finance. You will work on cutting-edge technology that has the potential to revolutionize how people access financial services worldwide.',
  },
  {
    id: 5,
    title: 'AI Research Engineer',
    company: 'TechCorp',
    description:
      'Research and develop cutting-edge AI models for natural language processing and computer vision applications.',
    location: 'San Francisco, CA',
    salary: '$160k - $220k',
    type: 'Full-time',
    tags: ['AI', 'Machine Learning', 'Research', 'Python'],
    logo: '/marketplace/companyLogo.png',
    country: 'US',
    countryName: 'United States',
    employmentType: 'full-time',
    businessSector: 'AI',
    salaryMin: 160000,
    salaryMax: 220000,
    aboutCompany:
      'TechCorp is at the forefront of artificial intelligence research and development. We focus on creating innovative AI solutions that solve real-world problems across various industries. Our team consists of world-class researchers and engineers working on cutting-edge machine learning algorithms and neural network architectures.',
    opportunity:
      'We are looking for an AI Research Engineer to join our research team. You will work on developing state-of-the-art AI models for natural language processing and computer vision applications. This role involves both theoretical research and practical implementation of AI solutions.',
    whatYouWillDo: [
      'Research and develop novel AI algorithms and neural network architectures',
      'Implement and optimize machine learning models for production use',
      'Collaborate with research teams to publish papers and contribute to the AI community',
      'Design and conduct experiments to evaluate model performance',
      'Work on large-scale data processing and model training pipelines',
      'Contribute to the development of AI tools and frameworks',
    ],
    whatWeAreLookingFor: [
      'PhD in Computer Science, Machine Learning, or related field',
      'Strong background in deep learning, NLP, and computer vision',
      'Experience with PyTorch, TensorFlow, or similar frameworks',
      'Proven track record of research publications in top AI conferences',
      'Strong programming skills in Python and experience with large-scale systems',
      'Ability to work independently and collaborate effectively in a team',
    ],
    compensation:
      'Join our mission to advance the field of artificial intelligence. You will work with cutting-edge technology and contribute to research that shapes the future of AI applications.',
  },
  {
    id: 6,
    title: 'Product Manager',
    company: 'Innovation Labs',
    description:
      'Lead product strategy and development for emerging technology products in the Web3 and AI space.',
    location: 'New York, NY',
    salary: '$140k - $200k',
    type: 'Full-time',
    tags: ['Product Management', 'Web3', 'AI', 'Strategy'],
    logo: '/marketplace/companyLogo2.svg',
    country: 'DE',
    countryName: 'Germany',
    employmentType: 'part-time',
    businessSector: 'Sales',
    salaryMin: 140000,
    salaryMax: 200000,
    aboutCompany:
      'Innovation Labs is a forward-thinking company focused on developing cutting-edge products in the Web3 and AI space. We believe in creating products that not only solve current problems but also anticipate future needs. Our team is passionate about innovation and committed to delivering exceptional user experiences.',
    opportunity:
      'We are seeking a Product Manager to lead our product strategy and development efforts. You will work closely with cross-functional teams to define product vision, prioritize features, and ensure successful product launches. This role requires a deep understanding of both Web3 and AI technologies.',
    whatYouWillDo: [
      'Define product vision, strategy, and roadmap for Web3 and AI products',
      'Conduct market research and competitive analysis to identify opportunities',
      'Work with engineering, design, and business teams to prioritize features',
      'Define product requirements and create detailed specifications',
      'Analyze user feedback and metrics to drive product improvements',
      'Coordinate product launches and ensure successful go-to-market execution',
    ],
    whatWeAreLookingFor: [
      '5+ years of product management experience in technology companies',
      'Deep understanding of Web3, blockchain, and AI technologies',
      'Strong analytical skills and experience with product analytics tools',
      'Excellent communication and stakeholder management skills',
      'Experience working with agile development methodologies',
      'Proven track record of successful product launches and feature development',
    ],
    compensation:
      'Join us in shaping the future of technology products. You will have the opportunity to work on innovative solutions that will define the next generation of digital experiences.',
  },
];
