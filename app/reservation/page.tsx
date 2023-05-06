import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import ClientOnly from "../components/clientOnly";
import EmptyState from "../components/emptystate";
import ReservationClient from "./reservationClient";

const ReservationPage= async()=>{

    const currentUser=await getCurrentUser();
    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState
                title="Unauthorized"
                subtitle="Please login"
                />
            </ClientOnly>
        );
    }
    const reservations=await getReservations({
        authorId:currentUser.id
    });
    if(reservations.length===0){
        return(
            <ClientOnly>
                <EmptyState
                title="No reservation found"
                subtitle="Looks like you have no reservation on your properties"
                />
            </ClientOnly>
        );
    }
    return(
        <ClientOnly>
            <ReservationClient
            reservations={reservations}
            currentUser={currentUser}
            />
        </ClientOnly>
    );
};

export default ReservationPage;


