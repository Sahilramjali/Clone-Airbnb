import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorite";
import ClientOnly from "../components/clientOnly"
import EmptyState from "../components/emptystate"
import FavoritesClient from "./favoriteClient";



const FavoritesPage=async()=>{
    const favoriteListing=await getFavorites();
    const currentUser=await getCurrentUser();
    if(favoriteListing.length===0){
        return(
            <ClientOnly>
                <EmptyState
                title="No favorites found"
                subtitle="looks like you have no favorite listings"
                />
            </ClientOnly>
        );
    }
    return(
        <ClientOnly>
            <FavoritesClient
            favoritelist={favoriteListing}
            currentUser={currentUser}

            />
        </ClientOnly>
    )
}
export default FavoritesPage