import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getlistingbyId";
import ClientOnly from "@/app/components/clientOnly";
import EmptyState from "@/app/components/emptystate";
import ListingClient from "./listingclient";
interface Iparams{
    listingId?:string
}

const ListingPage=async({params}:{params:Iparams})=>{
    const listing=await getListingById(params);
    const currentUser=await getCurrentUser();
    if(!listing){
        return(
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>
        )
    }
    return <ClientOnly>
           <ListingClient
           listing={listing}
           currentUser={currentUser}
               />
    </ClientOnly>
}

export default ListingPage;