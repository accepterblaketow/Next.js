
/** 
*   @author RoseNFan <blaketow1456@gmail.com> 李德龍
**/
'use client'
import Link from "next/link";
import Image from "next/image";
import { 
  Navbar, 
  NavbarBrand,
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle,
  Footer ,FooterCopyright, FooterLink, FooterLinkGroup,
  Carousel,
  Button, 
  Card,
  DarkThemeToggle
} from "flowbite-react";
import { useState,useEffect } from "react";
import CustomCard from "./Components/Card";
import AutoSizeImage from "./Components/AutoSizeImage";
import { stringify } from "postcss";
export default function Home() {
  const [items,SetItems]= useState([]);


  useEffect(() =>{
    async function fetchData(){
      const response = await fetch('api/items');
      const data =await response.json();
      SetItems(data);
    }
    fetchData();
  },[]);
  
  return (
    <>
    <div className="bg-teal-600">
    <div className="container mx-auto">
    <Navbar fluid className="bg-teal-600">
    
      <NavbarBrand as={Link} href="/">
        <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="text-white self-center whitespace-nowrap text-xl font-semibold dark:text-white">旅遊景點</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink className="text-white " href="#">
          <span className="hover:text-black hover:p-0 hover:border-b">交通</span>
        </NavbarLink >
        <NavbarLink className="text-white" as={Link} href="#">
        <span className="hover:text-black hover:border-b">關於</span>
        </NavbarLink>
        <NavbarLink className="text-white" href="#"><span className="hover:text-black hover:border-b">交通</span></NavbarLink>
        <DarkThemeToggle/>
      </NavbarCollapse>
      
    </Navbar>
    </div>
    </div>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <AutoSizeImage src="/1.jpg" alt="..." />
        <AutoSizeImage src="/2.jpg" alt="..." />
        <AutoSizeImage src="/1.jpg" alt="..." />
        <AutoSizeImage src="/2.jpg" alt="..." />
        <AutoSizeImage src="/1.jpg" alt="..." />
      </Carousel>
    </div>
    <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {items.map((item,index) =>
               <CustomCard item={item} key={index}/>
            )}
        </div>
      </div>
    <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
    </>
  );
}


