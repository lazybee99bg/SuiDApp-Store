import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/images/Logo/logo.png'
import { DownloadIcon, SearchIcon } from '@heroicons/react/solid'
// import icondowload from '../../assets/images/iconheader/dowload.png'
import iconglobal from '../../assets/images/iconheader/global.png'
import icondark from '../../assets/images/iconheader/dark.svg'
import InputText from '../common/InputText'

const Header = () => {
	const [collapse, setCollapse] = useState('nav__menu')
	const [toggleIcon, setToggleIcon] = useState('toggler__icon')

	const onToggle = () => {
		collapse === 'nav__menu' ? setCollapse('nav__menu nav__collapse') : setCollapse('nav__menu')
		toggleIcon === 'toggler__icon'
			? setToggleIcon('toggler__icon toggle')
			: setToggleIcon('toggler__icon')
	}

	const headerEl = [
		{
			title: 'Wallet',
			link: '/x',
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
			link: '/',
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
			link: '/',
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
				<div className='flex  justify-between'>
					<div className='flex flex-row items-center '>
						<div className=' flex justify-center items-center  '>
							<Image src={logo} width={40} height={40} alt='logo' />
							<span className='text-xl sm:text-2xl md:text-3xl font-bold ml-2 mr-4'>
								Glass DApp
							</span>
						</div>
					</div>

					<div className='flex'>
						<div className=''>
							<nav className='nav'>
								<ul className={collapse}>
									{headerEl.map((item) => (
										<li key={item.title} className='nav__item '>
											<a href={item.link} className='nav__link hover:text-[#e73759]'>
												{item.title}
											</a>
										</li>
									))}
									<div className=' flex items-center mt-1  '>
										{/* <div className=' mx-1'>
								<Image width={30} height={30} alt='Loading..' objectFit='cover' src={icondowload} />
							</div> */}
										<div className='mx-1'>
											<Image
												width={30}
												height={30}
												alt='Loading..'
												objectFit='cover'
												src={iconglobal}
											/>
										</div>
										<div className=' mx-1 mr-4'>
											<Image
												width={30}
												height={30}
												alt='Loading..'
												objectFit='cover'
												src={icondark}
											/>
										</div>
									</div>
								</ul>

								<div className={toggleIcon} onClick={onToggle}>
									<div className='line__1'></div>
									<div className='line__2'></div>
									<div className='line__3'></div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<div className='mx-6 border-b pb-5'>
				<div className='flex items-center justify-between'>
					<div className='flex justify-center text-3xl font-medium'>Store</div>
					<div className=' md:w-96 bg-gray-100 rounded-lg flex items-center'>
						<SearchIcon className='w-5 mx-1 inline-block ' />
						<InputText
							value=''
							placeholder='Enter DApp Name'
							width='w-full '
							onChange={function (str: string): void {
								throw new Error('Function not implemented.')
							}}></InputText>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
