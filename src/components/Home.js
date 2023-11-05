import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Footer from './Footer';
import { motion } from 'framer-motion';



import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  {
    name: 'Services',
    href: '/services',
    current: false,
  
  },
  
  { name: 'Our Work', href: '/ourwork', current: false, sublinks: [
    { name: 'Mobile Development', href: '/services/service1' },
    { name: 'Web Development', href: '/services/service2' },
    { name: 'Database', href: '/services/service3' },
    { name: 'Machine Learning', href: '/services/service3' },
  ], },
  
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },
  { name: 'About Us', href: '/about', current: false },
  // Add more links as needed
];


const features = [
  {
    name: 'Mobile App Development',
    description:
      'Create cutting-edge mobile applications for Android and iOS platforms.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Full Stack Web Development',
    description:
      'End-to-end web development services, from front-end design to back-end implementation.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Machine Learning',
    description:
      'Leverage the power of AI and machine learning to gain insights and enhance your software.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Database Management',
    description:
      'Efficiently manage and optimize your data with our database solutions.',
    icon: ArrowPathIcon,
  },
  {
    name: 'DevOps',
    description:
      'Streamline your development and operations for faster and more reliable software delivery.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Quality Assurance and Testing',
    description:
      'Comprehensive testing services to ensure your software is robust, reliable, and bug-free.',
    icon: ArrowPathIcon,
  },
]
const services = [
  {
    title: 'Mobile App Development',
    description:
      'Create cutting-edge mobile applications for Android and iOS platforms.',
    icon: ArrowPathIcon, // Replace with the appropriate icon component
  },
  {
    title: 'Full Stack Web Development',
    description:
      'End-to-end web development services, from front-end design to back-end implementation.',
    icon: ArrowPathIcon, // Replace with the appropriate icon component
  },
  {
    title: 'Machine Learning',
    description:
      'Leverage the power of AI and machine learning to gain insights and enhance your software.',
    icon: ArrowPathIcon, // Replace with the appropriate icon component
  },
  {
    title: 'Database Management',
    description:
      'Efficiently manage and optimize your data with our database solutions.',
    icon: ArrowPathIcon, // Replace with the appropriate icon component
  },
  {
    title: 'DevOps',
    description:
      'Streamline your development and operations for faster and more reliable software delivery.',
    icon: ArrowPathIcon, // Replace with the appropriate icon component
  },
  {
    title: 'Quality Assurance and Testing',
    description:
      'Comprehensive testing services to ensure your software is robust, reliable, and bug-free.',
    icon: ArrowPathIcon, // Replace with the appropriate icon component
  },
  {
    title: 'Cloud Services',
    description:
      'Harness the power of cloud computing for scalable and flexible solutions.',
    icon: ArrowPathIcon, // Replace with the appropriate icon component
  },
  {
    title: 'UI/UX Design',
    description:
      'Create visually stunning and user-friendly interfaces for your applications.',
    icon: ArrowPathIcon, // Replace with the appropriate icon component
  },
];


// You can use this 'features' array to display your services on the homepage.



export default function Example() {
 
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src=""
                alt=""
              />
            </a>
            <h1 className="text-4xl font-bold text-indigo-600">FactorYze</h1>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
         
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Enhance your online business with our cutting-edge software solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Our software company is dedicated to providing innovative technology solutions that empower businesses to thrive in the digital era. We specialize in developing custom software, mobile applications, and web solutions tailored to meet your unique needs.
            </p>
            
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      
      <div>
      {/* Your existing code here */}
      <section className="bg-gray-900 text-white py-16">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-semibold leading-7 text-indigo-600">Empower Your Projects</h2>
    <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
      Comprehensive Solutions for Your Software Development Needs
    </p>
    <p className="mt-6 text-lg leading-8 text-gray-300">
      Elevate your projects with our expertise in mobile app development, full-stack web solutions, machine learning, database management, DevOps, and rigorous quality assurance and testing. We provide end-to-end services to bring your ideas to life and deploy robust applications seamlessly.
    </p>
  </div>
</section>


<section className="bg-gray-900 text-gray-100 py-16">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-indigo-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <i className={`text-4xl text-white ${service.icon} mb-4`}></i>
          <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
          <p className="text-gray-300">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>



      <Footer/>
    </div>
  )
}
