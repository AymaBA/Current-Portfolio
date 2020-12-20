import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link as ScrollLink } from 'react-scroll';
import Typical from 'react-typical'

export default function Header() {
	const [animated, setAnimated] = useState(false);
	useEffect(() => {
		setAnimated(true);
	},[])
	return (
		<div className="min-h-screen flex items-center justify-center " style={{
			backgroundColor: "rgb(9, 28, 41)",
		}} id="header">
			<div className="flex flex-col items-center md:flex-row-reverse justify-around w-11/12">
				
				<LazyLoadImage
					className={`md:animate-spawn transform duration-2000 ease-in-out lg:h-screen select-none`}
					src={process.env.PUBLIC_URL + 'assets/57114259-removebg-preview.png'}
					effect="blur"
					placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
				/>
				
				<div className="text-white text-center md:text-left">
					<h2 className={`${animated ? "" : "translate-x-10 opacity-0"} transform transition duration-2000 ease-in-out md:text-4xl text-3xl lg:text-6xl font-bold font-dosis md:text-left`}>Hi !<br /> I'm full stack JS developer</h2>
					<br />
					<h1>
						<Typical
							steps={['I\'m backend developer.', 2000, 'I\'m frontend developer.', 2000, 'I\'m fullstack developer in short.', 2000]}
							loop={Infinity}
							className={`${animated ? "" : "translate-y-10 opacity-0"} transform duration-1000 ease-in-out font-dosis font-bold text-2xl text-gray-400 md:text-4xl`} />
					</h1>
					<ScrollLink to="stack" smooth={true}>
						<button className="bg-indigo-500 px-10 py-3 rounded-lg text-xl uppercase mt-10 font-bold outline-none animate-float" style={{ outline: 'none' }}>Discover more</button>
					</ScrollLink>
				</div>
			</div>
		</div>
	)
}
