'use client'
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from 'next/navigation';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() =>{
      if(token) {
          router.push('/dashboard/order');
      }
  }, [router, token]);
  
  return (
      <main>
        {children}
      </main>
  )
}
