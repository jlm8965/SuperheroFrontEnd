import apiUrl from '../apiConfig'
import axios from 'axios'

export const superheroCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/superheroes',
		data: {
			superhero: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}