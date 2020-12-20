import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Card({ title, description, githubUrl, imageUrl, projectUrl }) {
    return (
        <div className="flex md:flex-wrap md:w-3/12 flex-col bg-black p-5 rounded-lg shadow-2xl text-white m-5" style={{ background: 'rgb(9, 28, 41)' }}>
            <a href={projectUrl} className="flex" target="blank">
                <LazyLoadImage
                    className={`rounded-lg ${projectUrl ? "hover:scale-95 cursor-pointer" : ""} select-none transform duration-200`}
                    src={imageUrl}
                />
            </a>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">{title}</h1>
                <a href={githubUrl} className="mt-2" target="blank">Github</a>
            </div>
            <p>{description}</p>
        </div>
    )
}
