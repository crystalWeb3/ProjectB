import Link from 'next/link';
import { ArrowLeftIcon, ArrowDownTrayIcon, ArrowUpTrayIcon } from '@heroicons/react/16/solid';
import Badge from '../../../../components/utils/Badge';
import Avatar from '../../../../components/utils/Avatar';

const Index = () => {
    return (
        <div className='flex flex-col gap-6'>
            <Link href='/dashboard/helper/tickets' className='text-[20px] font-semibold inline-flex gap-2 cursor-pointer'>
                <ArrowLeftIcon width={20} /> Back
            </Link>
            <h1 className="banner-subtitle">Ticket</h1>
            <div className="w-full flex flex-row items-start gap-8">
                <div className="w-[67%] flex flex-col gap-4">
                   <div className="flex flex-col items-start gap-3 bg-white px-[35px] py-[40px] rounded-[20px]">
                        <Avatar img='/images/humans/human1.png' name='Jon Matt' subscribe='3 Min ago' size='sm' />
                        <p className="text-[17px] text-[#595959]">Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. </p>
                        <div className="flex justify-start gap-3">
                            <div className="flex justify-between px-2 items-center border-[1px] border-[#EDEDED] rounded-[7px] h-[50px] w-[180px] cursor-pointer">
                                <p className="text-lg">abc.png</p>
                                <ArrowDownTrayIcon width={22} className='text-[#007DFC]' />
                            </div>
                            <div className="flex justify-between px-2 items-center border-[1px] border-[#EDEDED] rounded-[7px] h-[50px] w-[180px] cursor-pointer">
                                <p className="text-lg">abc.png</p>
                                <ArrowDownTrayIcon width={22} className='text-[#007DFC]' />
                            </div>
                            <div className="flex justify-between px-2 items-center border-[1px] border-[#EDEDED] rounded-[7px] h-[50px] w-[180px] cursor-pointer">
                                <p className="text-lg">abc.png</p>
                                <ArrowDownTrayIcon width={22} className='text-[#007DFC]' />
                            </div>
                        </div>
                   </div>
                   <div className="flex flex-col items-start gap-3 bg-white px-[35px] py-[40px] rounded-[20px]">
                        <Avatar img='/images/humans/topavatar.png' name='Jhon Smith' subscribe='3 Min ago' size='sm' />
                        <p className="text-[17px] text-[#595959]">Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. </p>
                        <div className="flex justify-start gap-3">
                            <div className="flex justify-between px-2 items-center border-[1px] border-[#EDEDED] rounded-[7px] h-[50px] w-[180px] cursor-pointer">
                                <p className="text-lg">abc.png</p>
                                <ArrowDownTrayIcon width={22} className='text-[#007DFC]' />
                            </div>
                            <div className="flex justify-between px-2 items-center border-[1px] border-[#EDEDED] rounded-[7px] h-[50px] w-[180px] cursor-pointer">
                                <p className="text-lg">abc.png</p>
                                <ArrowDownTrayIcon width={22} className='text-[#007DFC]' />
                            </div>
                            <div className="flex justify-between px-2 items-center border-[1px] border-[#EDEDED] rounded-[7px] h-[50px] w-[180px] cursor-pointer">
                                <p className="text-lg">abc.png</p>
                                <ArrowDownTrayIcon width={22} className='text-[#007DFC]' />
                            </div>
                        </div>
                   </div>
                   <form className="flex flex-col items-start gap-3 bg-white px-[35px] py-[40px] rounded-[20px]">
                        <div className="w-full">
                            <div className='w-full flex flex-col items-start gap-2'>
                                <label htmlFor="subject" className='banner-content'>Subject</label>
                                <textarea id='subject' className='w-full main-input-textarea primary !min-h-[200px]' placeholder='Type here...' />
                            </div>
                        </div>
                        <div className="w-full mb-10 flex flex-col items-start gap-2">
                            <p  className='banner-content'>Attachments</p>
                            <div className="relative">
                                <input type="file" id='upload' hidden className='absolute inline-block opacity-0 top-0 left-0 bottom-0 right-0 z-40 cursor-pointer'/>
                                <span className="h-[49px] px-6 text-center text-xl font-bold rounded-[25px] inline-flex flex-row justify-center items-center text-white bg-[#000000] cursor-pointer">
                                    <ArrowUpTrayIcon  width={30} /> Upload Your Photo
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <input type="submit" value='Send Message' className='w-[200px] h-[49px] text-center text-xl font-bold rounded-[25px] flex flex-row justify-center items-center text-white bg-[#007DFC] outline-none cursor-pointer' />
                        </div>
                   </form>
                </div>
                <div className="w-[33%] flex flex-col gap-5 bg-white px-[35px] py-[40px] rounded-[20px]">
                     <div className="flex flex-col items-start gap-4">
                        <h3 className="text-[23px] font-bold">Status</h3>
                        <Badge text='Opened' state='error' />
                     </div>
                     <div className="flex flex-col items-start gap-4">
                        <h3 className="text-[23px] font-bold">Created</h3>
                        <p className="text-[17px] text-[#595959]">1 Month Ago</p>
                     </div>
                     <div className="flex flex-col items-start gap-4">
                        <h3 className="text-[23px] font-bold">Subject</h3>
                        <p className="text-[17px] text-[#595959]">Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. </p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Index;