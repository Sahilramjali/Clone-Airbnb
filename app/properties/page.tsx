import getCurrentUser from "../actions/getCurrentUser"
import getListing from "../actions/getListing";
import ClientOnly from "../components/clientOnly";
import EmptyState from "../components/emptystate";
import PropertiesClient from "./propertiesClient";


const PropertiesPage=async()=>{
    const currentUser=await getCurrentUser();

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState
                   title='unauthorized'
                   subtitle="please login"
                />
            </ClientOnly>
        );
    }
    const listings=await getListing({
        userId:currentUser.id
    });
    if(listings.length===0){
        return(
            <ClientOnly>
                <EmptyState
                title="No properties founed"
                subtitle="Looks like you have no properties."
                />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <PropertiesClient
            listings={listings}
            currentUser={currentUser}
            />
        </ClientOnly>

    );
}
export default PropertiesPage;