"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAuthStore((s) => s.token);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
console.log("TOKEN:", token);

  useEffect(() => {
    const timer = setTimeout(()=>{
    if(!token){
      router.push("/login");
    }else{
      setLoading(false);
    }
    },100);

    return ()=>clearTimeout(timer);//why clearTimeout? the setTimeout work untill 100.
  }, [token, router]);

  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
}


/* 
use here setTimeout cause ->Zustand initially returns null, then updates later
*/