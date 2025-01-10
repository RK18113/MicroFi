// About.jsx
import React from 'react';
import { DollarSign, Shield, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">About DeFi Microloans</h1>
      
      {/* How It Works */}
      <div className="bg-gray-800 border border-green-500 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">How It Works</h2>
        <div className="space-y-6 text-gray-300">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-white">Decentralized Lending</h3>
            <p>Connect directly with lenders through smart contracts, eliminating traditional banking intermediaries.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-white">Collateralized Loans</h3>
            <p>Secure loans by staking your cryptocurrency as collateral, ensuring security for lenders while maintaining accessibility.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-white">Smart Contract Security</h3>
            <p>All loans are managed by audited smart contracts on the Polygon network, ensuring transparent and secure transactions.</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 border border-green-500 rounded-lg p-6">
          <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <DollarSign className="text-green-500 w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Better Rates</h3>
          <p className="text-gray-300">Competitive interest rates that benefit both lenders and borrowers.</p>
        </div>

        <div className="bg-gray-800 border border-green-500 rounded-lg p-6">
          <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Shield className="text-green-500 w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Secure Platform</h3>
          <p className="text-gray-300">Built on blockchain technology with audited smart contracts.</p>
        </div>

        <div className="bg-gray-800 border border-green-500 rounded-lg p-6">
          <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Clock className="text-green-500 w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Quick Process</h3>
          <p className="text-gray-300">Get your loan approved and funded within minutes, not days.</p>
        </div>
      </div>
    </div>
  );
};

export default About;