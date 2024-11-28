"use client";  
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useSnackbar } from "./SnackbarContext";  
import { useAuth } from "./AuthContext";  
import { useRouter } from "next/navigation";  
import { useSpinner } from "./SpinnerContext";

interface DashboardState {
  order: any;
  orders: any[];
  totOrderCount: number | 0;
  isModal: boolean;
}

interface DashboardContextProps extends DashboardState {
  addPricequote: (copytype: string, format: string, level: string, page: number, deadline: string, price: number) => void;
  getOrders: (...arg: any[]) => void;
  toggleModal: (isShow: boolean) => void;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter(); 
  const [ totOrderCount, setTotOrderCount ] = useState<any>(0);
  const [ order, setOrder ] = useState<any>({});
  const [ orders, setOrders] = useState<any[]>([]);
  const [ isModal, setIsModal ] = useState<boolean>(false);
  const { showSnackbar } = useSnackbar(); 
  const { toggleLoading } = useSpinner();
  const { token } = useAuth();

  const addPricequote = async (copytype: string, formating: string, edulevel: string, page: number, deadline: string, price: number) => {
    // const response = await fetch("/api/dashboard/addquote", {
    //   method: "POST",
    //   headers: { 
    //     "Content-Type": "application/json" ,
    //     'Authorization': `Bearer ${token}`,
    //   },
    //   body: JSON.stringify({ copytype, formating, edulevel, page, deadline, price }),
    // });
    // const data = await response.json();
    // if (response.ok) {
    //   setOrders(prev => [ ...prev, data]);
    //   showSnackbar('Add Quotation Success!', 'success');
    //   router.push('/dashboard/placeorder')
    // } else {
    //   showSnackbar(data.error, 'error');
    // }
  };
  const getOrders = async (start: string, limit: string) => {
    // toggleLoading(true);
    try {
      const query = { start, limit};
      const baseUrl = '/api/dashboard/orders';
      const url = `${baseUrl}?${new URLSearchParams(query)}`
      const data = await api(url, {
        method: "GET",
        headers: { 
          "Content-Type": "application/json" ,
          'Authorization': `Bearer ${token}`,
        }
      })
      setOrders(data.orders)
      setTotOrderCount(data.tots);
    } catch(error: any) {
      showSnackbar(error.message || "Get Orders Failed", 'error');
    } finally {
      // toggleLoading(false);
    }
  }

  return (
    <DashboardContext.Provider 
      value={{ 
        order, orders, totOrderCount, getOrders, addPricequote, 
        isModal, toggleModal: setIsModal,
      }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = (): DashboardContextProps => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within an DashboardProvider");
  }
  return context;
};

const api = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Unexpected API error");
  }
  return response.json();
};
