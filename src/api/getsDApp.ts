import axios from 'axios'

const apiDApps = axios.create({
	method: 'get',
	url: 'https://qoun6czv.directus.app/items/dapp',
	headers: {
		Authorization: 'Bearer PCbkQ4FFfue0N4qpBloOUoPMV6qukcfo'
	}
})

apiDApps.interceptors.response.use(
	(response: { data: any }) => {
		return response.data
	},
	(error: any) => {
		return apiDApps
	}
)
export default apiDApps
