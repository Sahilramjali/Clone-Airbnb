'use client';
import {Toaster} from 'react-hot-toast';
const ToasterProvider=()=>{
    return(
        <Toaster
        position='bottom-right'
        containerStyle={{
            top: 20,
            left: 20,
            bottom: 20,
            right: 20,
          }}
        
        />
    );
}
export default ToasterProvider