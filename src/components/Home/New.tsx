import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getDapp } from '../../api/suidapp'
import Menubar from './Menubar'

type New = {
	data: any
}
function New({ data }: New) {
	const [addressData, setAddressData] = useState<any>()
	useEffect(() => {
		const getData = async () => {
			const addressData = await getDapp()

			setAddressData(addressData.data)
		}
		getData()
	}, [])
	console.log(addressData)

	return (
		<div className='w-full flex mx-10  bg-white'>
			<Menubar data={undefined} />
			<div className='m-5'>
				<div className='my-5'>
					<span className='font-bold text-3xl'>News</span>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
					{addressData
						? addressData.map((item: any, index: React.Key | null | undefined) => (
								// eslint-disable-next-line react/jsx-key
								<a
									target={'_blank'}
									href={item.link as string}
									className='border border-gray-100 h-40 rounded-lg p-3 hover:bg-[#f6f4f4] cursor-pointer'
									rel='noreferrer'>
									<div className='flex flex-row items-center w-full'>
										<div className='rounded-full h-10 w-10 items-center justify-center bg-white border flex border-gray-100'>
											<img src={item.logo} width={40} height={40} className='rounded-full' />
										</div>
										<span className='font-bold text-lg mx-2'>{item.name}</span>
									</div>
									<span className='text_truncate break-normal	'>{item.description}</span>
								</a>
						  ))
						: null}
				</div>
			</div>
		</div>
	)
}

export default New
