import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Stack() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center font-dosis" id="stack">
			<h1 className="font-bold text-5xl ">Stack I use</h1>
			<div className="flex flex-wrap justify-center mt-10">
				<span className="w-40 animate-float bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
					<LazyLoadImage
						src={process.env.PUBLIC_URL + 'assets/mongo.png'}
					/>
				</span>
				<span className="w-40 animate-refloat bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
					<LazyLoadImage
						src={process.env.PUBLIC_URL + 'assets/express.png'}
					/>
				</span>
				<span className="w-40 animate-float delay-700 bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
					<LazyLoadImage
						src={process.env.PUBLIC_URL + 'assets/react.svg'}
					/>
				</span>
				<span className="w-40 animate-refloat bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
					<LazyLoadImage
						src={process.env.PUBLIC_URL + 'assets/node.png'}
					/>
				</span>
			</div>
			<p className="w-11/12 text-xl md:max-w-xl text-center mt-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur quis quod? Quia ipsum, molestiae impedit rerum error maxime aliquid id deserunt dicta quidem. Dolor, obcaecati nulla? Molestias, dolorem tempore.
			</p>
		</div>
	)
}

export default Stack
