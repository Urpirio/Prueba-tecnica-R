import Image from "next/image";

import Logo from "@/../public/Logo-01.png";
import SectionImg from "@/../public/image background-01.png"

export default function page() {
  return (
    <body>
        <header className="flex justify-center items-center text-white  px-15">
            <div className="flex justify-start flex-grow basis-0">
                <Image className=" object-cover" height={110} src={Logo} alt="Logo"/>
            </div>
            <nav className="hidden sm:flex  flex-grow basis-0 justify-center">
                <ul className="flex gap-5 text-[16px] lg:text-xl font-light">
                    <li>Markert</li>
                    <li>News</li>
                    <li>Prices</li>
                    <li>Brokers</li>
                    <li>More</li>
                </ul>
            </nav>
            <div className="flex justify-end flex-grow basis-0">
                <button className=" py-2 w-30 rounded-3xl bg-[#01C2A5] text-white shadow-2xl shadow-black font-bold">login</button>
            </div>
        </header>
        <main>
            <section  className="flex flex-wrap sm:justify-around ">
                <article className="flex flex-col sm:justify-center gap-5  w-[40%] min-w-80  p-5">
                    <div className="w-30 flex flex-grow basis-0" >
                        <h1 className=" text-4xl sm:text-6xl font-bold text-[#01C2A5]">
                            Best Cryptcurrency <span className="text-amber-400">Makeplace</span></h1>
                    </div>
                    <div className=" text-[16px] sm:text-[18px] text-white flex flex-grow basis-0 items-center">
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolores qui id rerum autem sit dolore, sequi aliquid culpa eligendi, deserunt ad sed, sunt eum ea ullam nulla voluptatem magnam!
                        </p>
                    </div>
                    <div className="flex flex-grow basis-0 items-start">
                        <button className=" w-50 h-12  rounded-4xl text-[18px] font-bold bg-[#01C2A5] text-white shadow-2xl shadow-black">Get Started</button>
                    </div>
                </article>
                <div className="w-[40%] min-w-90 "  >
                    <Image className="w-[100%] h-[100%] object-contain" src={SectionImg} alt="imgen section 1"/>
                </div>
            </section>
        </main>
    </body>
  )
}
