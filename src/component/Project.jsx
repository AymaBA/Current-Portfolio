import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Project() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center font-dosis" id="project">
			<div className="flex flex-col">
				<h1 className="text-5xl font-bold text-center mt-20 md:mt-0 md:mb-20" id="title">My Project</h1>
				<div className="flex justify-around items-center flex-row flex-wrap p-5">
					<div className="flex md:flex-wrap md:w-1/5 flex-col bg-black p-5 rounded-lg shadow-2xl text-white m-5" style={{background:'rgb(9, 28, 41)'}}>
						<LazyLoadImage
						className="rounded-lg"
						src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
						/>
						<div className="flex justify-between">
							<h1 className="text-3xl font-bold">Post-it</h1>
							<a href="https://github.com/AymaBA/post-it" className="mt-2" target="blank">Github</a>
						</div>
						<p>Just a simple website that anyone can post things on.</p>
					</div>
					<div className="flex md:flex-wrap md:w-1/5 flex-col bg-black p-5 rounded-lg shadow-2xl text-white m-5" style={{background:'rgb(9, 28, 41)'}}>
						<LazyLoadImage
						className="rounded-lg"
						src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
						/>
						<div className="flex justify-between">
							<h1 className="text-3xl font-bold">Post-it</h1>
							<a href="https://github.com/AymaBA/post-it" className="mt-2" target="blank">Github</a>
						</div>
						<p>Just a simple website that anyone can post things on.</p>
					</div>
					<div className="flex md:flex-wrap md:w-1/5 flex-col bg-black p-5 rounded-lg shadow-2xl text-white m-5" style={{background:'rgb(9, 28, 41)'}}>
						<LazyLoadImage
						className="rounded-lg"
						src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
						/>
						<div className="flex justify-between">
							<h1 className="text-3xl font-bold">Post-it</h1>
							<a href="https://github.com/AymaBA/post-it" className="mt-2" target="blank">Github</a>
						</div>
						<p>Just a simple website that anyone can post things on.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project
