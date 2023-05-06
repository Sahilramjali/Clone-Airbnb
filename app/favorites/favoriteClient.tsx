
'use client';

import Container from "../components/container";
import Heading from "../components/heading";
import ListingCard from "../components/listing/listing";
import { SafeListing, SafeUser } from "../types";

interface FavoritesClientProps{
    favoritelist:SafeListing[];
    currentUser?:SafeUser|null
}
const FavoritesClient:React.FC<FavoritesClientProps>=({
    favoritelist,
    currentUser
})=>{
    return(
        <Container>
            <Heading
            title="favorites"
            subtitle="list of places you have favorited!"

            />
            <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
            ">
                {favoritelist.map((favorite)=>(
                    <ListingCard
                    currentUser={currentUser}
                    key={favorite.id}
                    data={favorite}

                    />
                ))}
            </div>
        </Container>
    );
}
export default FavoritesClient;