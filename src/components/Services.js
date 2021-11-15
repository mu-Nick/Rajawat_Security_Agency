import React from "react";

const Services = () => {
	return (
		<div>
			<h1 class="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900 center">
				Our Services
			</h1>
			<section class="text-gray-700 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-wrap -m-4">
						<div class="lg:w-1/4 md:w-1/2 p-4 ">
							<a class="block relative h-48 rounded overflow-hidden">
								<img
									alt="Civil Guards Photo"
									class="object-cover object-center h-full block"
									src={require("../assets/images/services/civil guards.jpeg")}
								/>
							</a>
							<div class="mt-4">
								<h2 class="text-gray-900 title-font text-lg font-medium">
									Civil Guards
								</h2>
							</div>
						</div>
						<div class="lg:w-1/4 md:w-1/2 p-4 ">
							<a class="block relative h-48 rounded overflow-hidden">
								<img
									alt="Armed Gunmen Photo"
									class="object-cover object-center h-full block"
									src={require("../assets/images/services/armed gunmen.jpeg")}
								/>
							</a>
							<div class="mt-4">
								<h2 class="text-gray-900 title-font text-lg font-medium">
									Armed Gunmen
								</h2>
							</div>
						</div>
						<div class="lg:w-1/4 md:w-1/2 p-4 ">
							<a class="block relative h-48 rounded overflow-hidden">
								<img
									alt="Detective Photo"
									class="object-cover object-center h-full block"
									src={require("../assets/images/services/detective.jpeg")}
								/>
							</a>
							<div class="mt-4">
								<h2 class="text-gray-900 title-font text-lg font-medium">
									Detective
								</h2>
							</div>
						</div>
						<div class="lg:w-1/4 md:w-1/2 p-4 ">
							<a class="block relative h-48 rounded overflow-hidden">
								<img
									alt="Marketing Manpower Photo"
									class="object-cover object-center  h-full block"
									src={require("../assets/images/services/marketing manpower.jpeg")}
								/>
							</a>
							<div class="mt-4">
								<h2 class="text-gray-900 title-font text-lg font-medium">
									Marketing Manpower
								</h2>
							</div>
						</div>
						<div class="lg:w-1/4 md:w-1/2 p-4 ">
							<a class="block relative h-48 rounded overflow-hidden">
								<img
									alt="Bouncers Photo"
									class="object-cover object-center  h-full block"
									src={require("../assets/images/services/bouncers.jpeg")}
								/>
							</a>
							<div class="mt-4">
								<h2 class="text-gray-900 title-font text-lg font-medium">
									Bouncers
								</h2>
							</div>
						</div>
						<div class="lg:w-1/4 md:w-1/2 p-4 ">
							<a class="block relative h-48 rounded overflow-hidden">
								<img
									alt="Office Peon Photo"
									class="object-cover object-center  h-full block"
									src={require("../assets/images/services/office peon.jpeg")}
								/>
							</a>
							<div class="mt-4">
								<h2 class="text-gray-900 title-font text-lg font-medium">
									Office Peon
								</h2>
							</div>
						</div>
						<div class="lg:w-1/4 md:w-1/2 p-4 ">
							<a class="block relative h-48 rounded overflow-hidden">
								<img
									alt="Dog Securities Photo"
									class="object-cover object-center  h-full block"
									src={require("../assets/images/services/dog security.jpeg")}
								/>
							</a>
							<div class="mt-4">
								<h2 class="text-gray-900 title-font text-lg font-medium">
									Dog Securities
								</h2>
							</div>
						</div>
						<div class="lg:w-1/4 md:w-1/2 p-4 ">
							<a class="block relative h-48 rounded overflow-hidden">
								<img
									alt="PSO Photo"
									class="object-cover object-center  h-full block"
									src={require("../assets/images/services/pso.jpeg")}
								/>
							</a>
							<div class="mt-4">
								<h2 class="text-gray-900 title-font text-lg font-medium">
									PSO
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
