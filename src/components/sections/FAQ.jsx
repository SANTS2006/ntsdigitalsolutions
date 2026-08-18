import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import faqs from '../../data/faqs';
import SectionTitle from '../ui/SectionTitle';

export default function FAQ({ limit }) {
 const [open, setOpen] = useState(null);
 const items = limit ? faqs.slice(0, limit) : faqs;
 return <section className="bg-white py-24"><div className="mx-auto max-w-4xl px-5 lg:px-6"><SectionTitle eyebrow="Frequently asked" title="Questions clients often ask" description="Clear answers to the questions that usually come before a project conversation."/><div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50">{items.map((item,i)=><div key={item.q}><button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-bold text-slate-950 md:px-7" aria-expanded={open===i}><span>{item.q}</span><FiChevronDown className={`shrink-0 transition ${open===i?'rotate-180':''}`}/></button>{open===i&&<div className="px-6 pb-6 text-sm leading-7 text-slate-600 md:px-7">{item.a}</div>}</div>)}</div></div></section>;
}
