import React, { useState } from 'react' 
import { superheroCreate } from '../api/superhero'

const SuperheroCreate = ({ user, msgAlert }) => {

    const defaultSuperhero = {
        name: '',
        type: ''
    }

    const [superhero, setSuperhero] = useState(defaultSuperhero)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current superhero
        // then comma and modify the key to the value you need
        setSuperhero({...superhero, [event.target.name]: event.target.value})
    }

    const handleCreateSuperhero = () => {
        superheroCreate(superhero, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Superhero',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Superhero Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
			<>
				<input
					type='text'
					value={superhero.name}
					name='name'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={superhero.type}
					name='type'
					onChange={handleChange}
				/>
				<button onClick={handleCreateSuperhero}>Create Superhero</button>
			</>
		)
}

export default SuperheroCreate