import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
	const registerFormik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			civility: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: Yup.object({
			firstname: Yup.string().required('Required'),
			lastname: Yup.string().required('Required'),
			civility: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string().required('Required'),
			confirmPassword: Yup.string()
				.required()
				.oneOf([Yup.ref('password')], 'Passwords must match'),
		}),
		onSubmit: () => {
			// register(values.firstname, values.email, values.password).then(
			// 	(response) => {
			// 		console.log(response.data);
			// 	}
			// );
			// .catch((error) => {
			// 	setError(error.response.data);
			// });
		},
	});

	return (
		<form id="register" onSubmit={registerFormik.handleSubmit}>
			<div className="flex flex-col items-center justify-center">
				<fieldset className="flex flex-col p-6 rounded-md w-full">
					<div className="space-y-2 col-span-full lg:col-span-1">
						<p className="font-medium">Information personnel</p>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm" htmlFor="civility">
								Civilité
							</label>
							<select
								className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
								id="civility"
								name="civility"
								onChange={registerFormik.handleChange}
								value={registerFormik.values.civility}
							>
								<option value="Mme">Mr</option>
								<option value="Mlle">Mme</option>
								<option value="M">Non défini</option>
							</select>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm" htmlFor="firstname">
								Prénom
							</label>
							<input
								className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
								id="firstname"
								type="text"
								placeholder="Prénom"
								onChange={registerFormik.handleChange}
								value={registerFormik.values.firstname}
							/>
							{registerFormik.touched.firstname &&
							registerFormik.errors.firstname ? (
								<div className="text-red-500 text-xs italic">
									{registerFormik.errors.firstname}
								</div>
							) : null}
						</div>
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm" htmlFor="lastname">
								Nom
							</label>
							<input
								className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
								id="lastname"
								type="text"
								placeholder="Nom"
								onChange={registerFormik.handleChange}
								value={registerFormik.values.lastname}
							/>
							{registerFormik.touched.lastname &&
							registerFormik.errors.lastname ? (
								<div className="text-red-500 text-xs italic">
									{registerFormik.errors.lastname}
								</div>
							) : null}
						</div>
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm" htmlFor="email">
								Email
							</label>
							<input
								className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
								id="email"
								type="email"
								placeholder="Email"
								onChange={registerFormik.handleChange}
								value={registerFormik.values.email}
							/>
							{registerFormik.touched.email && registerFormik.errors.email ? (
								<div className="text-red-500 text-xs italic">
									{registerFormik.errors.email}
								</div>
							) : null}
						</div>
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm" htmlFor="password">
								Mot de passe
							</label>
							<input
								className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
								id="password"
								type="password"
								placeholder="******"
								onChange={registerFormik.handleChange}
								value={registerFormik.values.password}
							/>
							{registerFormik.touched.password &&
							registerFormik.errors.password ? (
								<div className="text-red-500 text-xs italic">
									{registerFormik.errors.password}
								</div>
							) : null}

							{/*{error ? <p className="text-red-500 text-xs italic">{error}</p> : null}*/}
						</div>
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm" htmlFor="confirmPassword">
								Confirmation
							</label>
							<input
								className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
								id="confirmPassword"
								type="password"
								placeholder="******"
								onChange={registerFormik.handleChange}
								value={registerFormik.values.confirmPassword}
							/>
							{registerFormik.touched.confirmPassword &&
							registerFormik.errors.confirmPassword ? (
								<div className="text-red-500 text-xs italic">
									{registerFormik.errors.confirmPassword}
								</div>
							) : null}

							{/*{error ? <p className="text-red-500 text-xs italic">{error}</p> : null}*/}
						</div>
					</div>
				</fieldset>
				<fieldset className="flex flex-col p-6 rounded-md w-full">
					<div className="space-y-2 col-span-full lg:col-span-1">
						<p className="font-medium">Profile</p>
					</div>
					<div className="col-span-full">
						<label htmlFor="bio" className="text-sm">
							Photo
						</label>
						<div className="flex items-center space-x-2">
							<img
								src="https://source.unsplash.com/30x30/?random"
								alt=""
								className="w-10 h-10 rounded-full bg-gray-500"
							/>
							<button
								type="button"
								className="px-4 py-2 border rounded-md border-gray-800"
							>
								Change
							</button>
						</div>
					</div>
				</fieldset>
				<button
					className="bg-secondary hover:bg-tertiary transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
					type="submit"
				>
					Connexion
				</button>
			</div>
		</form>
	);
};

export default RegisterForm;
