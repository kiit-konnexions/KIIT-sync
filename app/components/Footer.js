import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const githubUrl = "https://github.com/";
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-row justify-between items-start px-4">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h2 className="text-xl font-bold mb-4">KiiT Sync</h2>
                    <p className="text-gray-400 mb-4">
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    </p>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{ color: "#fff" }} />
                    </a>
                </div>
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h2 className="text-xl font-bold mb-4">Sitemap</h2>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <Link href="#" className="hover:underline">Lorem ipsum dolor sit amet</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="hover:underline">Lorem ipsum dolor sit amet</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="hover:underline">Lorem ipsum dolor sit amet</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="hover:underline">Lorem ipsum dolor sit amet</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h2 className="text-xl font-bold mb-4">Socials</h2>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <Link href="#" className="hover:underline">Instagram</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="hover:underline">Facebook</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="hover:underline">LinkedIn</Link>
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
}

export default Footer;
