import Link from "next/link";
//import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-row justify-between items-start px-4">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4">KiiT Sync</h2>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet
          </p>
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5015 2.75C8.90459 2.75 2.75147 8.90312 2.75147 16.5C2.74898 19.3865 3.65588 22.2005 5.34342 24.5424C7.03095 26.8842 9.41335 28.635 12.1523 29.546C12.8398 29.6656 13.0983 29.2531 13.0983 28.8915C13.0983 28.5656 13.0805 27.4835 13.0805 26.3312C9.62647 26.9679 8.73272 25.4897 8.45772 24.7156C8.30235 24.3196 7.63272 23.1 7.04835 22.7727C6.5671 22.5156 5.8796 21.879 7.03047 21.8625C8.11397 21.8446 8.88672 22.8594 9.14522 23.2719C10.3827 25.3509 12.3586 24.7665 13.1492 24.4062C13.2702 23.5125 13.6305 22.9116 14.0265 22.5679C10.9671 22.2241 7.77022 21.0375 7.77022 15.7781C7.77022 14.2821 8.30235 13.046 9.1796 12.0835C9.0421 11.7397 8.56085 10.3304 9.3171 8.43975C9.3171 8.43975 10.468 8.07812 13.0983 9.84775C14.2178 9.53788 15.3743 9.38199 16.5358 9.38437C17.7046 9.38437 18.8733 9.53837 19.9733 9.84775C22.6037 8.06025 23.7546 8.43975 23.7546 8.43975C24.5108 10.3304 24.0296 11.7397 23.8921 12.0835C24.768 13.046 25.3015 14.2656 25.3015 15.7781C25.3015 21.0554 22.0881 22.2241 19.0287 22.5679C19.5265 22.9969 19.9568 23.8219 19.9568 25.1116C19.9568 26.95 19.939 28.4281 19.939 28.8929C19.939 29.2531 20.1975 29.6821 20.885 29.5446C23.6137 28.6221 25.9846 26.8676 27.6645 24.5278C29.3443 22.1879 30.2486 19.3804 30.2501 16.5C30.2501 8.90312 24.097 2.75 16.5001 2.75" fill="white"/>
</svg>

        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Sitemap</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Lorem ipsum dolor sit amet
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Lorem ipsum dolor sit amet
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Lorem ipsum dolor sit amet
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Lorem ipsum dolor sit amet
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Socials</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Instagram
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Facebook
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 flex justify-center md:justify-end items-center">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
              <img src="/kiitlogo.png" alt="KiiT Logo" className="h-10" />
              <img src="/ksaclogo.png" alt="KSAC Logo" className="h-10" />
            </div>
            <img src="/logo.png" alt="Konnexions Logo" className="h-10" />
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-white">
        All rights reserved. 2024
      </div>
    </footer>
  );
};

export default Footer;
