
/** 
*   author RoseNFan authorblaketow1456@gmail.com 
**/
'use client'
import Link from "next/link";
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
export default function Home() {
  const [items,SetItems]= useState([]);
  const tokenUrl = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
  const apiUrl ="https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty";
  useEffect(() =>{
    const getToken = async () => {
    const clientId=process.env.TDX_CLIENT_ID;
    const clientSecret=process.env.TDX_CLIENT_SECRET;
    const tokenParms= new URLSearchParams();
    tokenParms.append('grant_type','client_credentials');
    tokenParms.append('client_id',clientId);
    tokenParms.append('client_secret',clientSecret);
    const tokenResponse = await fetch(tokenUrl,{
      method: 'POST',
      headersL:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: tokenParms.toString()
    });
    };
  },[]);
  
  return (
    <>
    <div className="bg-teal-600">
    <div className="container mx-auto">
    <Navbar fluid className="bg-teal-600">
    
      <NavbarBrand as={Link} href="/">
        <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="text-white self-center whitespace-nowrap text-xl font-semibold dark:text-white">雲科</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink className="text-white " href="#">
          <span className="hover:text-black hover:p-0 hover:border-b">Home</span>
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
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    <div className="bg-white">
    <div className="container mx-auto">
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
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


