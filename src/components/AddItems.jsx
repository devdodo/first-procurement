import React from 'react';
import { FaPlusCircle, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const AddItems = () => {
	//Item list
	const [item, setItem] = useState('')
	const [quantity, setQuantity] = useState('')
	const [comment, setComment] = useState('')
	const [approverName, setApproverName] = useState('')

	let approver = ""

	//Error State
	const [itemError, setitemError] = useState('');
	const [quantityError, setQuantityError] = useState('');

	//Modal Display
	const [modalDisplay, setModalDisplay] = useState(false);

    const [invalidItems, setInvalidItems] = useState(false)

	const onChangeItem = (e) => {
		setItem(e.target.value);
	};
	const onChangeQuantity = (e) => {
		setQuantity(e.target.value);
	};
	const onChangeComment  = (e) => {
		setComment(e.target.value)
	}

	//state of items_quant
	const [items, setitems] = useState([]);

	const onClickAddItem = (e) => {
		e.preventDefault();

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

		invalidItems ? setInvalidItems(false) : 

		
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

	const SubmitButton = ({btnText, btnIcon}) => {
		return (
			<div>
                <button>
                    <div className={`p-4 bg-secondary border-rounded text-white w-48 mb-8 flex justify-center`}> 
                        {btnIcon?<FaPlusCircle className='mt-1 mr-3' />:""}
                        {btnText}
                    </div>
                </button>
        </div>
		);
	};

    const submitForm = (e) => {
        e.preventDefault()

		const userData = JSON.parse(localStorage.getItem('logindata'))

		fetch(`http://localhost:8000/users?solId=${userData.solId}&role=HBS`)
		.then(data => data.json())
		.then(res => {
			approver = res[0].name
		})
		.catch(error => console.error(error))

		const requestData = {
			items,
			status: "pending",
			approver: approver,
			date: Date.now(),
			solId: userData.solId,
			branchLocation: userData.branchLocation,
			branchState: userData.branchState,
			hbsApproval: false,
			cosmApproval: false,
			initiatedBy: userData.staffId,
			initiatorName: userData.name,
			comment: comment
		}

		console.log(requestData)

		if(items.length > 0){

			fetch('http://localhost:8000/request',{
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(requestData)
			})
			.then(data => data.json())
			.then(res => {
				if(res.length !== 0){
					setInvalidItems(false)

					modalDisplay ? setModalDisplay(false) : setModalDisplay(true)
				}
			})
			.catch(error => console.error(error))

		}else{
			setInvalidItems(true)
		}

    }

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
					{invalidItems? 
                        <div className="border border-red-500 bg-red-100 text-red-500 w-textarea p-3 rounded-lg mb-4 text-center">
                            <p>Kindly fill the form below.</p>
                        </div>
                    : ""}
				<form action='' onSubmit={submitForm}>
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
								value={comment}
								onChange={onChangeComment}
							></textarea>
						</div>
					</div>
					<div className='form-group'>
						<SubmitButton
							btnText={'Send Request'}
							btnIcon={true}
						/>
					</div>
				</form>

            <div className={`fixed top-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-20 overflow-x-hidden overflow-y-auto md:inset-0  max-h-screen ${modalDisplay ? "flex" : "hidden" } justify-center items-center`}>
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow bg-primary">
                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <FaCheckCircle className="text-white text-center text-4xl" />
                            </div>
                            <h3 className="mb-5 text-lg font-normal text-white">Your request has been sent successfully.</h3>
                            <Link to="/dashboard" className="text-white bg-secondary focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

			</div>
		</div>
	);
};

export default AddItems;