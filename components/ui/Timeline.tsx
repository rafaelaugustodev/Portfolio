import React from 'react';
import { trajectory } from '@/data';

export const Timeline = () => {
  return (
    <ol className="relative border-s-2 border-white/20 ml-2 md:ml-6">
      {trajectory.map((item) => (
        <li key={item.id} className="mb-10 md:mb-16 ms-6 md:ms-10">
          <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-purple rounded-full mt-1.5 md:mt-2 -start-1.75 md:-start-2.25 border-2 border-black-100 shadow-[0_0_10px_rgba(203,172,249,0.4)]" />
          
          <time className="text-sm md:text-base font-medium leading-none text-purple/90">
            {item.date}
          </time>
          
          <h3 className="text-lg md:text-2xl font-bold text-white mt-2 mb-2">
            {item.title}
          </h3>
          
          <p className="mb-4 text-sm md:text-base font-normal text-gray-400 max-w-2xl leading-relaxed">
            {item.description}
          </p>

          {item.link && (
            <a 
              href={item.link} 
              target="_blank"
              className="inline-flex items-center text-white bg-purple/10 border border-purple/30 hover:bg-purple/20 transition-all font-semibold rounded-lg text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
            >
              Ver detalhes
              <svg className="w-4 h-4 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
            </a>
          )}
        </li>
      ))}
    </ol>
  );
};