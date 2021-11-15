import React from "react";

const Gallery = () => {

	function importAll(r) {
		let images = [];
		images = r.keys().map(r)
		return images
	}
	
	const images = importAll(require.context('../assets/images/gallery/', false, /\.(png|jpe?g|svg)$/))
	console.log("debug", images)

	return (
		<div>
			<h1 class="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900 center">
				Photo Gallery
			</h1>
			<section class="text-gray-700 body-font">
				<div class="container px-5 py-24 mx-auto flex flex-wrap">
					<div class="flex flex-wrap md:-m-2 -m-1">
						<div class="flex flex-wrap">
							{
								images.map(
									(image, index) =>   <div class="md:p-2 p-1 w-1/3">
															<img
																alt={"Photo " + index}
																class="w-full object-cover object-center block"
																src={image}
															/>
														</div>
								)
							}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
