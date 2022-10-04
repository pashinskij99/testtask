import clsx from 'clsx';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../../../store/users';
import { Button } from '../../../components/button';

export const GetRequestBtnShowMore = () => {

	const dispatch = useDispatch()
	const { page, total_pages } = useSelector(state => state.users)

	const handlePage = () => dispatch(fetchUsers(page + 1))
	
	return (
		<div className="get-request__btn-more margin-top-50px">
			{/* <button  */}
				{/* onClick={handlePage}  */}
				{/* className={clsx('btn btn-primary', page === total_pages && 'btn_hidden')}>Show more</button> */}
			<Button 
				handleClick={handlePage} 
				TagHtml='button' 
				className={page === total_pages && 'btn_hidden'}
			>
				Show more
			</Button>
		</div>
	)
}
