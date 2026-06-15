'use client';
import { useEffect, useState } from 'react';
import useInViewOnce from '@/hooks/useInViewOnce';

interface FadeInSectionProps { children: React.ReactNode; className?: string; rootMargin?: string; delay?: number; }
export default function FadeInSection({children,className='',delay=0}:FadeInSectionProps){
 const {ref,visible:seen}=useInViewOnce<HTMLDivElement>();
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){ setVisible(true); return; }
  if(seen){ if(delay) setTimeout(()=>setVisible(true),delay); else setVisible(true); }
 },[seen,delay]);
 return <div ref={ref} className={`transition-all duration-700 ease-out ${visible?'opacity-100 translate-y-0':'opacity-0 translate-y-7'} ${className}`}>{children}</div>;
}