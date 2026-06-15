'use client';
import Link from 'next/link';
export default function QuickActions(){
 return (<nav className='fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg'><div className='grid grid-cols-4 text-center text-xs'><Link href='/' className='py-3'>🏠<div>Home</div></Link><Link href='/tatkal' className='py-3'>🎟️<div>Tatkal</div></Link><Link href='/calculator' className='py-3'>🧮<div>Calc</div></Link><Link href='/hall-of-shame' className='py-3'>📢<div>Share</div></Link></div></nav>);
}