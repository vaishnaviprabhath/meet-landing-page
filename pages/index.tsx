import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main>
        <div className="flex flex-col items-center pt-4">
          <Image
            width={119}
            height={28}
            src="/assets/logo.svg"
            alt="Logo"
          ></Image>
          <div className="py-7"></div>
        </div>

        <div className="">
          <div className="lg:flex lg:flex-row">
            <div className=" lg:hidden">
              <Image
                className="mx-auto"
                width={414}
                height={153}
                src="/assets/tablet/image-hero.png"
                alt="Logo"
              ></Image>
            </div>
            <div className="hidden  lg:block lg:overflow-hidden">
              <Image
                width={414}
                height={153}
                src="/assets/desktop/image-hero-left.png"
                alt="Logo"
              ></Image>
            </div>
            <div className="lg:px-[88px] lg:pt-[61px]">
              <div className="py-6 px-6 lg:py-0 lg:px-0">
                <h2 className="mainheading text-center font-redhat">
                  Group Chat for Everyone
                </h2>
              </div>

              <div className="py-3 "></div>

              <div className=" px-6 lg:px-0">
                <p className="subheading text-center font-redhat text-lightgrey">
                  Meet makes it easy to connect with others face-to-face
                  virtually and collaborate across any device.
                </p>
              </div>

              <div className="py-4 "></div>

              <div className="flex flex-col items-center justify-center md:flex-row">
                <button className="flex h-14 w-48 flex-row items-center justify-center rounded-full bg-cyan  ">
                  <p className="font-redhat font-bold text-white ">Download</p>
                  <p className="pl-1 font-bold text-lightskyblue ">v1.3</p>
                </button>

                <div className="pt-4 md:px-[16px]"></div>
                <button className="grid h-58px w-139px content-center rounded-full bg-purple opacity-90">
                  <p className=" text-center font-redhat font-bold text-white">
                    {" "}
                    What is it?
                  </p>
                </button>
              </div>
            </div>
            <div className="hidden  lg:block lg:overflow-hidden">
              <Image
                width={414}
                height={153}
                src="/assets/desktop/image-hero-right.png"
                alt="Logo"
              ></Image>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <div className="pt-16"></div>
          <div className="h-20 border border-lightgrey opacity-25"></div>
          <div className="grid h-14 w-14 content-center rounded-full border border-lightgrey opacity-25">
            <div className="opacity-100">
              <p className="text-center font-redhat text-base font-black  text-lightgrey opacity-100">
                01
              </p>{" "}
            </div>
          </div>
          <div className="pt-16"></div>
          <div className="grid grid-flow-col grid-rows-2 items-center gap-6 md:grid-rows-1">
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

          <div className="relative z-10 -mb-7 grid h-14 w-14 content-center rounded-full  border-lightgrey bg-white opacity-100">
            <p className="text-center ">02</p>{" "}
          </div>

          {/*  Picture -m-7*/}
          <footer className="relative z-0 h-full bg-cyan">
            <div>
              <Image
                className="absolute h-full w-full object-cover opacity-10 mix-blend-normal first-line:rounded-lg md:hidden "
                width={375}
                height={428}
                src="/assets/mobile/image-footer.jpg"
                alt="Logo"
              ></Image>
              <Image
                className="absolute hidden h-full w-full object-cover opacity-10 mix-blend-normal first-line:rounded-lg md:block "
                width={768}
                height={428}
                src="/assets/tablet/image-footer.jpg"
                alt="Logo"
              ></Image>
            </div>
            <p className="pt-[96px] text-center font-redhat text-3xl font-black text-white">
              Experience more together
            </p>

            <p className="px-[24px] pt-[24px] text-center font-redhat text-lg leading-[26px] text-white">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <div className="pt-[32px]"></div>
            <div className="mb-[72px] flex justify-center">
              <button className="flex h-14 w-48 items-center justify-center rounded-full bg-purple ">
                <p className="font-redhat font-bold text-white ">Download</p>
                <p className="pl-1 font-bold text-lightpurple">v1.3</p>
              </button>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
