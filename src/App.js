import React from 'react';
import Contact from './component/Contact';
import Header from './component/Header';
import  Nav  from './component/Nav';
import Project from './component/Project';
import Stack from './component/Stack';
function App() {
	return (
		<>
			<Nav />
			<Header />
			<Project />
			<Stack />
			<Contact />
		</>
	);
}

export default App;