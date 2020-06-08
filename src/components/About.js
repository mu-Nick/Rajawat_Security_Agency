import React from "react";

const About = () => {
	return (
		<div>
			<h1 class="center" style={{ fontSize: "3vw" }}>
				About Us
			</h1>
			<section class="text-gray-700 body-font">
				<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
					<img
						class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
						alt="hero"
						src={require("../assets/images/about.jpeg")}
					/>
					<div class="text-center lg:w-2/3 w-full">
						<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Mr. Dalveer Singh
						</h1>
						<p class="mb-8 leading-relaxed">
							Meggings kinfolk echo park stumptown DIY, kale chips
							beard jianbing tousled. Chambray dreamcatcher trust
							fund, kitsch vice godard disrupt ramps hexagon
							mustache umami snackwave tilde chillwave ugh.
							Pour-over meditation PBR&B pickled ennui celiac
							mlkshk freegan photo booth af fingerstache
							pitchfork.
						</p>
						<div class="flex justify-center"></div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
