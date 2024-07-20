"use server";
import { redirect } from "next/navigation";
import { ILecturer, addLecturer, addedLecturer, updateLect } from "./api";

export const handleAdd = async (data: FormData) => {
  let lecturer: addedLecturer = {
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    courseName: data.get("courseName") as string,
  };

  let result = addLecturer(lecturer);
  console.log(result);
  redirect('/lecturers')
};

export const handleUpdate = async (data:FormData)=>{
    let lecturer:ILecturer={
        id: +(data.get('id') as string),
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        courseName: data.get('courseName') as string,
    }

    updateLect(lecturer)
    redirect('/lecturers')

    
}