import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';
import Header from '../components/Header';

const Admin = () => {
	const currentPage = 'New User';
	//New user details
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [staffID, setStaffID] = useState('');
	const [email, setEmail] = useState('');
	const [staffPosition, setStaffPosition] =
		useState('');
	const [branchName, setBranchName] =
		useState('');
	const [state, setState] = useState('');
	const [role, setRole] = useState('');

	//Error State
	const [firstNameError, setFirstNameError] =
		useState('');
	const [lastNameError, setLastNameError] =
		useState('');
	const [staffIDError, setStaffIDError] =
		useState('');
	const [emailError, setEmailError] =
		useState('');
	const [
		staffPositionError,
		setStaffPositionError,
	] = useState('');
	const [branchNameError, setBranchNameError] =
		useState('');
	const [stateError, setStateError] =
		useState('');
	const [roleError, setRoleError] = useState('');

	//Role options populated from back end
	const options = [
		{ value: '', label: 'Select a role...' },
		{ value: 'Admin', label: 'Admin' },
		{ value: 'COSM', label: 'COSM' },
		{ value: 'HBS', label: 'HBS' },
		{ value: 'Proc', label: 'Proc' },
	];

	//Add user button
	const AddUser = () => {
		return (
			<div
				className='p-4 bg-secondary border-rounded text-white mb-8 flex btn'
				onClick={onClickAddUser}
			>
				<FaPlusCircle className='mt-1 mr-3' />
				Add User
			</div>
		);
	};
	const onClickAddUser = (e) => {
		e.preventDefault();

		//FirstName validation
		const firstNamePattern = /^[A-Za-z]+$/;
		if (firstName === '') {
			setFirstNameError(
				'Kindly enter first name',
			);
			return;
		} else if (
			!firstNamePattern.test(firstName)
		) {
			setFirstNameError(
				'First name must contain only letters',
			);
			return;
		} else setFirstNameError('');

		//LastName validation
		const lastNamePattern = /^[A-Za-z]+$/;
		if (lastName === '') {
			setLastNameError('Kindly enter last name');
			return;
		} else if (!lastNamePattern.test(lastName)) {
			setLastNameError(
				'Last name must contain only letters',
			);
			return;
		} else setLastNameError('');

		//Staff ID validation
		const staffIDPattern = /^SN\d{6}$/;
		if (staffID === '') {
			setStaffIDError(`Kindly enter staff's ID`);
			return;
		} else if (!staffIDPattern.test(staffID)) {
			setStaffIDError('Staff ID is not valid');
			return;
		} else setStaffIDError('');

		//Email validation
		const emailPattern =
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (email === '') {
			setEmailError(
				`Enter staff's email address`,
			);
			return;
		} else if (!emailPattern.test(email)) {
			setEmailError('Email address is not valid');
			return;
		} else setEmailError('');

		//StaffPosition validation
		const staffPositionPattern = /^[A-Za-z]+$/;
		if (staffPosition === '') {
			setStaffPositionError(
				'Staff position field is required',
			);
			return;
		} else if (
			!staffPositionPattern.test(staffPosition)
		) {
			setStaffPositionError(
				'Staff Position is not valid',
			);
			return;
		} else setStaffPositionError('');

		//Branch Name Validation
		const branchNamePattern = /^[A-Za-z]+$/;
		if (branchName === '') {
			setBranchNameError(
				'Branch Name is required',
			);
			return;
		} else if (
			!branchNamePattern.test(branchName)
		) {
			setBranchNameError(
				'Enter a valid FBN branch',
			);
			return;
		} else setBranchNameError('');

		//State validation
		const statePattern = /^[A-Za-z]+$/;
		if (state === '') {
			setStateError('Enter a valid state');
			return;
		} else if (!statePattern.test(state)) {
			setStateError('State is not valid');
			return;
		} else setStateError('');

		//Role validation
		const rolePattern = /^[A-Za-z]+$/;
		if (role === '') {
			setRoleError('Select a role');
			return;
		} else if (!rolePattern.test(role)) {
			setRoleError('Select a role');
			return;
		} else setRoleError('');

		//New user entire details
		const newUser = {
			firstName,
			lastName,
			staffID,
			email,
			staffPosition,
			branchName,
			state,
			role,
		};
		console.log(newUser);
	};

	return (
		<div className='container'>
			<Header currentPage={currentPage} />

			<div className='section-table border border-1 border-rounded p-4'>
				<form action=''>
					<div className='space-y-6 container'>
						<div className='form-group flex space-x-6'>
							<div className='form-item flex flex-col w-1/2'>
								<label
									htmlFor='items'
									className='font-semibold mb-2'
									style={{ color: '#5B5B5B' }}
								>
									First Name
								</label>
								<input
									type='text'
									name=''
									id=''
									className='p-4 border border-rounded bg-white'
									value={firstName}
									onChange={(e) =>
										setFirstName(e.target.value)
									}
								/>
								{firstNameError && (
									<span className='error mt-1'>
										{firstNameError}
									</span>
								)}
							</div>
							<div className='form-item flex flex-col w-1/2'>
								<label
									htmlFor='items'
									className='font-semibold mb-2'
									style={{ color: '#5B5B5B' }}
								>
									Last Name
								</label>
								<input
									type='text'
									name=''
									id=''
									className=' p-4 border border-rounded bg-white'
									value={lastName}
									onChange={(e) =>
										setLastName(e.target.value)
									}
								/>
								{lastNameError && (
									<span className='error mt-1'>
										{lastNameError}
									</span>
								)}
							</div>
						</div>
						<div className='form-group flex space-x-6'>
							<div className='form-item flex flex-col w-1/2'>
								<label
									htmlFor='items'
									className='font-semibold mb-2'
									style={{ color: '#5B5B5B' }}
								>
									Staff ID
								</label>
								<input
									type='text'
									name=''
									id=''
									className='p-4 border border-rounded bg-white'
									value={staffID}
									onChange={(e) =>
										setStaffID(e.target.value)
									}
								/>
								{staffIDError && (
									<span className='error mt-1'>
										{staffIDError}
									</span>
								)}
							</div>
							<div className='form-item flex flex-col w-1/2'>
								<label
									htmlFor='items'
									className='font-semibold mb-2'
									style={{ color: '#5B5B5B' }}
								>
									Email
								</label>
								<input
									type='email'
									name=''
									id=''
									className='p-4 border border-rounded bg-white'
									value={email}
									onChange={(e) =>
										setEmail(e.target.value)
									}
								/>
								{emailError && (
									<span className='error mt-1'>
										{emailError}
									</span>
								)}
							</div>
						</div>
						<div className='form-group flex space-x-6'>
							<div className='form-item flex flex-col w-1/2'>
								<label
									htmlFor='items'
									className='font-semibold mb-2'
									style={{ color: '#5B5B5B' }}
								>
									Staff Position
								</label>
								<input
									type='text'
									name=''
									id=''
									className=' p-4 border border-rounded bg-white'
									value={staffPosition}
									onChange={(e) =>
										setStaffPosition(
											e.target.value,
										)
									}
								/>
								{staffPositionError && (
									<span className='error mt-1'>
										{staffPositionError}
									</span>
								)}
							</div>
							<div className='form-item flex flex-col w-1/2'>
								<label
									htmlFor='items'
									className='font-semibold mb-2'
									style={{ color: '#5B5B5B' }}
								>
									Branch Name
								</label>
								<input
									type='text'
									name=''
									id=''
									className='p-4 border border-rounded bg-white'
									value={branchName}
									onChange={(e) =>
										setBranchName(e.target.value)
									}
								/>
								{branchNameError && (
									<span className='error mt-1'>
										{branchNameError}
									</span>
								)}
							</div>
						</div>
						<div className='form-group flex space-x-6'>
							<div className='form-item flex flex-col w-1/2'>
								<label
									htmlFor='items'
									className='font-semibold mb-2'
									style={{ color: '#5B5B5B' }}
								>
									State
								</label>
								<input
									type='text'
									name=''
									id=''
									className='p-4 border border-rounded bg-white'
									value={state}
									onChange={(e) =>
										setState(e.target.value)
									}
								/>
								{stateError && (
									<span className='error mt-1'>
										{stateError}
									</span>
								)}
							</div>
							<div className='form-item flex flex-col  w-1/2'>
								<label
									htmlFor='items'
									className='font-semibold mb-2'
									style={{ color: '#5B5B5B' }}
								>
									Role
								</label>
								<select
									name=''
									id=''
									className='p-4 border border-rounded bg-white'
									value={role}
									onChange={(e) =>
										setRole(e.target.value)
									}
								>
									{options.map(
										(option, index) => (
											<option
												key={index}
												value={option.value}
											>
												{option.label}
											</option>
										),
									)}
								</select>
								{roleError && (
									<span className='error mt-1'>
										{roleError}
									</span>
								)}
							</div>
						</div>
						<div className='form-item mb-2 flex flex-row justify-end'>
							<AddUser />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Admin;
