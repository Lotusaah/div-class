import  React, { Fragment, useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import companyLogo from './Vlogo.png'


type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
  title: string;
};

const navigation: NavigationItem[] = [
  { name: 'P', href: '/', current: true, title: 'Positionality'},
  { name: 'R', href: '/Race', current: true, title: 'Race'},
  { name: 'G', href: '/Gender', current: true, title: 'Gender'},
  { name: 'S-O', href: '/Sexual-Orientation', current: true, title: 'Sexual Orientation'},
  { name: 'T-I', href: '/Transgender-Identities', current: true, title: 'Transgender Identities'},
  { name: 'C', href: '/Class', current: true, title: 'Class'},
  { name: 'A', href: '/Ability', current: true, title: 'Ability'},
  { name: 'N-O', href: '/National-Origin', current: true, title: 'National Origin'},
  { name: 'R', href: '/Religion', current: true, title: 'Religion'},
  { name: 'C', href: '/Conclusion', current: true, title: 'Conclusion'},
]


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const Dashboard = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const currentNavItem = navigation.find(item => item.href === location.pathname);
    setPageTitle(currentNavItem ? currentNavItem.title : 'ERROR PAGE');
  }, [location]);

  navigation.forEach((nav) => {if (nav.title === pageTitle) {
    nav.current = true;
  } else {
    nav.current = false;
  }
  });


  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-brand-blue">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 lg:pr-72">
                      <Link to="/">
                        <img
                          className="h-8 w-8 filter transition-filter duration-300 hover:drop-shadow-glow"
                          src={companyLogo}
                          alt="Your Company"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-900 bg-accent hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium duration-300 hover:drop-shadow-glow transition-all'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium duration-300 hover:stack-shadow-glow transition-all'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-secondary shadow-lg">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-4xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2 hover:to-white hover: transition-all duration-700">{pageTitle}</h1>
          </div>
        </header>
      </div>
    </>
  )
}