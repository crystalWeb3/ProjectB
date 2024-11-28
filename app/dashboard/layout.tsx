'use client';
import LayoutBar from './LayoutBar';
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from 'next/navigation';
import { useSpinner } from '../../context/SpinnerContext'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { token } = useAuth();
  const router = useRouter();
  const { isLoading } = useSpinner();
  useEffect(() =>{
    if(!isLoading) {
      if(token) {
      } else {
        router.push('/auth/login');
      }
    }
  }, [router, token, isLoading]);
  
  return (
    <LayoutBar>
      {children}
    </LayoutBar>
  )
}
