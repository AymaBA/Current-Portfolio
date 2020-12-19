import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Contact() {
	return (
		<div className="h-80 flex flex-col items-center justify-center font-dosis" style={{background:'rgb(9, 28, 41)'}} id="contact">
			<div className="text-white p-4">
				<h1 className="text-4xl font-bold mb-3">About me :</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur quis quod? Quia ipsum, molestiae impedit rerum error maxime aliquid id deserunt dicta quidem. Dolor, obcaecati nulla? Molestias, dolorem tempore.</p>
			</div>
			<div className="flex">
				<a href="https://github.com/AymaBA" target="blank" className="w-12 mx-3">
				<LazyLoadImage
					src={process.env.PUBLIC_URL+'/assets/github.png'}
				/>
				</a>
				<a href="mailto:aymanbadev@gmail.com" target="blank" className="w-12">
				<LazyLoadImage
					src={process.env.PUBLIC_URL+'/assets/gmail.png'}
				/>
				</a>
			</div>
		</div>
	)
}
