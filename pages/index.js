import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import Signup from "../components/Signup";
import styles from "../styles/Home.module.css";
import { useState } from "react";
const NavbarItem = ({ title, classProps, link }) => {
  return (
    <a href={link} className={`mx-2 cursor-pointer btn-grad transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 ${classProps} p-1`}>
      <btn>{title}</btn>
    </a>
  );
};

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="grid grid-rows-1">
      <nav className="flex md:justify-center justify-between items-center p-4 gradient-bg-welcome">
        <div className="flex md:flex-[0.5] flex-initial justify-start text-gradient">
          <a href={"/"}>
            <Image src="/images/nav.jpg" width={70} height={70} alt="logo" className="w-32 cursor-pointer rounded-lg" />
          </a>
        </div>
        <div className="flex justify-between text-gray-900">
          <a href={"/"}>
            <Image src="/images/icon.png" width={200} height={64} alt="logo" className="w-32 cursor-pointer" />
          </a>
        </div>
      </nav>
        <div className="flex grid grid-cols-2 gap-4">
          <div className="ml-5">
            <Image src="/images/home.jpg" width="100%" height="100%" layout="responsive" objectFit="contain" alt="logo" className="cursor-pointer rounded-lg" />
          </div>
          <div>
            {isLogin && <Login setIsLogin={setIsLogin}/>}
            {!isLogin && <Signup setIsLogin={setIsLogin}/>}
          </div>
        </div>
    </div>
  );
}
