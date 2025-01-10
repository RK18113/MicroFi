// Borrowing.jsx
import React from 'react';
import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

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

const Borrowing = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Borrowing</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New Loan Request Form */}
        <div className="bg-gray-800 border border-green-500 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">New Loan Request</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 block mb-1">Amount to Borrow</label>
              <input
                type="text"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                placeholder="Enter amount in USDC"
              />
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Collateral Amount</label>
              <input
                type="text"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                placeholder="Enter amount in ETH"
              />
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Loan Duration</label>
              <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
              </select>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              Request Loan
            </button>
          </div>
        </div>

        {/* Active Borrowings */}
        <div className="bg-gray-800 border border-green-500 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Your Active Borrowings</h2>
          <div className="space-y-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-white font-medium">Loan #{i + 1}</h3>
                    <p className="text-sm text-green-400">In Good Standing</p>
                  </div>
                  <button className="bg-transparent border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white">
                    Repay
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Borrowed</p>
                    <p className="text-white">2,000 USDC</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Collateral</p>
                    <p className="text-white">1.5 ETH</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Interest Rate</p>
                    <p className="text-green-400">6.5% APR</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Due Date</p>
                    <p className="text-white">30 days</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <style jsx global>{`
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

export default Borrowing;