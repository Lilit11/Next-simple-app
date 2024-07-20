"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

interface IProps{
    children: React.ReactNode
    href:string
    classname?:string
    name?:string
}

export const NavLink =(props:IProps)=>{

    let  name:string = " has-background success"
    let path = usePathname()

    if(props.href == path){
        props.classname += name
    }
    return <Link className={props.classname}  href={props.href}>{props.children} </Link> 
}
  