import { useEffect, useState } from "react"

export function Home() {

    interface IWorker {
        id: number    ,
        name: string,
        job: string,
        section: string,
        salary: number
    }

    const [workerList, setworkerList] = useState<IWorker[]>([])

    const [name, setName] = useState<string>("")
    const [job, setJob] = useState<string>("")
    const [section, setSection] = useState<string>("")
    const [salary, setSalary] = useState<number>(0)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        
        const newWorker: IWorker = {id: workerList.length + 1, name, job, section, salary}
        setworkerList(prevworkerList => [... prevworkerList, newWorker])
        resetStates()
    }

    const resetStates = () => {
        setName("")
        setJob("")
        setSection("")
        setSalary(0)
    }

    const removeWorker = (id:number) : void => {
        const newWorkerList = workerList.filter( (worker) => worker.id != id) 
        setworkerList(newWorkerList)
        localStorage.setItem('@workerList', JSON.stringify(newWorkerList))
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
            <div className="">
                <form className="flex flex-col gap-4 items-center justify-center border-2 border-gray-500 shadow h-full w-96 py-8" onSubmit={(event) => handleSubmit(event)}>
                    <div className="flex justify-between items-center w-full px-10">
                            <label className="flex justify-between items-center font-bold"> Nome </label>
                            <input className="mx-4 border-2 border-gray-300 px-1" type="text" value={name} name="name" onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center w-full px-10">
                            <label className="flex justify-between items-center font-bold"> Função </label>
                            <input className="mx-4 border-2 border-gray-300 px-1" type="text" value={job} name="job" onChange={(event) => setJob(event.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center w-full px-10">
                            <label className="flex justify-between items-center font-bold"> Setor </label>
                            <input className="mx-4 border-2 border-gray-300 px-1" type="text" value={section} name="setor" onChange={(event) => setSection(event.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center w-full px-10">
                            <label className="flex justify-between items-center font-bold"> Salário </label>
                            <input className="mx-4 border-2 border-gray-300 px-1" type="number" value={salary} name="salary" onChange={(event) => setSalary(Number(event.target.value))}/>
                        </div>
                        <div className="flex gap-6">
                            <button className="mt-6 border-2 border-gray-500 h-12 w-36 font-bold" onClick={(event) => handleSubmit(event)}> Adicionar a lista </button>
                            <button className="mt-6 border-2 border-gray-500 h-12 w-24 font-bold"> Cancelar </button>
                        </div>
                </form>
            </div>
            <div>
               {
                workerList && workerList.map( (worker:IWorker, index:number) => (
                    <li key={index}> {`ID: ${worker.id} - Nome: ${(worker.name).toUpperCase()} / Função: ${(worker.job).toUpperCase()} / Setor: ${section} / Salário: R$ ${worker.salary}`} <button onClick={() => removeWorker(worker.id)}> X <button/> </button></li>
                ))
               }
            </div>
        </>
    )
}