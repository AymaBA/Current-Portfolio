import React from 'react';
export const Nav = () => {
	return (
		<nav className='flex h-auto bg-blue-700 justify-around text-white shadow-2xl' >
			<h3 className="mt-4 text-shadow font-bold text-2xl"> Home </h3>
			<ul className="flex m-0 font- justify-around w-3/12 text-xl ">
				<li className="bg-transparent transition-all rounded-full m-4 px-5 hover:bg-blue-800 hover:shadow-2xl cursor-pointer">About</li>
				<li className="bg-transparent transition-all rounded-full m-4 px-5 hover:bg-blue-800 hover:shadow-2xl cursor-pointer" >Contact</li>
			</ul>
		</nav>
	);
};
