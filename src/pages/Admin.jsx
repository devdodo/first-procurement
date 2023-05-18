import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';
import Header from '../components/Header';

const Admin = () => {
	const currentPage = 'New User';
	//Item list
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

	//onChange Events
	const onChangeFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const onClickAddItem = (e) => {
		e.preventDefault();
		console.log('click');
	};

	//Role options populated from back end
	const options = [
		{ value: '', label: '' },
		{ value: 'Amin', label: 'Admin' },
		{ value: 'COSM', label: 'COSM' },
		{ value: 'HBS', label: 'HBS' },
		{ value: 'Proc', label: 'Proc' },
	];

	const AddUser = () => {
		return (
			<div
				className='p-4 bg-secondary border-rounded text-white mb-8 flex btn'
				onClick={onClickAddItem}
			>
				<FaPlusCircle className='mt-1 mr-3' />
				Add User
			</div>
		);
	};
	return (
		<div className='container'>
			<Header currentPage={currentPage} />

			<div className='section-table border border-1 border-rounded p-4'>
				<form action=''>
					<div className='space-y-5 container'>
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
									className=' p-4 border border-rounded bg-white'
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
								<input
									type='text'
									name=''
									id=''
									className='p-4 border border-rounded bg-white'
								/>
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
