/*

import React, { useState } from 'react';

const Filterbar = () => {
	const [selectedFilters, setSelectedFilters] = useState([]);

	const handleCheckboxChange = (event) => {
		const filterName = event.target.name;
		const isChecked = event.target.checked;

		if (isChecked) {
			setSelectedFilters((prevSelectedFilters) => [...prevSelectedFilters, filterName]);
		} else {
			setSelectedFilters((prevSelectedFilters) => prevSelectedFilters.filter((name) => name !== filterName));
		}
	};

    return (
    <div>
			<div>
				<span>Tipo</span>

				<div>
					<input
						type='checkbox'
						name='grass'
						id='grass'
						onChange={handleCheckboxChange}
						
					/>
					<label htmlFor='grass'>Planta</label>
				</div>
				<div>
					<input
						type='checkbox'
						name='fire'
						id='fire'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='fire'>Fuego</label>
				</div>
				<div>
					<input
						type='checkbox'
						name='bug'
						id='bug'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='bug'>Bicho</label>
				</div>
				<div>
					<input
						type='checkbox'
						name='fairy'
						id='fairy'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='fairy'>Hada</label>
				</div>
				<div>
					<input
						type='checkbox'
						name='dragon'
						id='dragon'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='dragon'>Dragón</label>
				</div>
				<div>
					<input
						type='checkbox'
						name='shadow'
						id='shadow'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='shadow'>Fantasma</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='ground'
						id='ground'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='ground'>Tierra</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='normal'
						id='normal'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='normal'>Normal</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='psychic'
						id='psychic'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='psychic'>Psíquico</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='steel'
						id='steel'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='steel'>Acero</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='dark'
						id='dark'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='dark'>Siniestro</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='electric'
						id='electric'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='electric'>Eléctrico</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='fighting'
						id='fighting'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='fighting'>Lucha</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='flying'
						id='flying'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='flying'>Volador</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='ice'
						id='ice'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='ice'>Hielo</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='poison'
						id='poison'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='poison'>Veneno</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='rock'
						id='rock'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='rock'>Roca</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='water'
						id='water'
						onChange={handleCheckboxChange}
					/>
					<label htmlFor='water'>Agua</label>
				</div>
			</div>
		</div>
    );
};

export default Filterbar;

*/