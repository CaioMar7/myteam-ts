import { useEffect, useState } from "react"

export function Home() {

    interface IUser {
        login: string,
        password: string
    }

    const [userList, setUserList] = useState<IUser[]>([])

    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        
        const newUser: IUser = {login, password}
        setUserList(prevUserList => [... prevUserList, newUser])
    }

    useEffect( () => {
        const localUserList = localStorage.getItem('@userList')
        if(localUserList) {
            setUserList(JSON.parse(localUserList))
        }
    }, [])

    useEffect( () => {
        if (userList.length > 0) {
            localStorage.setItem('@userList', JSON.stringify(userList))
        } 
    }, [userList])

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <form className="flex flex-col gap-4 items-center justify-center border-2 border-gray-500 shadow h-60 w-96" onSubmit={(event) => handleSubmit(event)}>
                    <div className="flex justify-between items-center w-full px-10">
                            <label className="flex justify-between items-center font-bold"> Login </label>
                            <input className="mx-4 border-2 border-gray-300 px-1" type="text" name="login" onChange={(event) => setLogin(event.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center w-full px-10">
                            <label className="flex justify-between items-center font-bold"> Password </label>
                            <input className="mx-4 border-2 border-gray-300 px-1" type="password" name="login" onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <div className="flex gap-6">
                            <button className="mt-6 border-2 border-gray-500 h-12 w-24 font-bold" onClick={(event) => handleSubmit(event)}> Entrar </button>
                            <button className="mt-6 border-2 border-gray-500 h-12 w-24 font-bold"> Cancelar </button>
                        </div>
                </form>
            </div>
            <div>
               {
                userList && userList.map( (user:IUser, index:number) => (
                    <li key={index}> {`Login: ${user.login} / Password: ${user.password}`} </li>
                ))
               }
            </div>
        </>
    )
}