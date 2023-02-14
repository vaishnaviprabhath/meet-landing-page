import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Styles</title>
      </Head>
      <main>
        <h1 className="font-redhat text-cyan">o Morbi in</h1>
        <p className="text-grey ">Prabhath</p>
        <p className="text-purple">Prabhath</p>
        <p className="text-lightpurple">Prabhath</p>
        <p className="text-grey">Prabhath</p>
        <p className="text-lightgrey">Prabhath</p>
        <p className="text-white">Prabhath</p>
        <div className="pt-11"></div>
        <p className="widetext text-grey">Prabhath</p>

        <div className=" relative z-10 -mb-7  h-118px bg-purple">
          asdassaddsadasdasd
        </div>
        <div className="relative  z-0  h-118px bg-cyan">asdassaddsadasdasd</div>
      </main>
    </>
  );
}
