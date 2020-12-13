function App() {
	return (
		<div className="App">
			<nav className="flex h-16 bg-blue-500 justify-around text-white shadow-2xl" >
				<h3 className="mt-4 text-shadow font-bold text-2xl"> Home </h3>
				<ul className="flex m-0 font- justify-around w-3/12 text-xl ">
					<li className="bg-transparent transition-all rounded-full m-4 px-5 hover:bg-blue-800 hover:py-5 cursor-pointer">About</li>
					<li className="bg-transparent transition-all rounded-xl h-13 py-4 p-4 hover:bg-blue-800 cursor-pointer" >Contact</li>
				</ul>
			</nav>
		</div>
	);
}

export default App;