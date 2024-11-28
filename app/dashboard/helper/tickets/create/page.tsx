import Link from 'next/link';
import { ArrowLeftIcon, ArrowUpTrayIcon } from '@heroicons/react/16/solid';

const Index = () => {
    return (
        <div className='flex flex-col gap-6'>
            <Link href='/dashboard/helper/tickets' className='text-[20px] font-semibold inline-flex gap-2 cursor-pointer'>
                <ArrowLeftIcon width={20} /> Back
            </Link>
            <h1 className="banner-subtitle">Create Ticket</h1>
            <form className="rounded-[23px] px-10 flex flex-col gap-5 bg-[#FFFFFF] py-16">
                <div className="grid grid-cols-2 gap-8">
                    <div className='w-full flex flex-col items-start gap-2'>
                        <label htmlFor="subject" className='banner-content'>Subject</label>
                        <input id='subject' type="text" className='w-full main-input primary input-lg' placeholder='Type here...' />
                    </div>
                    <div className='w-full flex flex-col items-start gap-2'>
                        <label htmlFor="category" className='banner-content'>Category</label>
                        <input id='category' type="text" className='w-full main-input primary input-lg' placeholder='Type here...' />
                    </div>
                </div>
                <div className="w-full">
                    <div className='w-full flex flex-col items-start gap-2'>
                        <label htmlFor="message" className='banner-content'>Message</label>
                        <textarea id='message' className='w-full main-input-textarea primary !min-h-[200px]' placeholder='Type here...' />
                    </div>
                </div>
                <div className="w-full mb-10 flex flex-col items-start gap-2">
                    <label htmlFor="upload" className='banner-content'>Attachments</label>
                    <div className="relative">
                        <input type="file" id='upload' hidden className='absolute inline-block opacity-0 top-0 left-0 bottom-0 right-0 z-40 cursor-pointer'/>
                        <span className="h-[49px] px-6 text-center text-xl font-bold rounded-[25px] inline-flex flex-row justify-center items-center text-white bg-[#000000] cursor-pointer">
                            <ArrowUpTrayIcon  width={30} /> Upload Your Photo
                        </span>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <input type="submit" value='Submit' className='w-[200px] h-[49px] text-center text-xl font-bold rounded-[25px] flex flex-row justify-center items-center text-white bg-[#007DFC] outline-none cursor-pointer' />
                </div>
            </form>
        </div>
    )
}

export default Index;