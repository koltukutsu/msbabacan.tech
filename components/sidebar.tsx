"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = {
  "/": {
    name: "home",
    x: 0,
    y: 0,
    w: "64px",
  },
  "/about": {
    name: "about",
    x: 64,
    y: 35,
    w: "65px",
  },
  "/tools": {
    name: "tools",
    x: 127,
    y: 69,
    w: "56px",
  },
  "/things": {
    name: "things",
    x: 189 ,
    y: 104,
    w: "70px",
  },
  "/resume": {
    name: "résumé",
    x: 253,
    y: 140,
    w: "80px",
  },
  "/guestbook": {
    name: "guestbook",
    x: 317,
    y: 174,
    w: "90px",
  },
};
// const navItems = {
//   "/": {
//     name: "home",
//     x: 0,
//     y: 0,
//     w: "64px",
//   },
//   "/about": {
//     name: "about",
//     x: 64,
//     y: 35,
//     w: "65px",
//   },
//   "/blog": {
//     name: "blog",
//     x: 127,
//     y: 69,
//     w: "56px",
//   },
//   "/tools": {
//     name: "tools",
//     x: 184,
//     y: 104,
//     w: "56px",
//   },
//   "/things": {
//     name: "things",
//     x: 240 ,
//     y: 140,
//     w: "70px",
//   },
//   "/resume": {
//     name: "résumé",
//     x: 310,
//     y: 174,
//     w: "80px",
//   },
//   "/guestbook": {
//     name: "guestbook",
//     x: 385,
//     y: 210,
//     w: "90px",
//   },
// };
function Logo() {
  return (
    <Link aria-label="Mehmet Semih BABACAN" href="/">
      <motion.svg
        width="91"
        height="47"
        viewBox="0 0 91 47"
        fill="none"
        className=" text-white h-[54px] md:h-[71px] pr-4"
      >
        <motion.path
          d="M56.908 45.132C56.908 45.6693 56.66 45.938 56.164 45.938C54.6347 45.938 53.126 45.8967 51.638 45.814C50.15 45.7313 48.662 45.69 47.174 45.69C46.4713 45.69 45.7687 45.7107 45.066 45.752C44.3633 45.752 43.6607 45.7727 42.958 45.814C42.2553 45.8553 41.5527 45.9173 40.85 46C40.1887 46.0413 39.5067 46.062 38.804 46.062C38.432 46.062 38.184 45.9587 38.06 45.752C37.9773 45.504 37.936 45.2353 37.936 44.946C37.936 44.7807 37.9773 44.6153 38.06 44.45C38.1427 44.2433 38.2873 44.14 38.494 44.14C38.618 44.0987 38.804 44.078 39.052 44.078C39.3413 44.078 39.6307 44.0987 39.92 44.14C40.2507 44.14 40.5607 44.14 40.85 44.14C41.4287 44.14 42.0693 44.078 42.772 43.954C43.516 43.83 43.9293 43.3753 44.012 42.59C44.0533 42.466 44.0533 42.342 44.012 42.218C44.012 42.094 44.012 41.97 44.012 41.846V3.84H43.64C42.0693 8.09733 40.4367 12.334 38.742 16.55C37.0473 20.7247 35.3527 24.8993 33.658 29.074C32.9967 30.7687 32.3147 32.4633 31.612 34.158C30.9093 35.8527 30.2067 37.5473 29.504 39.242C29.2147 39.986 28.9253 40.7507 28.636 41.536C28.388 42.3213 28.078 43.0653 27.706 43.768C27.4167 44.2227 26.962 44.45 26.342 44.45C25.7633 44.45 25.3293 44.2227 25.04 43.768C24.7093 43.148 24.3993 42.4867 24.11 41.784C23.862 41.0813 23.5933 40.3993 23.304 39.738C22.684 38.2913 22.0847 36.8653 21.506 35.46C20.9273 34.0547 20.3487 32.6493 19.77 31.244C17.8687 26.6973 15.9673 22.1713 14.066 17.666C12.206 13.1193 10.346 8.59333 8.486 4.088C8.486 10.4947 8.486 16.922 8.486 23.37C8.52733 29.7767 8.548 36.1833 8.548 42.59C8.548 43.4167 8.89933 43.892 9.602 44.016C10.346 44.14 11.028 44.202 11.648 44.202C12.0613 44.202 12.4747 44.1813 12.888 44.14C13.3013 44.0987 13.7147 44.078 14.128 44.078C14.3347 44.078 14.438 44.202 14.438 44.45C14.438 44.6567 14.4173 44.946 14.376 45.318C14.3347 45.69 14.1693 45.876 13.88 45.876C12.764 45.876 11.6273 45.8553 10.47 45.814C9.354 45.7313 8.238 45.69 7.122 45.69C6.04733 45.69 4.952 45.7313 3.836 45.814C2.76133 45.8553 1.68667 45.876 0.612 45.876C0.570667 45.7933 0.529333 45.7313 0.488 45.69C0.488 45.6073 0.467333 45.5453 0.426 45.504V44.946C0.426 44.5327 0.508667 44.3053 0.674 44.264C0.839333 44.2227 1.06667 44.202 1.356 44.202C1.68667 44.202 1.99667 44.2227 2.286 44.264C2.57533 44.264 2.86467 44.264 3.154 44.264C3.774 44.264 4.43533 44.1813 5.138 44.016C5.84067 43.8507 6.21267 43.3753 6.254 42.59C6.33667 41.9287 6.35733 41.2673 6.316 40.606C6.316 39.9033 6.316 39.2213 6.316 38.56C6.316 37.2373 6.29533 35.9147 6.254 34.592C6.254 33.228 6.254 31.8847 6.254 30.562C6.254 26.1393 6.27467 21.7373 6.316 17.356C6.39867 12.9747 6.44 8.59333 6.44 4.212C6.44 3.42667 6.068 2.91 5.324 2.662C4.58 2.414 3.898 2.29 3.278 2.29C2.906 2.29 2.534 2.31066 2.162 2.352C1.79 2.39333 1.418 2.414 1.046 2.414C0.798 2.414 0.632667 2.29 0.55 2.042C0.467333 1.794 0.426 1.58733 0.426 1.422C0.426 0.843331 0.653333 0.553998 1.108 0.553998C2.18267 0.553998 3.278 0.595332 4.394 0.678C5.51 0.719332 6.60533 0.739999 7.68 0.739999C9.788 0.739999 11.896 0.677998 14.004 0.553998L28.698 35.894C30.9713 29.9833 33.348 24.1347 35.828 18.348C38.308 12.52 40.602 6.63 42.71 0.678C43.7433 0.719332 44.756 0.760665 45.748 0.801998C46.7813 0.801998 47.8147 0.801998 48.848 0.801998C50.088 0.801998 51.3073 0.760665 52.506 0.678C53.746 0.553999 54.986 0.491998 56.226 0.491998C56.474 0.491998 56.6187 0.615998 56.66 0.863997C56.7013 1.112 56.722 1.31866 56.722 1.484C56.722 1.64933 56.7013 1.856 56.66 2.104C56.6187 2.352 56.474 2.476 56.226 2.476C55.6887 2.476 55.172 2.45533 54.676 2.414C54.18 2.37266 53.684 2.352 53.188 2.352C52.692 2.352 52.072 2.476 51.328 2.724C50.6253 2.93067 50.274 3.344 50.274 3.964V42.094C50.274 43.0447 50.5427 43.644 51.08 43.892C51.6587 44.0987 52.382 44.202 53.25 44.202C53.746 44.202 54.242 44.1813 54.738 44.14C55.234 44.0987 55.7507 44.078 56.288 44.078C56.6187 44.078 56.8047 44.202 56.846 44.45C56.8873 44.698 56.908 44.9253 56.908 45.132ZM70.9785 41.424C70.9785 42.384 70.7651 43.1733 70.3385 43.792C69.9118 44.3893 69.3571 44.848 68.6745 45.168C67.9918 45.488 67.2451 45.712 66.4345 45.84C65.6238 45.968 64.8345 46.032 64.0665 46.032C63.3625 46.032 62.6585 45.9573 61.9545 45.808C61.2718 45.6587 60.5785 45.552 59.8745 45.488C59.7251 44.912 59.5758 44.336 59.4265 43.76C59.2985 43.184 59.1491 42.6187 58.9785 42.064C58.9571 42 58.9038 41.8507 58.8185 41.616C58.7545 41.3813 58.7225 41.2533 58.7225 41.232C58.7225 41.0613 58.7758 40.944 58.8825 40.88C58.9891 40.7947 59.1171 40.752 59.2665 40.752C59.4158 40.752 59.5225 40.8053 59.5865 40.912C59.7145 41.0613 59.8211 41.264 59.9065 41.52C60.0131 41.776 60.1091 42 60.1945 42.192C60.3651 42.5333 60.5145 42.8 60.6425 42.992C60.7705 43.1627 60.9731 43.3867 61.2505 43.664C62.0825 44.5387 63.1171 44.976 64.3545 44.976C65.0371 44.976 65.6558 44.9013 66.2105 44.752C66.7865 44.6027 67.2451 44.3253 67.5865 43.92C67.9278 43.4933 68.0985 42.8853 68.0985 42.096C68.0985 41.4133 67.8851 40.848 67.4585 40.4C67.0318 39.9307 66.4771 39.5147 65.7945 39.152C65.1331 38.7893 64.4291 38.4373 63.6825 38.096C62.9358 37.7547 62.2211 37.3813 61.5385 36.976C60.8771 36.5493 60.3331 36.0373 59.9065 35.44C59.4798 34.8427 59.2665 34.1173 59.2665 33.264C59.2665 32.2187 59.5331 31.3653 60.0665 30.704C60.6211 30.0427 61.3251 29.552 62.1785 29.232C63.0318 28.8907 63.9171 28.72 64.8345 28.72C65.4318 28.72 65.9651 28.7947 66.4345 28.944C66.9251 29.0933 67.4371 29.264 67.9705 29.456C68.1411 29.52 68.3118 29.5627 68.4825 29.584C68.6531 29.6053 68.8238 29.616 68.9945 29.616C69.1011 29.616 69.1971 29.616 69.2825 29.616C69.3678 29.616 69.4531 29.6053 69.5385 29.584C69.6025 29.968 69.6558 30.3627 69.6985 30.768C69.7625 31.152 69.8158 31.5467 69.8585 31.952C69.8798 32.1013 69.9011 32.2827 69.9225 32.496C69.9651 32.688 69.9865 32.8693 69.9865 33.04C69.9865 33.1893 69.9545 33.3493 69.8905 33.52C69.8265 33.6693 69.6985 33.744 69.5065 33.744C69.3571 33.744 69.2291 33.7333 69.1225 33.712C69.0371 33.6693 68.9625 33.5733 68.8985 33.424C68.7918 33.2107 68.6958 32.9867 68.6105 32.752C68.5465 32.496 68.4718 32.2613 68.3865 32.048C68.1091 31.3013 67.6291 30.704 66.9465 30.256C66.2638 29.7867 65.5278 29.552 64.7385 29.552C63.7358 29.552 62.9785 29.8507 62.4665 30.448C61.9545 31.024 61.6985 31.8027 61.6985 32.784C61.6985 33.1253 61.7838 33.456 61.9545 33.776C62.1465 34.096 62.3598 34.3733 62.5945 34.608C63.0425 35.0347 63.5651 35.3653 64.1625 35.6C64.7811 35.8347 65.3678 36.0693 65.9225 36.304C66.6478 36.624 67.3945 37.008 68.1625 37.456C68.9518 37.904 69.6131 38.448 70.1465 39.088C70.7011 39.728 70.9785 40.5067 70.9785 41.424ZM87.3397 36.976C87.3397 36.208 87.2651 35.4293 87.1157 34.64C86.9664 33.8507 86.7211 33.136 86.3797 32.496C86.0384 31.8347 85.5584 31.3013 84.9397 30.896C84.3424 30.4907 83.5744 30.288 82.6357 30.288C82.2304 30.288 81.7397 30.4053 81.1637 30.64C80.6091 30.8533 80.1824 31.1093 79.8837 31.408C79.4784 31.792 79.1691 32.208 78.9557 32.656C78.7424 33.104 78.6251 33.616 78.6037 34.192L78.5717 39.568C78.5717 40.1653 78.5717 40.7733 78.5717 41.392C78.5717 41.9893 78.5717 42.5973 78.5717 43.216C78.5717 43.3653 78.5824 43.568 78.6037 43.824C78.6464 44.0587 78.6891 44.2293 78.7317 44.336C78.9024 44.6773 79.2331 44.9013 79.7237 45.008C80.2357 45.0933 80.6517 45.136 80.9717 45.136C82.1237 45.136 83.1051 44.9013 83.9157 44.432C84.7264 43.9627 85.3771 43.3333 85.8677 42.544C86.3797 41.7547 86.7531 40.88 86.9877 39.92C87.2224 38.9387 87.3397 37.9573 87.3397 36.976ZM90.5397 37.008C90.5397 38.7147 90.1557 40.2507 89.3877 41.616C88.6411 42.9813 87.5957 44.0587 86.2517 44.848C84.9291 45.616 83.3931 46 81.6437 46C80.8757 46 80.1077 45.8933 79.3397 45.68C78.5717 45.4667 77.8464 45.36 77.1637 45.36C77.0144 45.36 76.8544 45.3707 76.6837 45.392C76.5131 45.4133 76.3424 45.424 76.1717 45.424C75.8091 45.424 75.6277 45.232 75.6277 44.848C75.6277 44.72 75.6491 44.5707 75.6917 44.4C75.7344 43.9947 75.7557 43.5893 75.7557 43.184C75.7557 42.7787 75.7664 42.3733 75.7877 41.968C75.7877 41.4987 75.7877 41.04 75.7877 40.592C75.8091 40.1227 75.8197 39.6533 75.8197 39.184C75.8197 36.624 75.7984 34.064 75.7557 31.504C75.7344 28.944 75.7237 26.384 75.7237 23.824C75.7237 23.5253 75.6277 23.3333 75.4357 23.248C75.2437 23.1627 75.0197 23.12 74.7637 23.12C74.4864 23.12 74.1984 23.1413 73.8997 23.184C73.6011 23.2053 73.3024 23.216 73.0037 23.216C72.9184 23.216 72.8224 23.184 72.7157 23.12C72.6304 23.0347 72.5877 22.9387 72.5877 22.832C72.5877 22.704 72.6517 22.6187 72.7797 22.576C72.9077 22.512 73.0144 22.4693 73.0997 22.448C73.8464 22.2987 74.5931 22.1707 75.3397 22.064C76.1077 21.9573 76.8544 21.808 77.5797 21.616C77.7077 21.5733 77.8357 21.5307 77.9637 21.488C78.1131 21.424 78.2517 21.392 78.3797 21.392C78.5291 21.392 78.5931 21.488 78.5717 21.68C78.5717 21.872 78.5717 22.0213 78.5717 22.128V31.056C79.2544 30.48 80.0437 30 80.9397 29.616C81.8571 29.232 82.7637 29.04 83.6597 29.04C85.1744 29.04 86.4437 29.4133 87.4677 30.16C88.4917 30.9067 89.2597 31.888 89.7717 33.104C90.2837 34.2987 90.5397 35.6 90.5397 37.008Z"
          fill="currentColor"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname();
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
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
                    className="absolute  bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test2"
                    initial={{ opacity: 0, y: navItems[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: navItems[pathname].y,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                {/* Mobile version, hidden on desktop, animates x axis */}
                <div className="block md:hidden">
                  <motion.div
                    className="absolute  bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test"
                    initial={{ opacity: 0, x: navItems[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: navItems[pathname].x,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: "spring",
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
                    "transition-all hover:text-neutral-200 py-[5px] px-[10px]",
                    {
                      "text-neutral-500": !isActive,
                      "font-bold": isActive,
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
