import Link from 'next/link';

export default function WorkPage() {
  return (
    <div className=" bg-primary">
      <div className="max-w-[1510px] mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">Work With Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find your next opportunity or hire the perfect candidate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/work/find-job">
            <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                <div className="w-8 h-8 bg-blue-400 rounded"></div>
              </div>
              <h2 className="text-3xl font-semibold text-white mb-4">
                Find a Job
              </h2>
              <p className="text-gray-300 mb-6">
                Browse through hundreds of opportunities in Web3, DeFi, and
                blockchain technology
              </p>
              <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-all duration-300">
                Explore Jobs
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/work/hire">
            <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                <div className="w-8 h-8 bg-green-400 rounded"></div>
              </div>
              <h2 className="text-3xl font-semibold text-white mb-4">
                Hire Talent
              </h2>
              <p className="text-gray-300 mb-6">
                Post job openings and connect with skilled professionals in the
                blockchain space
              </p>
              <div className="flex items-center text-green-400 font-medium group-hover:text-green-300 transition-all duration-300">
                Post a Job
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
