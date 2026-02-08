import Link from "next/link";

import LogoSquare from "components/logo-square";
import ThemeToggle from "components/theme-toggle";

const { SITE_NAME } = process.env;

export default async function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <div className="mx-auto w-full px-6 py-12 text-sm md:px-4 lg:px-6 xl:px-12 2xl:px-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 lg:items-start">
          <div className="flex items-center gap-2 lg:col-span-1">
            <Link
              className="flex items-center gap-2 text-black dark:text-white"
              href="/"
            >
              <LogoSquare size="sm" />
              <span className="uppercase">{SITE_NAME}</span>
            </Link>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-black dark:text-white">
              Shop
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/search"
                  className="hover:text-black dark:hover:text-white"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="hover:text-black dark:hover:text-white"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-black dark:text-white">
              About
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white"
                >
                  Our mission
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-black dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-black dark:text-white">
              Customer care
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/shipping-returns"
                  className="hover:text-black dark:hover:text-white"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/repairs"
                  className="hover:text-black dark:hover:text-white"
                >
                  Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/guarantee"
                  className="hover:text-black dark:hover:text-white"
                >
                  1 Month Guarantee
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-black dark:hover:text-white"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-black dark:text-white">
              Follow us
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-end lg:col-span-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
