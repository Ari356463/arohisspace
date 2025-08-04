import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Moon+Time&display=swap" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/foda-display" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/blosta-script" rel="stylesheet" />
            </Head>
            <div className="bg-[url('/background.jpg')] w-full h-screen bg-cover bg-center">
                <div className="flex justify-center items-center h-screen">
                    <div className="text-center text-5xl space-y-4">
                        <h1 className="font-['MoonTime']">Hello this space is existing to serve its purpose</h1>
                        <h1 className="font-['MoonTime']">of directing Arohi's thoughts and her vision of</h1>
                        <h1 className="font-['MoonTime']">seeing the universe towards the existing humans</h1>
                        <h1 className="font-['MoonTime']">hopefully Arohi's visions would be a pretty sight to visit</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
