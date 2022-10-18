import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menubar from '../components/Home/Menubar'
type LayoutPageProps = {
	children?: React.ReactNode
	title?: any
}

const LayoutPage = ({ children, title }: LayoutPageProps) => {
	return (
		<div>
			<Head>
				<title>{title || 'SuiDApp Store'}</title>
				<link rel='icon' href='/glasswallet.svg' />
			</Head>
			<main>
				<Header />
				{children}
				<Footer />
			</main>
		</div>
	)
}

export default LayoutPage
