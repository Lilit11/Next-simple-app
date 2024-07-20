import Database from "better-sqlite3"

const db = new Database("lecturers.db")

export interface ILecturer{
    id:number
    name:string
    surname:string
    courseName:string
}

export type addedLecturer = Omit<ILecturer,'id'>

export const getAllLecturers=():ILecturer[]=>{

    return db.prepare(`
        SELECT * FROM lecturers
    `).all() as ILecturer[]
}

export const addLecturer=(lecturer:addedLecturer):Database.RunResult=>{
   return db.prepare(`
        INSERT INTO lecturers(name, surname, courseName)
        VALUES(@name, @surname, @courseName)
     `).run(lecturer) 
}


export const getById =(id:number):ILecturer=>{
    return db.prepare(`
            SELECT * FROM lecturers WHERE id=?`)
            .get(id) as ILecturer
}

export const updateLect =(obj:ILecturer)=>{
    return db.prepare(`
    UPDATE lecturers set name=?, surname=?, courseName=? WHERE id=?`)
    .run(obj.name, obj.surname, obj.courseName, obj.id)
}


