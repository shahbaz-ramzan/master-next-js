
export async function generateStaticParams() {
  return [{id:"one"},{id:"two"},{id:"three"}];
}
function page({params}) {
  return (
    <div>Params ID: {params.id}</div>
  )
}

export default page