
import { handleAdd } from "@/lib/actions";

export default function Page(){
    return <div>
        <h1 className="is-size-5">Add Lecturer</h1>
       <div className="columns">
            <div className="is-two-fifth my-4">
                <form className="box" action={handleAdd}>
                    <div className="field my-4">
                        <input
                        type="text"
                        name="name"
                        placeholder="Enter a name"
                        className="input is-primary"
                        />
                    </div>
                    <div className=" field my-4">
                        <input
                        type="text"
                        name="surname"
                        placeholder="Enter a surname"
                        className="input is-primary"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                        type="text"
                        name="courseName"
                        placeholder="Enter a Course name"
                        className="input is-primary"
                        />
                    </div>
                    <button className="button is-danger">Submit</button>
                 </form>
            </div>
         </div>
     </div>       
}

