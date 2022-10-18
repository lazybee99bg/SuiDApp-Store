import Link from 'next/link'
import React from 'react'
type Menubar = {
	data: any
}
function Menubar({ data }: Menubar) {
	const Menu = [
		{
			label: 'DApp Recc',
			link: '/news'
		},
		{
			label: 'Airdrop',
			link: '#'
		},
		{
			label: 'DeFi',
			link: '#'
		},
		{
			label: 'NFT',
			link: '#'
		},
		{
			label: 'Bridge',
			link: '#'
		},
		{
			label: 'Exchange',
			link: '#'
		},
		{
			label: 'Tools',
			link: '#'
		},
		{
			label: 'NFT',
			link: '#'
		},
		{
			label: 'GameFi',
			link: '#'
		},
		{
			label: 'GameFi',
			link: '#'
		},
		{
			label: 'Landing',
			link: '#'
		}
	]
	return (
		<div className='  border-r'>
			<div className='  border-b'>
				<div className='my-10   '>My Favorite</div>
				<div className='my-10   '>Browsing history</div>
			</div>
			<div className=''>
				{Menu?.map((item: any, index: React.Key | null | undefined) => (
					// eslint-disable-next-line react/jsx-key
					<Link key={index} href={item.link}>
						<a
							className='cursor-pointer single-about-us  flex  w-44 h-14 text-center  hover:border hover:border-gray-200 hover:bg-gray-200 hover:rounded-lg  '
							// target='_blank'
							rel='noreferrer'>
							{/* <div className='icon'></div> */}
							<h3 className=' text-blue-400 flex  justify-center text-center'>{item.label}</h3>
							<p />
						</a>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Menubar
