'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'about',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/blog': {
    name: 'blog',
    x: 127,
    y: 69,
    w: '56px',
  },
  '/tools': {
    name: 'tools',
    x: 127,
    y: 104,
    w: '56px',
  },
  '/resume': {
    name: 'résumé',
    x: 182,
    y: 140,
    w: '100px',
  },
  '/guestbook': {
    name: 'guestbook',
    x: 182,
    y: 174,
    w: '100px',
  },
};

function Logo() {
  return (
    <Link aria-label="Mehmet Semih BABACAN" href="/">
      {/* <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 232 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M232 314.998H129.852L232 232.887V314.998Z"
          fill="currentColor"
        />
      </motion.svg> */}
     <motion.svg width="52" height="49" viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect 
        x="2.16891" 
        y="1.37167" 
        width="7.11983" 
        height="38.9026" 
        fill="black"
        initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'linear',
            stiffness: 50,
          }}
      />
      <motion.rect 
        x="42.04" 
        y="1.37167" 
        width="7.11983" 
        height="38.9026" 
        fill="currentColor"
        initial={{ x: +200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'linear',
            stiffness: 50,
          }}
      />
      <motion.path 
        d="M8.71557 22.24L9.23268 1.42756L26.3763 23.3601L8.71557 22.24Z" 
        fill="currentColor"
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 50,
        }}
      />
      <motion.path 
        d="M43.1427 22.7677L42.05 1.3816L26.3764 23.3601L43.1427 22.7677Z" 
        fill="currentColor"
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 50,
        }}
      />
      <motion.path 
        d="M1.72061 40.7631L9.33081 32.1359L12.6001 43.2391L6.62031 47.5104L1.72061 40.7631Z" 
        fill="white"
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 50,
        }}
      />
      <motion.path 
        d="M49.4112 40.3258L41.9589 32.6887L40.7904 44.0934L46.7701 43.2391L49.4112 40.3258Z" 
        fill="white"
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 50,
        }}
      />
    </motion.svg>

    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname();
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {navItems[pathname] ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <div className="hidden md:block">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test2"
                    initial={{ opacity: 0, y: navItems[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: navItems[pathname].y,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                {/* Mobile version, hidden on desktop, animates x axis */}
                <div className="block md:hidden">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test"
                    initial={{ opacity: 0, x: navItems[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: navItems[pathname].x,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]',
                    {
                      'text-neutral-500': !isActive,
                      'font-bold': isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
