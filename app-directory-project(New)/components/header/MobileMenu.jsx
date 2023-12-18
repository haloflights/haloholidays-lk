"use client";

import Link from "next/link";

import {

  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
  categorieMegaMenuItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,

} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { map } from "@/data/activity";
import colors from "react-multi-date-picker/plugins/colors";

const MobileMenu = () => {
  const pathname = usePathname();

  const [isActiveParent, setIsActiveParent] = useState(false)
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false)
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false)

  const router = useRouter()

   useEffect(() => {

    categorieMegaMenuItems.map((megaMenu=>{
    megaMenu?.menuCol?.map((megaCol=>{

      // megaCol?.menuList,map((item=>{
      //   if(list.routePath?.split('/')[1] == pathname.split('/')[1]){
      //     setIsActiveParent(true)
      //     setisActiveNestedParentTwo(item?.title)
      //     setIsActiveParent(megaMenu?.id)
      //   }
      // }))

      megaCol?.menuItems?.map((item=>{   
        item?.menuList?.map((list)=>{
          if (list.routePath?.split('/')[1] == pathname.split('/')[1]) {
            setIsActiveParent(true)
            setisActiveNestedParentTwo(item?.title)
            setisActiveNestedParent(megaMenu?.id)           
          }        
        })
      }))
    }))
  }))


   
 }, [])

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light mt-10 ml-5">
        <Link href="/">
        <img src="/img/general/LK.svg" alt="logo icon" width="150" margin="400" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

    
        <Sidebar width="400" backgroundColor="white">

          <Menu>
            {/* <SubMenu label="Home" className={ homeItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}> */}
              {/* {homeItems.map((item, i) => ( */}
                <MenuItem
                  // key={i}
                  onClick={()=>router.push("/")}
                  className={
                    pathname=== "/"
                    ? "menu-active-link"
                    : ""
                  }
                  
                  // className={
                  //   isActiveLink(item.routePath, pathname)
                  //     ? "menu-active-link"
                  //     : "inactive-menu"
                  // }
                 
                >
                  Home
                </MenuItem>
              {/* ))} */}
            {/* </SubMenu> */}
            {/* End  All Home Menu */}

            <SubMenu label="Holidays" className={isActiveParent ? 'menu-active-link':'' }>
              {categorieMobileItems.map((item) => (
                // <SubMenu label={item.title} key={item.id} className={isActiveNestedParent == item.id ? 'menu-active-link':'inactive-menu'}>
                  // {item.menuList.map((single) => (
                    <SubMenu label={item.title} key={item.id}  className={isActiveNestedParentTwo == item.title ? 'menu-active-link':'inactive-menu'} >
                      {item.menuList.map((menu, i) => (
                        <MenuItem
                          key={i}
                          onClick={()=>router.push(menu.routePath)}
                          className={
                            isActiveLink(menu.routePath, pathname)
                              ? "menu-active-link"
                              : "inactive-menu"
                          }
                        >
                          {menu.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  // ))}  //test submenu
                //  {/* </SubMenu> // test submenu */}
              ))}
              {/* {categorieMobileItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                 
                >
                  {item.name}
                </MenuItem>
              ))} */}



            </SubMenu>
            {/* End  All Categories Menu */}


            <MenuItem
             onClick={()=>router.push("/destinations")}
             className={
              pathname === "/destinations"
                ? "menu-active-link"
                : ""
            }
              
            >
              Destinations
            </MenuItem>
            {/* End  Desitinations Menu */}

            {/* <SubMenu label="Blog" className={ blogItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}> */}
              {/* {blogItems.map((item, i) => ( */}
                {/* <MenuItem
                  // key={i}
                  onClick={()=>router.push("/blog-list-v1")}
                  className={
                    pathname === "/blog-list-v1"
                      ? "menu-active-link"
                      : ""
                  }
                >
                  Blog
                </MenuItem> */}
              {/* ))} */}
            {/* </SubMenu> */}
            {/* End  All Blog Menu */}

            <SubMenu label="More" className={ pageItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {pageItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End  All Pages Menu */}

            {/* <SubMenu label="Dashboard" className={ pathname.split('/')[1] == 'dashboard'  || pathname.split('/')[1] == 'vendor-dashboard' ? "menu-active-link":''}>
              {dashboardItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            End  All Dashboard Menu */}

            {/* <MenuItem
             onClick={()=>router.push("/contact")}
             className={
              pathname === "/contact" ? "menu-active-link" : ""
            }
             
            >
              Contact
            </MenuItem>
            End Contact  Menu */}
          </Menu>
        </Sidebar>



      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        {/* <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            href="/login"
          >
            Become An Expert123
          </Link>
        </div> */}
      </div>
      {/* End pro-footer */}
    </>
  );
};


export default MobileMenu;
