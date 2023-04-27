import { useRouter } from "next/navigation";
import { SafeUser } from "../types";
import useLoginModal from "./useLogin";
import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import axios from "axios";


interface UserFavorite{
    listingId:string;
    currentUser?:SafeUser|null;
}
const useFavorite=({
    listingId,
    currentUser
}:UserFavorite)=>{
        const router=useRouter();
        const loginModal=useLoginModal();
        const hasFavorited=useMemo(()=>{
            const list=currentUser?.favoriteIds||[];
            return list.includes(listingId);
        },[currentUser,listingId]);

        const toggleFavorite=useCallback(async(e:React.MouseEvent<HTMLDivElement>)=>{
            e.stopPropagation();
            if(!currentUser){
                return loginModal.onOpen();
            }
                try{
                        let request;
                        if(hasFavorited){
                            request = () => axios.delete(`/api/favorites/${listingId}`);
                        } else {
                          request = () => axios.post(`/api/favorites/${listingId}`);
                        }
                        await request();
                        router.refresh();
                       // toast.success('success');
                }catch(err){
                    toast.error("error occurs");
                }

        },[currentUser, 
            hasFavorited, 
            listingId, 
            loginModal,
            router]);

            return {
                hasFavorited,
                toggleFavorite,
              }

}
export default useFavorite;