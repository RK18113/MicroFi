// Lending.jsx
import React from 'react';
import { DollarSign } from 'lucide-react';

const Lending = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Lending</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Available Pools */}
        <div className="bg-gray-800 border border-green-500 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Available Lending Pools</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-white font-medium">USDC Pool #{i + 1}</h3>
                    <p className="text-sm text-gray-400">Low Risk</p>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                    Lend Now
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-400">APY</p>
                    <p className="text-green-400 font-medium">8.2%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Total Deposited</p>
                    <p className="text-white font-medium">$50,000</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Utilization</p>
                    <p className="text-white font-medium">75%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Positions */}
        <div className="bg-gray-800 border border-green-500 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Your Lending Positions</h2>
          <div className="space-y-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-white font-medium">Active Position #{i + 1}</h3>
                    <p className="text-sm text-green-400">Earning Interest</p>
                  </div>
                  <button className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white">
                    Withdraw
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Deposited</p>
                    <p className="text-white font-medium">5,000 USDC</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Earned</p>
                    <p className="text-green-400 font-medium">+125 USDC</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lending;