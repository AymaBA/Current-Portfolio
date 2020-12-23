import React from 'react'
import Card from './Card'

function Project() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center font-dosis" id="project">
			<div className="flex flex-col">
				<h1 className="text-5xl font-bold text-center mt-20 md:mt-0 " id="title">My Project</h1>
				<div className="flex justify-around items-center flex-row flex-wrap p-5">
					<Card 
						title="Post-it" 
						description="Just a simple website that anyone can post things on." 
						githubUrl="https://github.com/AymaBA/post-it"
						imageUrl={process.env.PUBLIC_URL+"assets/post-it.png"}
					/>
					<Card 
						title="Cloudbudget Integration" 
						projectUrl="https://cloudbudget-ayman.netlify.app/"
						description="Integration of a figma web model with React and Snowpack of HTML and CSS." 
						githubUrl="https://github.com/AymaBA/Cloudbudget-Integration"
						imageUrl={process.env.PUBLIC_URL+"assets/cloudbudget.png"}
					/>
				</div>
			</div>
		</div>
	)
}

export default Project
