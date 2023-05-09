
import ClientOnly from './components/clientOnly'
import  Container  from './components/container'
import EmptyState from './components/emptystate';
import getListing, { IListingParams } from './actions/getListing';
import ListingCard from './components/listing/listing';
import getCurrentUser from './actions/getCurrentUser';

interface HomeProps{
  searchParams:IListingParams 
}
export default async function Home({searchParams}:HomeProps) {
  const listing=await getListing(searchParams);
  const currentUser=await getCurrentUser();
 
  if(listing.length===0){
    return(
      <ClientOnly>
        <EmptyState showReset/>
      </ClientOnly>
    )
  }
 
  return (
    <ClientOnly>
      <Container>
        <div
        className='
        pt-20
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-xols-6
        gap-4
        '
        >
            {listing.map((list )=>{
              return(
                <ListingCard
                currentUser={currentUser}
                key={list.id}
                data={list}
                />
              )
            })}
        </div>  
      </Container>
    </ClientOnly>
  );
}
