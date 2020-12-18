import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typical from 'react-typical'

export default function Header() {
	const style = {
		backgroundColor: "rgb(9, 28, 41)",
		item:"center"
		
	}
	return (
		<div className="min-h-screen flex items-center justify-center" style={style} id="header">
			<div className="flex flex-col md:flex-row-reverse justify-around w-11/12">
					<LazyLoadImage
						src="https://o.remove.bg/downloads/0ed97938-1409-4108-a8f2-493830d73ad9/57114259-removebg-preview.png"
						effect="blur"
						className="md:scale-50"
						
						placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
					/>
		
				<div className="text-white text-center md:text-left">
					<h2 className="md:text-4xl text-3xl lg:text-6xl font-bold font-dosis md:text-left">Hi !<br/> I'm full stack JS developer</h2>
					<br />
					<h1>
						<Typical
							steps={['I\'m backend developer.', 2000, 'I\'m frontend developer.', 2000, 'I\'m fullstack developer in short.', 2000]}
							loop={Infinity}
							className="font-dosis font-bold text-2xl text-gray-400 md:text-4xl" />
					</h1>
					<button className="bg-indigo-500 px-10 py-3 rounded-lg text-xl uppercase mt-10 font-bold outline-none animate-float"> Discover more</button>
				</div>
			</div>
		</div>
	)
}
