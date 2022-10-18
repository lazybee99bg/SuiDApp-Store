import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Button from '../components/Button'
import icondowload from '../../assets/images/iconheader/dowload.png'
import iconglobal from '../../assets/images/iconheader/global.png'
import icondark from '../../assets/images/iconheader/dark.svg'
import iconsearch from '../../assets/images/iconheader/Search.svg'
const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()
	const headerEl = [
		{
			title: 'Wallet',
			link: '/home',
			element: []
		},
		{
			title: 'Swap',
			link: '/',
			element: []
		},
		{
			title: 'NFT',
			link: '/',
			element: []
		},

		{
			title: 'DApp',
			link: '',
			element: []
		},
		{
			title: 'GASU',
			link: '/',
			element: []
		},
		{
			title: 'Business',
			link: '/',
			element: []
		},

		{
			title: 'Knight Recruitment',
			link: '',
			element: []
		},
		{
			title: 'More',
			link: '/',
			element: []
		}
	]

	return (
		<header className='relative header bg-white z-10 '>
			<div className=' mx-6'>
				<div className='flex lg:flex-row flex-col justify-between'>
					<div className='flex flex-row items-center '>
						<div className='text-4xl'>Sui DApp</div>
						<div
							className={` collapsible w-auto lg:p-2 p-0 flex lg:flex-row flex-col lg:items-center md:items-center items-start justify-between font-semibold lg:text-base text-sm text-left md:text-center text-black 
              ${isOpen ? 'lg:h-auto h-[340px]' : 'h-0 lg:h-auto'}`}>
							{/* <div className='flex flex-row items-center justify-center mx-1 mr-5 md:pb-0 bg-[#000000] border-[2px] border-gray-800 rounded-xl'>
								<Image className='lg:hidden block ' src={iconsearch} alt='iconsearch' />
							<input
								type='text'
								id='first'
								src={iconsearch}
								className=' bg-black caret-white text-white text-center text-   h-10 md:h-10  font-semibold form-control input-group-lg'
								placeholder='Search address, token, ENS, UNS, SNS,...'
								required
							/>
							</div> */}
							{headerEl.map((item, index) => (
								<div key={index} className='flex-auto m-2'>
									{item.link ? (
										<div
											className={`hover:text-[#557de2] text-sm ${
												router.asPath == item.link ? 'text-blue-400' : ''
											}`}>
											<Link href={item.link}>
												{item.link.includes('http') ? (
													<a target='_blank' rel='noreferrer'>
														{item.title}
													</a>
												) : (
													<a>{item.title}</a>
												)}
											</Link>
										</div>
									) : (
										<div className='dropdown'>
											<span className='hover:text-white bg-white cursor-pointer font-base  flex items-center'>
												{item.title}
												<svg
													className='lg:hidden block ml- w-4 h-4'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M19 9l-7 7-7-7'></path>
												</svg>
											</span>
										</div>
									)}
								</div>
							))}
						</div>
						<div className='lg:hidden block ' onClick={() => setIsOpen(!isOpen)}>
							<MenuIcon color='black' className='w-10 ' />
						</div>
					</div>
					<div className=' flex items-center '>
						<Button
							href='https://t.me/navaranetwork'
							className='bg-blue-500 border-[2px] border-gray-800 rounded-xl text-white'>
							Connect Wallet
						</Button>
						<div className=' mx-2'>
							<Image width={30} height={30} alt='Loading..' objectFit='cover' src={icondowload} />
						</div>
						<div className='px-2'>
							<Image width={30} height={30} alt='Loading..' objectFit='cover' src={iconglobal} />
						</div>
						<div className=' mx-2'>
							<Image width={30} height={30} alt='Loading..' objectFit='cover' src={icondark} />
						</div>
					</div>
				</div>
			</div>
			<div className='mx-20 border-b pb-4'>
				<div className='flex justify-between   '>
					<div className='text-4xl'>DApp</div>
					<div className='flex flex-ro items-center  justify-center  md:pb-0  border-[1px] bg-slate-200 border-gray-100 rounded-xl'>
						<Image className='lg:hidden block  ' src={iconsearch} alt='iconsearch' />
						<input
							type='text'
							id='first'
							src={iconsearch}
							className=' bg-slate-200  text-center text-   h-10 md:h-10  font-semibold form-control input-group-lg'
							placeholder='Enter DApp name'
							required
						/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header