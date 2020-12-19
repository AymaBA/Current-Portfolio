import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
export default function Nav() {
	const style = {
		backgroundColor:"rgb(9, 28, 41)"
	}
	return (
		<div className="flex items-center py-2 justify-around w-full z-10 mx-auto  text-white font-dosis fixed" style={style}>
			<ScrollLink  to="header" smooth={true}>
				<h1 className="font-bold text-3xl md:cursor-pointer">Ayman
					<span className="h-5 w-5 bg-red-500 rounded-full inline-block ml-2"></span>
				</h1>
			</ScrollLink>
			<div >
			<ScrollLink to="project" smooth={true}>
				<span className="text-xl mr-4 md:cursor-pointer">Project</span>
			</ScrollLink>
			<ScrollLink to="stack" smooth={true}>
				<span className="text-xl mr-4 md:cursor-pointer">Stack</span>
			</ScrollLink>
			<ScrollLink to="contact" smooth={true}>
				<span className="text-xl mr-4 md:cursor-pointer">Contact</span>
			</ScrollLink>
			</div>
		</div>
	);
};
