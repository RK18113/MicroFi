import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ArrowRight, Shield, History, Wallet, Coins, Star, ChevronRight } from 'lucide-react';
import GeometricWeb from '../components/GeometricWeb';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
      // Create the custom cursor
      const cursor = document.createElement("div");
      cursor.id = "custom-cursor";
      document.body.appendChild(cursor);
  
      const moveCursor = (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      };
  
      document.addEventListener("mousemove", moveCursor);
  
      // Cleanup function
      return () => {
        document.removeEventListener("mousemove", moveCursor);
        document.body.removeChild(cursor);
      };
    }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">

        <GeometricWeb></GeometricWeb>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between animate-scale-up">
          <div className="md:w-1/2 mb-10 md:mb-0 pl-14">
            <h1 className="text-5xl font-bold mb-6">
              Decentralized <span className="text-green-400">Microloans</span> for Everyone
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Access quick crypto loans without intermediaries. Stake your assets, 
              build credit, and get better rates over time.
            </p>
            <div className="flex gap-4">
            {/* give login link */}
            <Link to="/authsign">
                <button className="bg-green-400 text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-500">
                    Get Started <ArrowRight size={20} />
                </button>
            </Link>

            <Link to="/about">
                <button className="border border-green-400 text-green-400 px-6 py-3 rounded-lg hover:bg-green-400 hover:text-black">
                    Learn More
                </button>
            </Link>

            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-scale-up">
            <div className="w-96 h-96 rounded-full bg-green-400/20 flex items-center justify-center animate-pulse">
              <div className="w-72 h-72 rounded-full bg-green-400/30 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-48 h-48 rounded-full bg-green-400/40 flex items-center justify-center">
                  <Wallet size={64} className="text-white-400" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
{/* Features Section */}
      <section className="relative z-10 bg-black/50 py-20 lg:p-10 animate-slide-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 p-6 rounded-xl border border-green-400/20 group">
              <Shield className="text-green-400 mb-4 group-hover:animate-spin" size={32} />
              <h3 className="text-xl font-bold mb-3">Stake Collateral</h3>
              <p className="text-gray-400">
                Secure your loan by staking your crypto assets. Smart contracts ensure 
                complete transparency and security.
              </p>
            </div>
            
            <div className="bg-black/40 p-6 rounded-xl border border-green-400/20 group">
              <Coins className="text-green-400 mb-4 group-hover:animate-spin" size={32} />
              <h3 className="text-xl font-bold mb-3">Borrow Stablecoins</h3>
              <p className="text-gray-400">
                Get instant access to stablecoin loans. No credit checks required, 
                just your crypto collateral.
              </p>
            </div>
            
            <div className="bg-black/40 p-6 rounded-xl border border-green-400/20 group">
              <History className="text-green-400 mb-4 group-hover:animate-spin" size={32} />
              <h3 className="text-xl font-bold mb-3">Build Credit</h3>
              <p className="text-gray-400">
                Build your on-chain credit score through timely repayments and 
                unlock better interest rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 bg-black py-20 lg:p-10 animate-slide-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-14">

            <div className="flex items-start gap-4 group">
              <div className="bg-green-400/20 p-2 rounded-lg">
                <Star className="text-green-400 group-hover:animate-spin" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">No Middlemen</h3>
                <p className="text-gray-400">
                  Peer-to-peer lending removes traditional intermediaries, reducing unnecessary 
                  fees and fostering trust through smart contract enforcement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-green-400/20 p-2 rounded-lg">
                <Star className="text-green-400 group-hover:animate-spin" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Global Access</h3>
                <p className="text-gray-400">
                Anyone with crypto can participate, transcending borders to unlock financial 
                opportunities for underserved regions and users without traditional credit history.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-green-400/20 p-2 rounded-lg">
                <Star className="text-green-400 group-hover:animate-spin" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Immutable & Transparent Transactions</h3>
                <p className="text-gray-400">
                Every loan is recorded on the blockchain, ensuring transparency and accountability 
                for all parties involved.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-green-400/20 p-2 rounded-lg">
                <Star className="text-green-400 group-hover:animate-spin" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Improved Loan Terms</h3>
                <p className="text-gray-400">
                Successful repayments improve your reputation score, allowing you to enjoy reduced 
                interest rates and higher loan limits over time.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-black bg-green-400/10 animate-slide-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the future of decentralized finance. Start borrowing or lending 
            in minutes with our easy-to-use platform.
          </p>
          <Link to="./authsign">
            <button className="bg-green-400 text-black px-8 py-4 rounded-lg flex items-center gap-2 mx-auto hover:bg-green-500">
              Launch App <ChevronRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t bg-black border-green-400/20 py-8 animate-slide-up">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-green-400">MicroFi</div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-green-400">Terms</a>
            <a href="#" className="hover:text-green-400">Privacy</a>
            <a href="#" className="hover:text-green-400">Docs</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes scale-up {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-up {
          animation: scale-up 0.5s ease-out forwards;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes slide-up {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        #custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background-color: rgba(34, 197, 94, 1);
          border-radius: 50%;
          pointer-events: none; /* Ensure it doesn't block clicks */
          z-index: 10000;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease-out;
        }

        button:hover ~ #custom-cursor {
          transform: scale(1.5); /* Makes the cursor grow over buttons */
        }

        body, a, button {
          cursor: none;
        }          
        `}</style>
    </div>
    
  );
};

export default Home;