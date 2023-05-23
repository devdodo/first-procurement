import React from 'react';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const ChangePassword = () => {
	//Password
	const [newPassword, setNewPassword] =
		useState('');
	const [confirmPassword, setConfirmPassword] =
		useState('');

	//password error message
	const [newPasswordError, setNewPasswordError] =
		useState('');
	const [
		confirmPasswordError,
		setConfirmPasswordError,
	] = useState('');

	//Change password function

	const SendRequest = () => {
		return (
			<button>
				<div className='p-4 bg-secondary border-rounded text-white w-48 mb-8 flex'>
					<FaPlusCircle className='mt-1 mr-3' />
					Send Request
				</div>
			</button>
		);
	};

	const onSubmitPassword = (e) => {
		e.preventDefault();

		//New password validation
		const newPasswordPattern =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
		if (!newPasswordPattern.test(newPassword)) {
			setNewPasswordError(
				'Password pattern not valid',
			);
			return;
		} else setNewPasswordError('');

		// Comfirm password validation

		if (confirmPassword !== newPassword) {
			setConfirmPasswordError(
				'Passwords do not match',
			);
			return;
		} else setConfirmPasswordError('');
	};

	return (
		<div>
			<div className='section-title mb-3'>
				<p
					className='font-semibold'
					style={{ color: '#5B5B5B' }}
				>
					Change Password
				</p>
			</div>
			<div className='section-table border border-1 border-rounded p-4'>
				<form
					action=''
					onSubmit={onSubmitPassword}
				>
					<div className='form-group mb-4'>
						<div className='form-item flex flex-col mr-4'>
							<label
								htmlFor='items'
								className='font-semibold mb-2'
								style={{ color: '#5B5B5B' }}
							>
								Password
							</label>
							<input
								type='password'
								name='itemNumber'
								id=''
								className='input-width p-4 border border-rounded bg-white'
								placeholder='Enter Old Password...'
							/>
						</div>
					</div>
					<hr />
					<p
						className='font-semibold text-lg mt-4'
						style={{ color: '#5B5B5B' }}
					>
						Password Requirements
					</p>
					<p
						className='mt-2'
						style={{ color: '#5B5B5B' }}
					>
						Password must be a combination of
						upper case, lower case and special
						characters and must include numbers (0
						through 9).
					</p>
					<p
						className='mt-2 mb-8'
						style={{ color: '#5B5B5B' }}
					>
						Reuse of any of your last 5
						passwords is prohibited.
					</p>
					<div className='form-group mb-4 mt-3'>
						<div className='form-item flex flex-col mr-4'>
							<label
								htmlFor='items'
								className='font-semibold mb-2'
								style={{ color: '#5B5B5B' }}
							>
								New Password
							</label>
							<input
								type='password'
								name='itemNumber'
								id=''
								className='input-width p-4 border border-rounded bg-white'
								placeholder='Enter New Password...'
								value={newPassword}
								onChange={(e) =>
									setNewPassword(e.target.value)
								}
							/>
							{newPasswordError && (
								<span className='error mt-1'>
									{newPasswordError}
								</span>
							)}
						</div>
					</div>
					<div className='form-group mb-4'>
						<div className='form-item flex flex-col mr-4'>
							<label
								htmlFor='items'
								className='font-semibold mb-2'
								style={{ color: '#5B5B5B' }}
							>
								Confirm Password
							</label>
							<input
								type='password'
								name='itemNumber'
								id=''
								className='input-width p-4 border border-rounded bg-white'
								placeholder='Confirm New Password...'
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(
										e.target.value,
									)
								}
							/>
							{confirmPasswordError && (
								<span className='error mt-1'>
									{confirmPasswordError}
								</span>
							)}
						</div>
					</div>

					<div className='form-group'>
						<SendRequest />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChangePassword;
