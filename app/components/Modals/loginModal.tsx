'use client'
import useLoginModal from "@/app/hooks/useLogin";
import { useState } from "react";
import Modal from "./Modal";
import Button from "../button";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import Heading from "../heading";
import Input from "../inputs/Input";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import {signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
const LoginModal=()=>{
   const router=useRouter();
    const LoginModal=useLoginModal();
    const[isLoading,setIsLoading]=useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FieldValues>({
        defaultValues: {
         
          email: "",
          password: "",
        },
      });

      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
       signIn('credentials',{
        ...data,
        redirect:false,
       }).then((callback)=>{
        setIsLoading(false);
        if(callback?.ok){
            toast.success('Logged in');
            router.refresh();
            LoginModal.onClose();
        }
        if(callback?.error){
            toast.error(callback.error);
            console.log(callback.error);
        }
       })
      };
    const bodyContent=(
        <div 
        className="
        flex
        flex-col
        gap-3
        "
        >
            <Heading title="Welcome to Airbnb" subtitle="Login your account" />
            <Input
            id='email'
            label='email'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
            <Input
            id='password'
            type="password"
            label="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
             />
        </div>
    );
    const footerContent=(
        <div 
        className=" flex flex-col
        gap-3
        
        "
        >
            <hr/>
            <Button outline
            label="Login with Google"
            icon={FcGoogle}
            onClick={()=>signIn('google')}
            />
            <Button outline
            label="Login with Facebook"
            icon={AiFillFacebook}
            onClick={()=>{}}
            />
            
        </div>
    );
    return(
        <Modal
        disabled={isLoading}
        isOpen={LoginModal.isOpen}
        title="Login"
        actionLabel="Log in"
        onClose={LoginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        />
    );

}
export default LoginModal;