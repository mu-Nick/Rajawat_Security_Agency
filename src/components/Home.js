import React from "react";

const Home = () => {
	return (
		<div>
			<h1 class="title-font sm:text-6xl text-4xl font-medium text-gray-900 center">
				Home
			</h1>
			<section class="text-gray-700 body-font">
				<div class="container px-5 py-24 mx-auto flex flex-col">
					<div class="lg:w-full mx-auto">
						<div class="rounded-lg h-auto overflow-hidden">
							<img
								alt="content"
								class="object-cover object-center"
								src={require("../assets/images/home/certificate.jpeg")}
							/>
						</div>
						<div class="flex flex-col sm:flex-row mt-10">
							<div class="sm:w-full sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
								<img src={require("../assets/images/home/gallery6.jpeg")} />
							</div>
							<div class="sm:w-full sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
								<img src={require("../assets/images/home/gallery7.jpeg")} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
