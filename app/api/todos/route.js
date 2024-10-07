import { NextResponse } from "next/server"

let todos =[
    {id:1,name:"Get Groceries"},
    {id:2,name:"Do Homework"},
    {id:3,name:"Go to the Gym"}
]

export async function GET(){
    return NextResponse.json({todos})
}