import { TokenAddress } from '../types/types'
import axios, { Axios } from 'axios'
import { RecommendedDapp } from '../types/types'

const API = axios.create({
	baseURL: 'https://qoun6czv.directus.app/items/dapp',
	headers: {
		Authorization: 'Bearer PCbkQ4FFfue0N4qpBloOUoPMV6qukcfo'
	}
})

export const getDapp = async () => {
	try {
		const res = await API.get('')
		console.log(res)

		return res.data
	} catch (e) {
		return e
	}
}
