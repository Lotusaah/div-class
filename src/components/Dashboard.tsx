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
  { name: 'E', href: '/Ethnicity', current: true, title: 'Ethnicity'},
  { name: 'N-O', href: '/National-Origin', current: true, title: 'National Origin'},
  { name: 'S', href: '/Sex', current: true, title: 'Sex'},
  { name: 'G', href: '/Gender', current: true, title: 'Gender'},
  { name: 'S-O', href: '/Sexual-Orientation', current: true, title: 'Sexual Orientation'},
  { name: 'C', href: '/Class', current: true, title: 'Class'},
  { name: 'D', href: '/Disability', current: true, title: 'Disability'},
  { name: 'R', href: '/Religion', current: true, title: 'Religion'},
]


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const Dashboard = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  const [hoverFeature, setHoverFeature] = useState(Boolean);

  //useEffect(() => {
  //  const currentNavSelection = navigation.find(item => item.href === location.)
  //})

  useEffect(() => {
    const currentNavItem = navigation.find(item => item.href === location.pathname);
    setPageTitle(currentNavItem ? currentNavItem.title : 'Default Page Title');
  }, [location]);
  
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
        <Disclosure as="nav" className="bg-brand-blue shadow">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
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
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
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
                        'block rounded-md px-3 py-2 text-base font-medium'
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

        <header className="bg-secondary shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{pageTitle}</h1>
          </div>
        </header>
      </div>
    </>
  )
}