'use client';

import { useSnackbar } from '@/context/SnackbarContext';
import { useState, useEffect } from 'react';

const SuccessIcon = ( { isColored = true } : { isColored?: boolean }) => {
  let color = '';
  if(isColored === true) color = '#55B938';
  else color = '#FFFFFF'
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7969 10.2227C19.7969 15.5729 15.4596 19.9102 10.1094 19.9102C4.7591 19.9102 0.421875 15.5729 0.421875 10.2227C0.421875 4.87238 4.7591 0.535156 10.1094 0.535156C15.4596 0.535156 19.7969 4.87238 19.7969 10.2227ZM8.98883 15.3521L16.1763 8.16461C16.4204 7.92055 16.4204 7.52481 16.1763 7.28074L15.2925 6.39688C15.0484 6.15277 14.6527 6.15277 14.4086 6.39688L8.54688 12.2585L5.81019 9.52184C5.56613 9.27777 5.17039 9.27777 4.92629 9.52184L4.04242 10.4057C3.79836 10.6498 3.79836 11.0455 4.04242 11.2896L8.10492 15.3521C8.34902 15.5962 8.74473 15.5962 8.98883 15.3521Z" fill={color}/>
    </svg>
  )
}

const ErrorIcon = ( { isColored = true } : { isColored?: boolean }) => {
  let color = '';
  if(isColored === true) color = '#D65745';
  else color = '#FFFFFF'
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.8906 10.2227C20.8906 15.7467 16.4131 20.2227 10.8906 20.2227C5.36817 20.2227 0.890625 15.7467 0.890625 10.2227C0.890625 4.70181 5.36817 0.222656 10.8906 0.222656C16.4131 0.222656 20.8906 4.70181 20.8906 10.2227ZM10.8906 12.2388C9.86623 12.2388 9.03579 13.0692 9.03579 14.0936C9.03579 15.118 9.86623 15.9485 10.8906 15.9485C11.915 15.9485 12.7455 15.118 12.7455 14.0936C12.7455 13.0692 11.915 12.2388 10.8906 12.2388ZM9.12962 5.57161L9.42873 11.0555C9.44272 11.3121 9.6549 11.513 9.91187 11.513H11.8694C12.1264 11.513 12.3385 11.3121 12.3525 11.0555L12.6516 5.57161C12.6668 5.29443 12.4461 5.06137 12.1685 5.06137H9.61272C9.33514 5.06137 9.1145 5.29443 9.12962 5.57161Z" fill={color}/>
    </svg>
  )
}

const InfoIcon = ( { isColored = true } : { isColored?: boolean }) => {
  let color = '';
  if(isColored === true) color = '#5296D5';
  else color = '#FFFFFF'
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0.3125C4.65012 0.3125 0.3125 4.65168 0.3125 10C0.3125 15.3514 4.65012 19.6875 10 19.6875C15.3499 19.6875 19.6875 15.3514 19.6875 10C19.6875 4.65168 15.3499 0.3125 10 0.3125ZM10 4.60938C10.9061 4.60938 11.6406 5.34391 11.6406 6.25C11.6406 7.15609 10.9061 7.89062 10 7.89062C9.09391 7.89062 8.35938 7.15609 8.35938 6.25C8.35938 5.34391 9.09391 4.60938 10 4.60938ZM12.1875 14.5312C12.1875 14.7901 11.9776 15 11.7188 15H8.28125C8.02238 15 7.8125 14.7901 7.8125 14.5312V13.5938C7.8125 13.3349 8.02238 13.125 8.28125 13.125H8.75V10.625H8.28125C8.02238 10.625 7.8125 10.4151 7.8125 10.1562V9.21875C7.8125 8.95988 8.02238 8.75 8.28125 8.75H10.7812C11.0401 8.75 11.25 8.95988 11.25 9.21875V13.125H11.7188C11.9776 13.125 12.1875 13.3349 12.1875 13.5938V14.5312Z" fill={color}/>
    </svg>
  )
}

const WarningIcon = ( { isColored = true } : { isColored?: boolean }) => {
  let color = '';
  if(isColored === true) color = '#EAC645';
  else color = '#FFFFFF'
  return (
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.9829 16.293C21.6594 17.4657 20.8102 18.9314 19.459 18.9314H1.87062C0.516837 18.9314 -0.328414 17.4634 0.346776 16.293L9.14109 1.0451C9.81793 -0.128074 11.5132 -0.125948 12.1888 1.0451L20.9829 16.293ZM10.6649 13.1406C9.73382 13.1406 8.97898 13.8954 8.97898 14.8265C8.97898 15.7576 9.73382 16.5125 10.6649 16.5125C11.5961 16.5125 12.3509 15.7576 12.3509 14.8265C12.3509 13.8954 11.5961 13.1406 10.6649 13.1406ZM9.06427 7.08042L9.33615 12.065C9.34887 12.2982 9.54173 12.4808 9.7753 12.4808H11.5546C11.7882 12.4808 11.981 12.2982 11.9937 12.065L12.2656 7.08042C12.2794 6.82848 12.0788 6.61663 11.8265 6.61663H9.50339C9.25108 6.61663 9.05053 6.82848 9.06427 7.08042Z" fill={color}/>
    </svg>
  )
}

interface SnackbarProps {
  message?: string;
  state?: string | 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  type?: string | 'light' | 'dark' | 'colored';
  isProgress?: boolean ;
}

const Snackbar = ({ message, state = 'success', duration = 1500, type = 'light', isProgress = true }: SnackbarProps) => {
  const { clearSnackbar } = useSnackbar();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if(prev >= 300){
          clearInterval(interval);
          return prev
        } else return prev + 16;
      })
    }, 100)
    const timer = setTimeout(() => {
      clearSnackbar()
    }, 1200);
    return () => clearTimeout(timer);
  }, [progress]);
  let isIconColored = type === 'light' || type === 'dark' ? true : false
  // if(visible === false) return <></>
  return (
    <div
      className={`fixed top-[5vh] left-[50%] translate-x-[-50%] w-[300px] h-[64px] rounded-[4px] flex flex-col items-center justify-center pt-[15px] pb-[20px] pl-[8px] pr-[12px] overflow-hidden z-[1300]
        ${ type === 'light'? 'bg-white': ''} ${ type === 'dark'? 'bg-black': ''}
        ${ type === 'colored' ? 
          state === 'success'? `bg-[#55B938]`: 
          state === 'error'? `bg-[#D65745]`: 
          state === 'info'? `bg-[#5296D5]`:
          state === 'warning'? `bg-[#EAC645]`:''
          :''}
        `}
    >
      <span className="inline-block absolute right-[13px] top-[10px] cursor-pointer" onClick={() => clearSnackbar()}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6M11 11L6 6M6 6L11 1L1 11" stroke={`${isIconColored? '#B3B3B3': '#FFFFFF99'}`} strokeWidth="2"/>
        </svg>
      </span>
      <div className="w-full flex items-center px-[10px] gap-2">
        {
          state === 'success'? <SuccessIcon isColored={isIconColored} />: 
          state === 'error'? <ErrorIcon isColored={isIconColored} />: 
          state === 'info'? <InfoIcon isColored={isIconColored} />:
          state === 'warning'? <WarningIcon isColored={isIconColored} /> : null
        }
        <p className={`text-[16px] font-[400] ${type === 'colored' || type === 'dark' ? 'text-white' : ''}`}>{message}</p>
      </div>
      {/* {
          isProgress &&  */}
          <div 
            className={`absolute left-0 bottom-0 h-[5px] transition-all !duration-[300]
              ${ type === 'colored'? 'bg-[#FFFFFF99]': ''}
              ${ 
                type === 'light' || type === 'dark' ? 
                state === 'success'? `bg-[#55B938]`: 
                state === 'error'? `bg-[#D65745]`: 
                state === 'info'? `bg-[#5296D5]`:
                state === 'warning'? `bg-[#EAC645]`:''
                :''
              }`}
            style={{ width: `${progress}px`}}
              >
              </div>
          {/* } */}
    </div>
  );
};

export default Snackbar;
