export default function FindJobPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-[1510px] mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover opportunities in Web3, DeFi, and blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-all duration-300">
                <div className="w-6 h-6 bg-purple-400 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Senior Solidity Developer
              </h3>
              <p className="text-gray-300 mb-4">
                Build smart contracts for DeFi protocols
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-medium">$120k - $180k</span>
                <span className="text-sm text-gray-400">Remote</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
