'use client';

import { useEffect, useRef, useState } from 'react';
import useInViewOnce from '@/hooks/useInViewOnce';

export interface StatItem { value:number; label:string; suffix?:string; prefix?:string; }
interface StatsSectionProps { stats:StatItem[]; title?:string; subtitle?:string; }

function AnimatedCounter({target,prefix='',suffix='',isVisible}:{target:number;prefix?:string;suffix?:string;isVisible:boolean}){
 const [count,setCount]=useState(0); const hasAnimated=useRef(false);
 useEffect(()=>{
  if(!isVisible||hasAnimated.current) return; hasAnimated.current=true;
  const start=performance.now(); const duration=2000; let raf=0;
  const animate=(t:number)=>{ const progress=Math.min((t-start)/duration,1); setCount(Math.round(target*progress)); if(progress<1) raf=requestAnimationFrame(animate); };
  raf=requestAnimationFrame(animate); return ()=>cancelAnimationFrame(raf);
 },[isVisible,target]);
 return <span className='tabular-nums'>{prefix}{isVisible?count.toLocaleString('en-IN'):'0'}{suffix}</span>;
}

export default function StatsSection({stats,title,subtitle}:StatsSectionProps){
 const {ref,visible:isVisible}=useInViewOnce<HTMLDivElement>();
 return (<section ref={ref} className='bg-primary text-white py-16 px-4 sm:px-6 lg:px-8'>{(title||subtitle)&&<div className='max-w-3xl mx-auto text-center mb-12'>{title&&<h2 className='text-2xl sm:text-3xl font-extrabold mb-3'>{title}</h2>}{subtitle&&<p className='text-blue-200'>{subtitle}</p>}</div>}<div className='max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8'>{stats.map(stat=><div key={stat.label} className={`text-center counter-animate ${isVisible?'opacity-100':'opacity-0'}`}><p className='text-2xl sm:text-3xl font-extrabold text-yellow-300 mb-2 break-words'><AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} isVisible={isVisible}/></p><p className='text-blue-200 text-xs font-medium'>{stat.label}</p></div>)}</div></section>);
}