import Link from 'next/link'
import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import ScamToken from '../../../assets/images/iconfooter/Facebook.svg'
import MobilePhishing from '../../../assets/images/iconfooter/Instgram.svg'
import Abnormal from '../../../assets/images/iconfooter/Linkedin.svg'
type Menubar = {
	data: any
}
function Menubar({ data }: Menubar) {
	const MenuBar = [
		{
			label: 'My Favorite',
			link: '/'
		},
		{
			label: 'Browsing history',
			link: '#'
		},
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
		<div className='  '>
			<EmblaCarousel slides={MenuBar} className='mt-1' />
		</div>
	)
}

export default Menubar
