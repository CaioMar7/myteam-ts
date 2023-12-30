import { useEffect, useState } from "react"

export function Home() {

    interface IWorker {
        name: string,
        job: string,
        salary: number
        
    }

    const [workerList, setworkerList] = useState<IWorker[]>([])

    const [name, setName] = useState<string>("")
    const [job, setJob] = useState<string>("")
    const [salary, setSalary] = useState<number>(0)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        
        const newWorker: IWorker = {name, job, salary}
        setworkerList(prevworkerList => [... prevworkerList, newWorker])
    }

    useEffect( () => {
        const localworkerList = localStorage.getItem('@workerList')
        if(localworkerList) {
            setworkerList(JSON.parse(localworkerList))
        }
    }, [])

    useEffect( () => {
        if (workerList.length > 0) {
            localStorage.setItem('@workerList', JSON.stringify(workerList))
        } 
    }, [workerList])

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <form className="flex flex-col gap-4 items-center justify-center border-2 border-gray-500 shadow h-60 w-96" onSubmit={(event) => handleSubmit(event)}>
                    <div className="flex justify-between items-center w-full px-10">
                            <label className="flex justify-between items-center font-bold"> Nome </label>
                            <input className="mx-4 border-2 border-gray-300 px-1" type="text" name="name" onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center w-full px-10">
                            <label className="flex justify-between items-center font-bold"> Função </label>
                            <input className="mx-4 border-2 border-gray-300 px-1" type="text" name="job" onChange={(event) => setJob(event.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center w-full px-10">
                            <label className="flex justify-between items-center font-bold"> Salário </label>
                            <input className="mx-4 border-2 border-gray-300 px-1" type="number" name="salary" onChange={(event) => setSalary(Number(event.target.value))}/>
                        </div>
                        <div className="flex gap-6">
                            <button className="mt-6 border-2 border-gray-500 h-12 w-24 font-bold" onClick={(event) => handleSubmit(event)}> Entrar </button>
                            <button className="mt-6 border-2 border-gray-500 h-12 w-24 font-bold"> Cancelar </button>
                        </div>
                </form>
            </div>
            <div>
               {
                workerList && workerList.map( (worker:IWorker, index:number) => (
                    <li key={index}> {`Nome: ${(worker.name).toUpperCase()} / Função: ${(worker.job).toUpperCase()} / Salário: R$ ${worker.salary}`} </li>
                ))
               }
            </div>
        </>
    )
}