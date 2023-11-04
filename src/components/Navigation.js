import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white text-3xl font-bold">
              FactorYz{' '}
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) =>
                item.sublinks ? (
                  <ServicesDropdown key={item.name} item={item} />
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover-bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="hidden sm:flex space-x-4">
            {navigation.map((item) =>
              item.sublinks ? (
                <ServicesDropdown key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover-bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function ServicesDropdown({ item }) {
  return (
    <Menu as="div" className="relative inline-block text-left" key={item.name}>
      <div>
        <span className="rounded-md shadow-sm">
          <Menu.Button
            as="button"
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover-bg-gray-700 hover:text-white',
              'flex items-center rounded-md px-3 py-2 text-sm font-medium focus:outline-none'
            )}
          >
            {item.name}
            <ChevronDownIcon className="h-5 w-5 ml-2 mt-1" aria-hidden="true" />

          </Menu.Button>
        </span>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 mx-2 mt-2 origin-top-left absolute left-0 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {item.sublinks.map((sublink) => (
              <Menu.Item key={sublink.name}>
                {({ active }) => (
                  <Link
                    to={sublink.href}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {sublink.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}


export default Navbar;
