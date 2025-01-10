import React, { useState, useEffect } from 'react';
import { Wallet } from 'lucide-react';

const AuthSign1 = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  // Clear walletAddress on page load
  useEffect(() => {
    setWalletAddress('');
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask is not installed. Please install MetaMask to use this feature.');
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      alert('Failed to connect to MetaMask. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(''); // Clear wallet address
    alert('Wallet disconnected!');
  };

  return (
    <div className="min-h-screen w-full bg-black">
      <div className="fixed inset-0 bg-black" />
      
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, transparent 39px, rgba(34, 197, 94, 0.2) 39px, rgba(34, 197, 94, 0.2) 41px, transparent 41px),
            linear-gradient(to bottom, transparent 39px, rgba(34, 197, 94, 0.2) 39px, rgba(34, 197, 94, 0.2) 41px, transparent 41px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating particles effect */}
      <div className="fixed inset-0 z-0 opacity-30">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-black border border-green-900 rounded-lg p-6">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-5xl font-bold text-green-500 text-center animate-glow">
              MicroFi
            </h1>
            <p className="text-gray-400 text-center mt-2 animate-fade-in">
              Decentralized Lending Platform
            </p>
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white animate-fade-in">
              Access Platform
            </h2>
            <p className="text-gray-400 mt-2">
              Connect to access your account
            </p>
          </div>

          {/* Connect Wallet Button */}
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg disabled:opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
          >
            <Wallet className={`h-5 w-5 ${isConnecting ? 'animate-spin' : ''}`} />
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>

          {/* Disconnect Wallet Button */}
          {walletAddress && (
            <button
              onClick={disconnectWallet}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
            >
              Disconnect Wallet
            </button>
          )}

          {walletAddress && (
            <div className="text-green-400 text-sm text-center mt-4">
              Connected Wallet: {walletAddress}
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AuthSign1;
