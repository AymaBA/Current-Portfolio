import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Stack() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center font-dosis" id="stack">
			<h1 className="font-bold text-5xl ">Stack I use</h1>
			<div className="flex flex-wrap justify-center ">
				<span className="w-40 animate-float select-none bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
					<LazyLoadImage
						src={process.env.PUBLIC_URL + 'assets/mongo.png'}
					/>
				</span>
				<span className="w-40 animate-refloat select-none bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
					<LazyLoadImage
						src={process.env.PUBLIC_URL + 'assets/express.png'}
					/>
				</span>
				<span className="w-40 animate-float select-none delay-700 bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
					<LazyLoadImage
						src={process.env.PUBLIC_URL + 'logo512.png'}
					/>
				</span>
				<span className="w-40 animate-refloat select-none bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
					<LazyLoadImage
						src={process.env.PUBLIC_URL + 'assets/node.png'}
					/>
				</span>
			</div>
			<p className="w-11/12 md:text-2xl md:max-w-xl text-center md:mb-0 mt-10 mb-5">
			The main technologies I use for the backend part of an application are: MongoDB for the databases, Express for the management of a rest API and NodeJS, for the frontend part, I use React and for the deployment i can use nginx or netlify depending on the project. One of the benefits of these backend technologies is having the same rest API for all customers. So the possibility of also creating a mobile or computer application later.
			</p>
		</div>
	)
}

export default Stack
