import { getAllLecturers } from "@/lib/api"
import Link from "next/link"

export default function Page(){
    const lecturers = getAllLecturers()

    return <>
    <h1 className="is-size-1 is-two-fifth my-4">Lectureres</h1>

    {
        lecturers.map(l=> <div  key={l.id}   className="coloumn"> 
        <p>{l.name}</p> 
        <p>{l.surname}</p> 
        <strong>{l.courseName}</strong> 
        <br></br>
        <Link href={'lecturers/edit/'+l.id}>edit</Link>
        <p>--------------------------</p>
        </div>
        )
    }
    </>
}