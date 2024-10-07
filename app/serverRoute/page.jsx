import ClientComponent from "@/components/ClientComponent";

function SerrverPage() {
    console.log("Hello i've been render on the server");
    
  return (<>
    <div>Serrver Page</div>
    <ClientComponent />
  </>
  )
}

export default SerrverPage