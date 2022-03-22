import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";

function App() {
	const [categories, setCategories] = useState([
		{
			id: 1,
			title: "books",
		},
		{
			id: 2,
			title: "nutrition",
		},
		{
			id: 3,
			title: "documentaries",
		},
		{
			id: 4,
			title: "legends",
		},
		{
			id: 5,
			title: "hype_videos",
		},
		{
			id: 6,
			title: "matches",
		},
		{
			id: 7,
			title: "offseason_resources",
		},
		{
			id: 8,
			title: "technical_dvds",
		},
		{
			id: 9,
			title: "open_videos",
		},
	]);

	const [progress, setProgress] = useState(0);

	const changeProgress = (value) => {
		setProgress(value);
	};

	return (
		<div>
			<Router>
				<LoadingBar color="#f11946" progress={progress} height={3} />
				<Navbar />

				<Routes>
					<Route
						path="/"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[0].id}
								id={categories[0].id}
								title={categories[0].title}
							/>
						}
					/>

					<Route
						path="/books"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[0].id}
								id={categories[0].id}
								title={categories[0].title}
							/>
						}
					/>

					<Route
						path="/nutrition"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[1].id}
								id={categories[1].id}
								title={categories[1].title}
							/>
						}
					/>

					<Route
						path="/documentaries"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[2].id}
								id={categories[2].id}
								title={categories[2].title}
							/>
						}
					/>

					<Route
						path="/legends"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[3].id}
								id={categories[3].id}
								title={categories[3].title}
							/>
						}
					/>

					<Route
						path="/hypevideos"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[4].id}
								id={categories[4].id}
								title={categories[4].title}
							/>
						}
					/>

					<Route
						path="/matches"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[5].id}
								id={categories[5].id}
								title={categories[5].title}
							/>
						}
					/>

					<Route
						path="/offseasonresources"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[6].id}
								id={categories[6].id}
								title={categories[6].title}
							/>
						}
					/>

					<Route
						path="/technicaldvds"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[7].id}
								id={categories[7].id}
								title={categories[7].title}
							/>
						}
					/>

					<Route
						path="/openvideos"
						element={
							<News
								changeProgress={changeProgress}
								key={categories[8].id}
								id={categories[8].id}
								title={categories[8].title}
							/>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
