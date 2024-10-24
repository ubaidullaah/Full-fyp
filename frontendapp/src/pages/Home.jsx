import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Assuming your Navbar component is pre-built
import { FaUpload, FaClipboardList, FaBriefcase, FaCalendarAlt, FaChartBar, FaUserCircle } from 'react-icons/fa'; // Icons from react-icons
import Sidebar from '../components/Sidebar'; // Assuming your Sidebar component is pre-built

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <div className="flex flex-1" style={{ marginTop: '4rem' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard Content */}
        <main className="flex-1 p-6 md:p-4 relative">
          {/* Profile Icon under the logout */}
          <div className="absolute top-0 right-0 p-4">
            <FaUserCircle  className="text-[#800080] text-3xl cursor-pointer" />
          </div>

          {/* Welcome Message */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome Back, John</h1>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">Total Applications</h3>
              <p className="text-4xl mt-2 text-gray-900">0</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">Interviews Today</h3>
              <p className="text-4xl mt-2 text-gray-900">0</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">Waiting Candidates</h3>
              <p className="text-4xl mt-2 text-gray-900">0</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Candidate Interview Performance (Bar Chart Placeholder) */}
            <div className="col-span-1 md:col-span-2 bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Candidate Interview Performance</h3>
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Bar Chart Here (All values 0)</p>
              </div>
            </div>

            {/* Successful Candidates (Pie Chart Placeholder) */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Successful Candidates</h3>
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Pie Chart Here (100% Waiting)</p>
              </div>
            </div>
          </div>

          {/* Small Bar Chart */}
          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Candidate Status Distribution</h3>
            <div className="h-32 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Bar Chart Here (All values 0)</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
