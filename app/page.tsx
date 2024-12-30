import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="h-[99.6dvh] flex items-center justify-center">
        <div className="absolute top-0">
          <h1 className=" font-bold text-TextColor text-[210px] uppercase mt-28 top-0 text-center">Fashion Meets </h1>
        </div>
        <div className="image relative ">
          <Image
            aria-hidden
            src="/Model.png"
            alt="Model Image"
            width={2500}
            height={2000}
            className=" w-full h-[99.9dvh] object-cover mx-auto block"
          />
        </div>
        <div className="Lux absolute text-center bottom-0">
          <h1 className="font-bold text-TextColor text-[210px] uppercase -mt-[54%] top-0 ">Luxury</h1>
          <Link href="/Products" ><button className=" block mx-auto uppercase py-4 px-12 w-[50%] text-xl font-semibold shadow-2xl rounded-2xl bg-TextColor/90 ">Shop Now! <span className="text-2xl font-bold ml-4">&#8594;</span></button></Link>
        </div>
      </div>
    </>
  );
}

