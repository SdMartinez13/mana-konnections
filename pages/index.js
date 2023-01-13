import Subscribe from "../components/Subscibe";

export default function Home() {
    return (
        <>
            <p className="text-gray-700 text-3xl mb-8 font-bold">Mana Konnections</p>
            <Subscribe />

            <div className="grid lg:grid-cols-3 gap-5 mb-16">
                <div className="rounded bg-white h-40 shadow-md">
                    <h1 className="flex justify-center p-16 text-red-400">Hello!!</h1>
                </div>
                <div className="rounded bg-white h-40 shadow-md">
                    <h1 className="flex justify-center p-16 text-red-400">Hello!!</h1>

                </div>
                <div className="rounded bg-white h-40 shadow-md">
                    <h1 className="flex justify-center p-16 text-red-400">Hello!!</h1>

                </div>
            </div>
            <div className="grid col-1 bg-white h-96 shadow-md">
                <h1 className="flex justify-center p-16 text-red-400">Hello!!</h1>

            </div>
        </>
    );
}
