import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';




const Formulario = ({crearCita})=>{

	//Crear State para citas

	const [cita, actualizarCitas] = useState({
		nombre:'',
		correo:'',
		fecha:'',
		hora:'',
		sintomas:''
	})

	//Crear State para error

	const [error, actualizarError] = useState(false)


	//Actualizar el state
	const actualizarState = e =>{
		actualizarCitas({
			...cita,
			[e.target.name]: e.target.value
		})
	}
	
	const {nombre, correo, fecha, hora, sintomas} = cita;

	//Cuando el usuario presiona el boton de agregar Cita

	const submitCita= e=>{
		e.preventDefault()

		//Validar
		if(nombre.trim() === '' || correo.trim() ==='' || fecha.trim() ==='' || hora.trim() ==='' || sintomas.trim() ===''){
			actualizarError(true);
			return;
		}

		//Eliminar el mensaje
		actualizarError(false);

		//Asignar un ID
		cita.id = uuidv4();

		//Crear la Cita
		crearCita(cita);

		//Reiniciar Formulario
		actualizarCitas({
			nombre:'',
			correo:'',
			fecha:'',
			hora:'',
			sintomas:''
		})
	}
	

	return (
		<Fragment>
			<h2>Generar Cita</h2>
			{error? <p className="alerta-error">Todos los campos son obligatorios</p>:null}
			<form
				onSubmit={submitCita}
			>
				<label>Nombre</label>
				<input
					type="text"
					name="nombre"
					className="u-full-width"
					onChange={actualizarState}
					value={nombre}
				/>
				<label>Correo</label>
				<input
					type="email"
					name="correo"
					className="u-full-width"
					onChange={actualizarState}
					value={correo}
				/>
				<label>Fecha</label>
				<input
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={actualizarState}
					value={fecha}
				/>
				<label>Hora</label>
				<input
					type="time"
					name="hora"
					className="u-full-width"
					onChange={actualizarState}
					value={hora}
				/>
				<label>Síntomas</label>
				<textarea
					name="sintomas"
					className="u-full-width"
					onChange={actualizarState}
					value={sintomas}
				>
					
				</textarea>
				<button 
					type="submit" 
					className="u-full-width button-primary"
					onClick={submitCita}
					>Agregar Cita</button>
			</form>
		</Fragment>
	);
}

export default Formulario;