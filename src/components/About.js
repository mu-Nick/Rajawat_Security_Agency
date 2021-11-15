import React from "react";

const About = () => {
	return (
		<div id="land-about">
			<h1 class="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900 center">
				About Us
			</h1>
			<section class="text-gray-700 body-font">
				<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
					<img
						class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
						alt="hero"
						src={require("../assets/images/about/about.jpeg")}
					/>
					<div class="text-center lg:w-2/3 w-full">
						<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Ex-Army Dalveer Singh
						</h1>
						<p class="mb-8 leading-relaxed">
							Rajawat Security Agency is committed to
							providing its customers with the most flexible
							solutions to meet their security needs involving a
							combination of products and services. Among the many
							benefits for our clients it is the peace of mind
							that comes from knowing that our employment
							practices have been assessed the best in respect of
							quality. All of which means, We'll continue to
							ensure that our security professionals meet the
							higher standards, measured against a set of
							independently assessed criteria. We provide services
							to:
						</p>
						<ul className="browser-default">
							<li>Corporate & Business Houses</li>
							<li>Legal Agencies</li>
							<li>Banks</li>
							<li>Insurance Company</li>
							<li>Multinational</li>
							<li>Co-operative firms</li>
							<li>Shopping malls</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
