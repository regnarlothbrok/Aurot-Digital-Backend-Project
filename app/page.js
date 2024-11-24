import React from 'react'
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub, FaRocket, FaChartLine, FaBrain, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>CareerBoost AI</title>
        <meta name="description" content="Transform your career with AI-powered professional development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Floating Header */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            CareerBoost AI
          </h1>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Solutions</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">Success Stories</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a>
            <a href="/dashboard" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:opacity-90 transition-opacity">
              Get Started
            </a>
          </nav>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section with Animated Background */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
          <div className="container mx-auto px-6 py-32 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Transform Your Career with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    AI-Powered Growth
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  Unlock your potential with personalized career guidance powered by cutting-edge artificial intelligence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/dashboard" 
                     className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-200">
                    Start Free Trial
                  </a>
                  <a href="#features"
                     className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="aspect-square rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-20 absolute -top-10 -right-10 animate-pulse" />
                <div className="relative z-10 rounded-2xl shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100 p-8 aspect-square flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                      <FaLaptopCode className="w-12 h-12 text-purple-600" />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                      <FaBrain className="w-12 h-12 text-blue-600" />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                      <FaChartLine className="w-12 h-12 text-purple-600" />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                      <FaUserGraduate className="w-12 h-12 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Cards */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">Supercharge Your Career Growth</h2>
              <p className="text-xl text-gray-600">
                Our AI-powered platform provides the tools and insights you need to reach your professional goals.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaBrain className="w-8 h-8" />,
                  title: "AI Skill Analysis",
                  description: "Get detailed insights into your skillset and personalized recommendations for improvement."
                },
                {
                  icon: <FaRocket className="w-8 h-8" />,
                  title: "Career Acceleration",
                  description: "Access AI-driven strategies and tools to fast-track your professional development."
                },
                {
                  icon: <FaChartLine className="w-8 h-8" />,
                  title: "Progress Tracking",
                  description: "Monitor your growth with comprehensive analytics and achievement milestones."
                }
              ].map((feature, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials with Modern Cards */}
        <section id="testimonials" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "CareerBoost AI's personalized guidance helped me transition into tech and land my dream job at a leading company.",
                  author: "Michael Chen",
                  role: "Software Engineer",
                  icon: <FaLaptopCode className="w-8 h-8 text-purple-600" />
                },
                {
                  quote: "The AI-powered skill assessments and coaching completely transformed my leadership capabilities.",
                  author: "Emma Rodriguez",
                  role: "Product Manager",
                  icon: <FaUserGraduate className="w-8 h-8 text-blue-600" />
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">{testimonial.icon}</div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    </div>
                    <div>
                      <p className="font-semibold text-purple-600">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with Modern Design */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Contect />
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                CareerBoost AI
              </h3>
              <p className="text-gray-400 mt-2">Empowering careers through AI innovation</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 CareerBoost AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page