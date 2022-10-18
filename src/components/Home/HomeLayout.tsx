import React from 'react'
import apiDApps from '../../api/getsDApp'
import Menubar from './Menubar'
import New from './New'

function HomeLayout() {
	return (
		<div className='flex-row flex bg-white w-full'>
			{/* <Menubar data={undefined} /> */}
			<New data={apiDApps} />
		</div>
	)
}

export default HomeLayout
