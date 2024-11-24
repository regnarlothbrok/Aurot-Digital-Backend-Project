'use client'

import { UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            CareerBoost AI
          </h1>
          <UserButton afterSignOutUrl="/"/>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-6 py-10">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h2>
          <p className="text-gray-600 text-lg">
            Create and start your AI-powered mock interviews
          </p>
        </div>

        {/* Add New Interview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AddNewInterview/>
        </div>

        {/* Interview List Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Your Interviews
          </h3>
          <InterviewList/>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default Dashboard;