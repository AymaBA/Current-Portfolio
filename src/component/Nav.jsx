import React from 'react';
export const Nav = () => {
	const style = {
		backgroundColor:"rgb(9, 28, 41)"
	}
	return (
		<div className="flex items-center py-2 justify-around w-full mx-auto text-white font-dosis" style={style}>
			<h1 className="font-bold text-3xl">Ayman
			<span className="h-5 w-5 bg-red-500 rounded-full inline-block ml-2"></span>
			</h1>
			<div >
				<span className="text-xl mr-4">Stack</span>
				<span className="text-xl mr-4">Project</span>
				<span className="text-xl mr-4">Contact</span>
			</div>
		</div>
	);
};
