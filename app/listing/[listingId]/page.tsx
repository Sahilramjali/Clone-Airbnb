import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getlistingbyId";
import ClientOnly from "@/app/components/clientOnly";
import EmptyState from "@/app/components/emptystate";
import ListingClient from "./listingclient";
import getReservations from "@/app/actions/getReservation";
interface Iparams{
    listingId?:string
}

const ListingPage=async({params}:{params:Iparams})=>{
    const listing=await getListingById(params);
    const reservation=await getReservations(params);
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
           reservation={reservation}
               />
    </ClientOnly>
}

export default ListingPage;