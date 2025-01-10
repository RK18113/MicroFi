// Dashboard.jsx
import React from 'react';
import { Wallet, ArrowUpRight, DollarSign, History } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Value Locked', value: '$124,892', icon: <DollarSign /> },
    { title: 'Active Loans', value: '45', icon: <ArrowUpRight /> },
    { title: 'Your Collateral', value: '2.5 ETH', icon: <Wallet /> },
    { title: 'Lending Score', value: '850', icon: <History /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 border border-green-500 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-200">{stat.title}</p>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-green-400">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Activity and Loans Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-gray-800 border border-green-500 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <ArrowUpRight className="text-green-500" />
                  <div>
                    <p className="text-white">Loan Repayment</p>
                    <p className="text-sm text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <span className="text-green-400">+0.5 ETH</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Loans */}
        <div className="bg-gray-800 border border-green-500 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Your Active Loans</h2>
          <div className="space-y-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-white">Loan #{i + 1}</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount</span>
                    <span className="text-white">1000 USDC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Collateral</span>
                    <span className="text-white">0.8 ETH</span>
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

export default Dashboard;