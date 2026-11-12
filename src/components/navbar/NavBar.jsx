import { NavLink, useLocation } from "react-router-dom";
import { ListItem } from "../../utils/constant";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import BrandLogo from "../BrandLogo";
import "./Navbar.css";
export default function Navbar(){
 const [isOpen,setIsOpen]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 const [atFooter,setAtFooter]=useState(false);
 const menuRef=useRef(null), toggleRef=useRef(null);
 const location=useLocation();
 useEffect(()=>{setIsOpen(false);},[location.pathname]);
 useEffect(()=>{
  const footer=document.querySelector('.site-footer');
  let frame=0;
  const update=()=>{
   frame=0;
   setScrolled(window.scrollY>24);
   setAtFooter(Boolean(footer && footer.getBoundingClientRect().top <= window.innerHeight*.5));
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  const resizeObserver=typeof ResizeObserver==='undefined'?null:new ResizeObserver(schedule);
  if(footer)resizeObserver?.observe(footer);
  const main=document.querySelector('main');
  if(main)resizeObserver?.observe(main);
  update();
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule);
  return ()=>{window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);resizeObserver?.disconnect();cancelAnimationFrame(frame);};
 },[location.pathname]);
 useEffect(()=>{
  if(!isOpen)return;
  const menu=menuRef.current,previous=document.activeElement,overflow=document.body.style.overflow;
  const background = [...menu.parentElement.children].filter(node => node !== menu).map(node => ({node, inert: node.inert}));
  background.forEach(({node}) => {node.inert = true;});
  document.body.style.overflow='hidden';menu.querySelector('button, a[href]')?.focus();
  const handle=(event)=>{if(event.key==='Escape'){event.preventDefault();setIsOpen(false);}if(event.key!=='Tab')return;const targets=[...menu.querySelectorAll('button,a[href]')],first=targets[0],last=targets[targets.length-1];if(event.shiftKey&&(document.activeElement===first||!menu.contains(document.activeElement))){event.preventDefault();last.focus();}else if(!event.shiftKey&&(document.activeElement===last||!menu.contains(document.activeElement))){event.preventDefault();first.focus();}};
  const media=window.matchMedia('(min-width: 800px)'),resize=()=>{if(media.matches)setIsOpen(false);};
  document.addEventListener('keydown',handle);media.addEventListener('change',resize);
  return ()=>{background.forEach(({node,inert}) => {node.inert = inert;});document.body.style.overflow=overflow;document.removeEventListener('keydown',handle);media.removeEventListener('change',resize);if(previous?.isConnected)previous.focus();};
 },[isOpen]);
 return (
    <>
      <nav className={`editorial-nav${scrolled ? " is-scrolled" : ""}${atFooter ? " nav-footer-theme" : ""}`} aria-label="Main navigation">
        <div className="CC editorial-nav-inner">
          <BrandLogo />
          <div className="editorial-nav-links">{ListItem.map(item=><NavLink key={item.location} to={"/"+item.location}>{item.Label}</NavLink>)}</div>
          <NavLink to="/contact" className="nav-contact">Let&apos;s talk <span>&#8599;</span></NavLink>
          <button ref={toggleRef} className="editorial-menu-toggle" aria-label="Open navigation" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={()=>setIsOpen(true)}><Menu size={24}/></button>
        </div>
      </nav>
      {isOpen && <div className={`editorial-mobile-menu${atFooter ? " nav-footer-theme" : ""}`} id="mobile-navigation" ref={menuRef} role="dialog" aria-modal="true" aria-label="Navigation">
        <div className="mobile-menu-top"><span>MENU</span><button onClick={()=>setIsOpen(false)} aria-label="Close navigation"><X size={26}/></button></div>
        {ListItem.map((item,index)=><NavLink key={item.location} to={"/"+item.location} onClick={()=>setIsOpen(false)}><small>0{index+1}</small>{item.Label}<span>&#8599;</span></NavLink>)}
        <p>Full Stack Developer &middot; Dhaka, Bangladesh</p>
      </div>}
    </>
  );
}
