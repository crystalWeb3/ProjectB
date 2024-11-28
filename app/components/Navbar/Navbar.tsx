"use client";
import { Disclosure } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CustomLink from "../utils/CustomLink";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/legacy/image";
import { usePathname, useRouter } from "next/navigation";
import CurrencySelector from "../utils/CurrencySelector";
import { useAuth } from "../../../context/AuthContext";
import AuthNavBtn from "../utils/AuthNavBtn";
import AuthAvatarGroup from "../../components/utils/AuthAvatarGroup";

interface SettingTypes {
  icon: React.ReactNode;
  text?: string;
  onClick?: (...arg: any[]) => any;
}

interface NavigationItem {
  id: string;
  name: string;
  href: string;
  current: boolean;
}

interface CurrencyType {
  src?: string;
  name: string;
  sign: string;
}

const currencys: CurrencyType[] = [
  { src: "/images/navbar/us_flg.png", name: "USD $", sign: "$" },
  { src: "/images/navbar/cd_flg.png", name: "CAD $", sign: "$" },
  // { src: '/images/navbar/eu_flg.png', name: 'EUR', sign: '€'},
  { src: "/images/navbar/uk_flg.png", name: "GBP £", sign: "£" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get current path
  const { token, user } = useAuth();
  const [activeSection, setActiveSection] = useState("");
  const navigation: NavigationItem[] = [
    { id: "home", name: "Home", href: "/main/home", current: false },
    // { id: 'howitworks', name: 'How To Order', href: '/main/home#howitworks', current: false },
    { id: "services", name: "Services", href: "/main/service", current: false },
    // { id: 'pledge', name: 'Our Pledge To You', href: '/main/pledge', current: false },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        setActiveSection(visibleSection);

        const matchedLink = navigation.find(
          (link) => link.id === visibleSection && link.href.startsWith(pathname)
        );

        if (matchedLink) {
          window.history.pushState(null, "", matchedLink.href);
        } else if (!visibleSection) {
          window.history.pushState(null, "", pathname);
        }
      },
      { threshold: 0.1 }
    );

    // Observe sections relevant to theent page
    navigation
      .filter((link) => link.href.startsWith(pathname)) // Filter sections for the current page
      .forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

    return () => {
      observer.disconnect();
      console.log("Disconnected observer");
    };
  }, [pathname, navigation]);

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar ">
      <>
        <div className="mx-5">
          <div className="relative flex h-20 sm:h-22">
            <div className="flex flex-1 items-center">
              {/* LOGO */}

              <Link
                href="/"
                className="text-3xl sm:text-4xl font-semibold text-black inline-flex flex-shrink-0 items-center"
              >
                <span className="flex logo items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="80"
                    height="80"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="28"
                      fill="none"
                      stroke="#007DFC"
                      strokeWidth="5"
                    />

                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      fill="#ffffff"
                      stroke="#007DFC"
                      strokeWidth="3"
                    />
                    <circle cx="50" cy="50" r="5" fill="#007DFC" />
                    <path
                      d="M50 30 L58 50 L50 70 L42 50 Z"
                      fill="none"
                      stroke="#007DFC"
                      strokeWidth="2"
                    />

                    <path
                      d="M40 35 A20 20 0 0 1 60 35"
                      fill="none"
                      stroke="#007DFC"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                    <path
                      d="M60 65 A20 20 0 0 1 40 65"
                      fill="none"
                      stroke="#007DFC"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />

                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="6"
                        markerHeight="6"
                        refX="5"
                        refY="3"
                        orient="auto"
                      >
                        <path d="M0 0 L6 3 L0 6 Z" fill="#007DFC" />
                      </marker>
                    </defs>
                  </svg>
                </span>
                <span className="ml-3">MissilBets</span>
              </Link>

              {/* LINKS */}

              <div className="hidden 2xl:flex flex-1 items-center ml-4">
                <div className="flex justify-start ">
                  {navigation.map(({ id, href, name }) => {
                    const isActive =
                      activeSection === id ||
                      (pathname === href && !activeSection);
                    return (
                      <CustomLink
                        key={name}
                        href={href}
                        // onClick={() => router.push(href)}
                        classname={classNames(
                          isActive ? "text-xl text-[#007DFC]" : "",
                          "px-3 py-4 rounded-md text-lg font-normal"
                        )}
                        aria-current={href ? "page" : undefined}
                      >
                        {name}
                      </CustomLink>
                    );
                  })}
                </div>
              </div>
              {/* <NavSignUp /> */}
              <div className="hidden 2xl:inline-flex flex-row items-center">
                {token && user ? (
                  <div className="flex items-center gap-3">
                    {/* <span className='inline-flex items-center text-xl gap-1 text-md '>Currency: </span> */}
                    {/* <CurrencySelector currencys={currencys} /> */}
                    <AuthAvatarGroup />
                  </div>
                ) : (
                  <>
                    {/* <CurrencySelector currencys={currencys} /> */}
                    <AuthNavBtn />
                  </>
                )}
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <button
              className="block menubtn 2xl:hidden "
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 31 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.7031 18.7009C30.7031 19.6304 29.9496 20.3839 29.0201 20.3839H8.50523C7.57572 20.3839 6.82219 19.6304 6.82219 18.7009V18.7009C6.82219 17.7714 7.57572 17.0179 8.50523 17.0179H29.0201C29.9496 17.0179 30.7031 17.7714 30.7031 18.7009V18.7009ZM30.7031 10.2857C30.7031 11.2152 29.9496 11.9688 29.0201 11.9688H11.7803C10.8508 11.9688 10.0973 11.2152 10.0973 10.2857V10.2857C10.0973 9.35621 10.8508 8.60268 11.7803 8.60268H29.0201C29.9496 8.60268 30.7031 9.35621 30.7031 10.2857V10.2857ZM29.0201 0.1875C29.9496 0.1875 30.7031 0.941021 30.7031 1.87054V1.87054C30.7031 2.80005 29.9496 3.55357 29.0201 3.55357H2.09149C1.16198 3.55357 0.408458 2.80005 0.408458 1.87054V1.87054C0.408458 0.941021 1.16198 0.1875 2.09149 0.1875H29.0201Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              {/* <Drawerdata /> */}
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
