import { handleUpdate } from "@/lib/actions"
import { getById } from "@/lib/api"
interface IProps{
    params:{id:number}
}
export default function Page(props:IProps){

const lecturer = getById(props.params.id)

    return <div>
    <h1 className="is-size-5">Edit Details</h1>
   <div className="columns">
        <div className="is-two-fifth my-4">
            <form className="box" action={handleUpdate} >
                <div className="field my-4">
                    <input
                    type="text"
                    name="name"
                    placeholder="Enter a name"
                    className="input is-primary"
                    defaultValue={lecturer.name}
                    />
                </div>
                <div className=" field my-4">
                    <input
                    type="text"
                    name="surname"
                    placeholder="Enter a surname"
                    className="input is-primary"
                    defaultValue={lecturer.surname}

                    />
                </div>
                <div className="field my-4">
                    <input
                    type="text"
                    name="courseName"
                    placeholder="Enter a Course name"
                    className="input is-primary"
                    defaultValue={lecturer.courseName}

                    />
                </div>
                <input 
                type="hidden"
                name="id"
                defaultValue={lecturer.id}
                />
                <button className="button is-danger">Submit</button>
             </form>
        </div>
     </div>
 </div>     
}