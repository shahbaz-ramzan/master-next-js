import { NextResponse } from "next/server";

let todos = [
  { id: 1, name: "Get Groceries" },
  { id: 2, name: "Do Homework" },
  { id: 3, name: "Go to the Gym" },
];

export async function GET() {
  return NextResponse.json({ todos });
}

export async function DELETE(request) {
  const data = await request.json();
  todos=todos.filter((todo)=>todo.id !== data.id);

  return NextResponse.json({todos});

}

export async function PUT(request)  {
    const data = await request.json();
    const updatedTodos = todos.map((todo)=>todo.id === data.id? data : todo);
    return NextResponse.json({ updatedTodos });
  }

  export async function POST(request) {
    const data = await request.json();
    const newData = {id:todos.length + 1 , name:data.name}
    todos.push(newData);
    return NextResponse.json({ todos });
  }
