import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BackToTop from './BackToTop'
// import LogoNVR from '../../assets/images/Logo/LogoNVR.svg'
import Facebook from '../../assets/images/iconfooter/Facebook.svg'
import Instgram from '../../assets/images/iconfooter/Instgram.svg'
import Twitter from '../../assets/images/iconfooter/Twitter.svg'
import Linkedin from '../../assets/images/iconfooter/Linkedin.svg'
const Footer = () => {
	const footerEl = [
		{
			title: 'About Us',
			element: [
				{
					name: 'Company',
					link: '/'
				},
				{
					name: 'Authenticity verification',
					link: '/'
				},
				{
					name: 'Join Ushiring!',
					link: '/'
				},
				{
					name: 'Partnership',
					link: '/'
				}
			]
		},
		{
			title: 'User Support',
			element: [
				{
					name: 'Contact Us',
					link: '/'
				},
				{
					name: 'Business',
					link: '/'
				}
			]
		},
		{
			title: 'Wallet',
			element: [
				{
					name: 'IOS',
					link: '/'
				},
				{
					name: 'Android',
					link: '/'
				},
				{
					name: 'Chrome Extension',
					link: '/'
				}
			]
		},
		{
			title: 'Q&A',
			element: [
				{
					name: 'How to create a wallet',
					link: '/'
				},
				{
					name: 'How to make a transfer',
					link: '/'
				},
				{
					name: 'How to trade',
					link: '/'
				},
				{
					name: 'How to make a cross-chain swap',
					link: '/'
				},
				{
					name: 'How to trade NFTs',
					link: '/'
				}
			]
		},
		{
			title: 'Resource',
			element: [
				{
					name: 'Material',
					link: '/'
				},
				{
					name: 'Privacy Policy',
					link: '/'
				},
				{
					name: 'User Agreement',
					link: '/'
				}
			]
		}
	]
	return (
		<div className='bg-[#000000] w-auto h-auto py-10'>
			<div className='mx-24'>
				<div className='grid grid-cols-1 md:grid-cols-6'>
					<div className='md:col-span-'>
						<div className='flex items-center  '>
							{/* <Image src={LogoNVR} alt='LogoNVR' /> */}

							<h1 className='ml-4 text-2xl text-white'>SuiDApp Store</h1>
						</div>
					</div>
					<div className='col-span-5  '>
						<div className='grid grid-cols-5'>
							{footerEl.map((item, index) => (
								<div key={index} className='flex flex-col ml-4'>
									{/* title */}
									<h3 className='flex flex-row items-left text-white mb-8 '>
										<span className='lg:text-3xl text-left text-lg '>{item.title}</span>
									</h3>
									{/* element */}
									<ul>
										{item.element.map((element, index) => (
											<li
												key={index}
												className='flex flex-col py-3 font-normal lg:text-base text-sm text-white '>
												{element.link ? (
													<Link href={element.link}>
														{element.link.includes('http') ? (
															<a></a>
														) : (
															<a className='transition hover:translate-x-1 hover:text-[#557de2]'>
																{element.name}
															</a>
														)}
													</Link>
												) : (
													<a></a>
												)}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='border-t-[0.2px] border-white opacity-2 grid md:grid-cols-2 justify-center md:justify-end py-3 ml-4'>
					<h1 className=' text-white font-extralight text-base flex items-center justify-start py-2'>
						Copyright © 2022 Navara.All Rights Reserved
					</h1>
					<div className='flex justify-center md:justify-end'>
						<Link href='https://' passHref>
							<a className='mr-4'>
								<Image src={Facebook} alt='Face' />
							</a>
						</Link>
						<Link href='https://' passHref>
							<a className='mr-4'>
								<Image src={Twitter} alt='Twitter' />
							</a>
						</Link>
						<Link href='https://' passHref>
							<a className='mr-4'>
								<Image src={Instgram} alt='Instgram' />
							</a>
						</Link>
						<Link href='https://' passHref>
							<a className='mr-4'>
								<Image src={Linkedin} alt='Linkedin' />
							</a>
						</Link>
					</div>
				</div>
			</div>
			{/* <BackToTop /> */}
		</div>
	)
}

export default Footer
