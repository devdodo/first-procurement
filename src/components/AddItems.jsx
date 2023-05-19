import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import AddButton from './AddButton';
import { useState } from 'react';

const AddItems = () => {
	//Item list
	const [item, setItem] = useState('');
	const [quantity, setQuantity] = useState('');

	//Error State
	const [itemError, setitemError] = useState('');
	const [quantityError, setQuantityError] =
		useState('');

	const onChangeItem = (e) => {
		setItem(e.target.value);
	};
	const onChangeQuantity = (e) => {
		setQuantity(e.target.value);
	};

	//state of items_quant
	const [items, setitems] = useState([]);

	const onClickAddItem = (e) => {
		e.preventDefault();
		console.log('click');

		//Convert quantity from string to integer
		const quantityInt = parseFloat(quantity);

		//Error Handling
		if (item === '') {
			setitemError('Please enter a valid item!');
			return;
		} else setitemError('');

		if (isNaN(quantityInt) || quantityInt < 1) {
			setQuantityError(
				'Please enter a valid quantity!',
			);
			return;
		} else setQuantityError('');

		//Item and quantity
		const item_quant = {
			item,
			quantity,
		};
		setitems([...items, item_quant]);
		console.log(items);

		//Clear errors
		setitemError('');
		setQuantityError('');
	};

	//options populated from back end
	const options = [
		{ value: '', label: 'Select an Item...' },
		{ value: 'Laptop', label: 'Laptop' },
		{ value: 'Printer', label: 'Printer' },
		{ value: 'Air Conditioner', label: 'Air Conditioner' },
		{ value: 'A4 Papers', label: 'A4 Papers' },
		{ value: 'Stationaries', label: 'Stationaries' },
		{ value: 'Withdrawal Slips', label: 'Withdrawal Slips' },
		{ value: 'Deposit Slips', label: 'Deposit Slips' },
	];

	const AddItem = () => {
		return (
			<div
				className='p-4 bg-secondary border-rounded text-white mb-8 flex'
				onClick={onClickAddItem}
			>
				<FaPlusCircle className='mt-1 mr-3' />
				Add Item
			</div>
		);
	};
	return (
		<div>
			<div className='section-title mb-3'>
				<p
					className='font-semibold'
					style={{ color: '#5B5B5B' }}
				>
					Request Form
				</p>
			</div>
			<div className='section-table border border-1 border-rounded p-4'>
				<form action=''>
					<div className='form-group flex'>
						<div className='form-item flex flex-col mr-4'>
							<label
								htmlFor='items'
								className='font-semibold mb-2'
								style={{ color: '#5B5B5B' }}
							>
								Item(s)
							</label>
							<select
								className='input-width p-4 border border-rounded bg-white'
								onChange={onChangeItem}
							>
								{options.map((option, index) => (
									<option
										key={index}
										value={option.value}
									>
										{option.label}
									</option>
								))}
							</select>
							{itemError && (
								<span className='error mt-1'>
									{itemError}
								</span>
							)}
							{quantityError && (
								<span className='error mt-1'>
									{quantityError}
								</span>
							)}
						</div>
						<div className='form-item flex flex-col mr-4'>
							<label
								htmlFor='items'
								className='font-semibold mb-2'
								style={{ color: '#5B5B5B' }}
							>
								Quantity
							</label>
							<input
								type='number'
								name='itemNumber'
								id=''
								className='w-28 p-4 border border-rounded bg-white'
								onChange={onChangeQuantity}
								value={quantity}
							/>
						</div>
						<div className='form-item'>
							<br className='mb-2' />
							<AddItem />
						</div>
					</div>

					<div className='form-group flex flex-col mr-4 w-items'>
						{items.map((item, index) => (
							<div
								key={index}
								className='form-item flex text-green-700 bg-green-100 items-center space-x-9 pl-5 p-4 border border-green border-rounded mb-2 w-textarea'
							>
								<div className="w-56">{item.item}</div>
								<div>x {item.quantity}</div>
							</div>
						))}
					</div>
					<div className='form-group mb-3 mt-4'>
						<div className='form-item flex flex-col mr-4'>
							<label
								htmlFor='items'
								className='font-semibold mb-2'
								style={{ color: '#5B5B5B' }}
							>
								Comment
							</label>
							<textarea
								name=''
								id=''
								cols='40'
								rows='5'
								className='w-textarea p-4 border border-rounded bg-white'
							></textarea>
						</div>
					</div>
					<div className='form-group'>
						<AddButton
							btnText={'Send Request'}
							btnIcon={true}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddItems;