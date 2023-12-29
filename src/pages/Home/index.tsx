import { Header } from "../../components/Header";
import HeroImg from "../../assets/businessman.png"

export function Home() {
    return (
        <>
            <body className="w-full h-full">
                <Header/>
                <section className="flex items-center justify-center gap-16 border-2 border-red-500">
                    <div>
                        <h1 className="text-4xl text-center"> TEXTO DE EXEMPLO </h1>
                        <p className="text-center"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, provident. Architecto assumenda mollitia itaque ratione enim aperiam? Ullam nisi autem ab nulla ad qui. Velit officia quod dignissimos quasi tempore?</p>
                    </div>
                    <div>
                        <img className="" src={HeroImg}></img>
                    </div>
                </section>
            </body>
        </>
    )
}