"use client";
import Link from "next/link";
import {Poppins} from "next/font/google";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
//import { usePathname } from "next/navigation";
import React, { useEffect } from 'react';
function Home() {
  useEffect(() => {
    console.log("Rendered Home Page");  
  }, []);
 }


export default Home;