import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { ArrowRight, Shield, History, Wallet, Coins, Star, ChevronRight } from 'lucide-react';
import GeometricWeb from '../components/GeometricWeb';
import { ethers } from 'ethers';

const Home = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  // Replace with your deployed contract's ABI and address
  const contractABI = [
    [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          }
        ],
        "name": "cancelLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "lender",
            "type": "address"
          }
        ],
        "name": "CollateralClaimed",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          }
        ],
        "name": "defaultLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          }
        ],
        "name": "fundLoan",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          }
        ],
        "name": "LoanCancelled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          }
        ],
        "name": "LoanDefaulted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "lender",
            "type": "address"
          }
        ],
        "name": "LoanFunded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          }
        ],
        "name": "LoanRepaid",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "collateralAmount",
            "type": "uint256"
          }
        ],
        "name": "LoanRequested",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          }
        ],
        "name": "repayLoan",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "interest",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "collateralAmount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              }
            ],
            "internalType": "struct MicroLoan.LoanRequest",
            "name": "request",
            "type": "tuple"
          }
        ],
        "name": "requestLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "getUserLoans",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "loanCounter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "loans",
        "outputs": [
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "lender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "interest",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "collateralAmount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "collateralToken",
            "type": "address"
          },
          {
            "internalType": "enum MicroLoan.LoanStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "PLATFORM_FEE",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "userLoans",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
  ];
  const contractAddress = '0x34AB0985306d52e6aC44597bed8078ec2f69BE30'; // Replace with your deployed contract address

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

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);

      // Initialize contract
      const signer = await provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
      setContract(contractInstance);
    } else {
      alert("Please install MetaMask to connect to the wallet.");
    }
  };

  const fetchLoanDetails = async () => {
    if (contract) {
      try {
        const loanDetails = await contract.getLoanDetails();
        console.log('Loan Details:', loanDetails);
      } catch (error) {
        console.error('Error fetching loan details:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <GeometricWeb />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between animate-scale-up">
          <div className="md:w-1/2 mb-10 md:mb-0 pl-14">
            <h1 className="text-5xl font-bold mb-6">
              Decentralized <span className="text-green-400">Microloans</span> for Everyone
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Access quick crypto loans without intermediaries. Stake your assets, build credit, and get better rates over time.
            </p>
            <div className="flex gap-4">
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

      {/* Connect Wallet Button */}
      <div className="container mx-auto px-6 py-8 text-center">
        <button
          onClick={connectWallet}
          className="bg-green-400 text-black px-6 py-3 rounded-lg hover:bg-green-500"
        >
          Connect Wallet
        </button>
      </div>

      {/* Loan Details Button */}
      {account && (
        <div className="container mx-auto px-6 py-8 text-center">
          <button
            onClick={fetchLoanDetails}
            className="bg-blue-400 text-black px-6 py-3 rounded-lg hover:bg-blue-500"
          >
            Fetch Loan Details
          </button>
        </div>
      )}

      {/* Features Section */}
      <section className="relative z-10 bg-black/50 py-20 lg:p-10 animate-slide-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 p-6 rounded-xl border border-green-400/20 group">
              <Shield className="text-green-400 mb-4 group-hover:animate-spin" size={32} />
              <h3 className="text-xl font-bold mb-3">Stake Collateral</h3>
              <p className="text-gray-400">
                Secure your loan by staking your crypto assets. Smart contracts ensure complete transparency and security.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-green-400/20 group">
              <Coins className="text-green-400 mb-4 group-hover:animate-spin" size={32} />
              <h3 className="text-xl font-bold mb-3">Borrow Stablecoins</h3>
              <p className="text-gray-400">
                Get instant access to stablecoin loans. No credit checks required, just your crypto collateral.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-green-400/20 group">
              <History className="text-green-400 mb-4 group-hover:animate-spin" size={32} />
              <h3 className="text-xl font-bold mb-3">Build Credit</h3>
              <p className="text-gray-400">
                Build your on-chain credit score through timely repayments and unlock better interest rates.
              </p>
            </div>
          </div>
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
          background-color: #32ff7e;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: transform 0.1s ease;
        }
      `}</style>
    </div>
  );
};

export default Home;
