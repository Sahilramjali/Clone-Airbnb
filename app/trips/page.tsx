import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservation";
import ClientOnly from "../components/clientOnly";
import EmptyState from "../components/emptystate";
import TripsClient from "./tripsClient";


const TripPage=async()=>{
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
    const reservations=await getReservations({
        userId:currentUser.id
    });
    if(reservations.length===0){
        return(
            <ClientOnly>
                <EmptyState
                title="No trips founed"
                subtitle="Looks like you haven't reserved any trips."
                />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <TripsClient
            reservations={reservations}
            currentUser={currentUser}
            />
        </ClientOnly>

    );
}
export default TripPage;