import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-scroll";
import Logo from "../assets/brand/cm-logo.png";

const navigation = [
  { name: "ABOUT", to: "about", current: true },
  { name: "SERVICES", to: "services", current: false },
  { name: "WORK", to: "work", current: false },
  { name: "CONTACT", to: "contact", current: false },
];

export default function Navbar() {
  return (
    <>
      <div id="top" className="min-h-full">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-32 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-20" src={Logo} alt="Your Company" />
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className={
                              "text-[#6A6A5D] hover:bg-[#2C434D] hover:text-white cursor-pointer " +
                              "rounded-md px-6 py-2 text-lg font-medium"
                            }
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-[#2C434D] p-2 text-gray-400 hover:bg-[#a8a899] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6a6a5d]">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          close
                        </span>
                      ) : (
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          menu
                        </span>
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      as="a"
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className="text-[#6A6A5D] hover:bg-[#2C434D] hover:text-white
                        block rounded-md px-3 py-2 text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
