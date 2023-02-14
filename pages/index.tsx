import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main>
        <div className="flex flex-col items-center">
          <Image
            width={119}
            height={28}
            src="/assets/logo.svg"
            alt="Logo"
          ></Image>
          <div className="py-7"></div>
          <Image
            width={414}
            height={153}
            src="/assets/tablet/image-hero.png"
            alt="Logo"
          ></Image>
          <div className="py-6"></div>
          <div className="justify-center px-6">
            <h2 className="text-center mainheading font-redhat">
              Group Chat for Everyone
            </h2>
          </div>

          <div className="py-3"></div>
          <div className="justify-center px-6">
            <p className="text-center text-lightgrey font-redhat subheading">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
          </div>
          <div className="py-4"></div>

          <button className="bg-cyan rounded-full w-48 h-14">
            <p className="text-white font-redhat ">Download</p>{" "}
            <p className="text-lightskyblue font-thin">v1.3</p>
          </button>
        </div>
      </main>
    </>
  );
}
