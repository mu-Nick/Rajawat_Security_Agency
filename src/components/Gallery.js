import React from "react";

const Gallery = () => {
	return (
		<div>
			<h1 class="center" style={{ fontSize: "3vw" }}>
				Photo Gallery
			</h1>
			<section class="text-gray-700 body-font">
				<div class="container px-5 py-24 mx-auto flex flex-wrap">
					<div class="flex flex-wrap md:-m-2 -m-1">
						<div class="flex flex-wrap w-1/2">
							<div class="md:p-2 p-1 w-1/2">
								<img
									alt="gallery"
									class="w-full object-cover h-full object-center block"
									src={require("../assets/images/gallery1.jpeg")}
								/>
							</div>
							<div class="md:p-2 p-1 w-1/2">
								<img
									alt="gallery"
									class="w-full object-cover h-full object-center block"
									src={require("../assets/images/gallery2.jpeg")}
								/>
							</div>
							<div class="md:p-2 p-1 w-full">
								<img
									alt="gallery"
									class="w-full h-full object-cover object-center block"
									src={require("../assets/images/gallery3.jpeg")}
								/>
							</div>
						</div>
						<div class="flex flex-wrap w-1/2">
							<div class="md:p-2 p-1 w-full">
								<img
									alt="gallery"
									class="w-full h-full object-cover object-center block responsive-img"
									src={require("../assets/images/gallery5.jpeg")}
									style={{ maxHeight: "400px" }}
								/>
							</div>
							<div class="md:p-2 p-1 w-full">
								<img
									alt="gallery"
									class="w-full h-full object-cover object-center block responsive-img"
									src={require("../assets/images/gallery6.jpeg")}
									style={{ maxHeight: "400px" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
