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
            <h2 className="mainheading text-center font-redhat">
              Group Chat for Everyone
            </h2>
          </div>

          <div className="py-3"></div>
          <div className="justify-center px-6">
            <p className="subheading text-center font-redhat text-lightgrey">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
          </div>
          <div className="py-4"></div>

          <button className=" flex h-14 w-48 flex-row items-center justify-center rounded-full bg-cyan  ">
            <p className="font-redhat font-bold text-white ">Download</p>
            <p className="pl-1 font-bold text-lightskyblue ">v1.3</p>
          </button>

          <div className=" pt-4 "></div>
          <button className="grid h-58px w-139px content-center rounded-full bg-purple opacity-90">
            <p className=" text-center font-redhat font-bold text-white">
              {" "}
              What is it?
            </p>
          </button>

          <div className="pt-16"></div>
          <div className="h-20 border border-lightgrey opacity-25"></div>
          <div className="grid h-14 w-14 content-center rounded-full border border-lightgrey opacity-25">
            <p className="text-center">01</p>{" "}
          </div>
          <div className="pt-16"></div>
          <div className="grid grid-flow-col grid-rows-2 items-center gap-6">
            <Image
              className="rounded-lg"
              width={150}
              height={150}
              src="/assets/desktop/image-woman-in-videocall.jpg"
              alt="Logo"
            ></Image>
            <Image
              className="rounded-lg"
              width={150}
              height={150}
              src="/assets/desktop/image-women-videochatting.jpg"
              alt="Logo"
            ></Image>
            <Image
              className="rounded-lg"
              width={150}
              height={150}
              src="/assets/desktop/image-men-in-meeting.jpg"
              alt="Logo"
            ></Image>
            <Image
              className="rounded-lg"
              width={150}
              height={150}
              src="/assets/desktop/image-man-texting.jpg"
              alt="Logo"
            ></Image>
          </div>

          <div className="pt-16"></div>
          <p className="font-redhat text-base font-black uppercase tracking-[.25em] text-cyan">
            Built for modern use
          </p>
          <div className="pt-6"></div>
          <p className="px-6 text-center font-redhat text-3xl font-black">
            Smarter meetings, all in one place
          </p>
          <div className="pt-8"></div>
          <p className=" px-6 text-center font-redhat text-base leading-[26px]">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
          <div className="pt-16"></div>
          <div className="h-20 border border-lightgrey opacity-25"></div>

          <div className="relative z-10 -mb-7 grid h-14 w-14 content-center rounded-full border border-lightgrey bg-white opacity-100 opacity-25">
            <p className="text-center ">02</p>{" "}
          </div>

          {/*  Picture -m-7*/}
          <div className="relative z-0 bg-cyan">
            <Image
              className="rounded-lg opacity-10 mix-blend-normal"
              width={375}
              height={428}
              src="/assets/mobile/image-footer.jpg"
              alt="Logo"
            ></Image>
          </div>
          <p>Experience more together</p>
          <p>
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>

          <button className=" flex h-14 w-48 flex-row items-center justify-center rounded-full bg-purple  ">
            <p className="font-redhat font-bold text-white ">Download</p>
            <p className="pl-1 font-bold text-lightskyblue ">v1.3</p>
          </button>
        </div>
      </main>
    </>
  );
}
