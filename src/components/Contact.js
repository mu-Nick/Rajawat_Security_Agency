import React, { useState } from "react";
import M from "materialize-css";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendMessage = () => {
		if (!name || !email || !message) {
			M.toast({ html: "Please fill all the fields" });
			return;
		}
		if (
			!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			)
		) {
			M.toast({ html: "Invalid Email" });
			return;
		}
		M.toast({ html: "Feedback registered." });
	};

	return (
		<div>
			<h1 class="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900 center">
				Contact Us
			</h1>
			<section class="text-gray-700 body-font relative">
				<div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
					<div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
						<iframe
							width="100%"
							height="100%"
							class="absolute inset-0"
							frameborder="0"
							title="map"
							marginheight="0"
							marginwidth="0"
							scrolling="no"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.006954662833!2d75.75102615095906!3d26.80790718309024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dca8f20157067%3A0xaadd6cc94a0a29b7!2sJagdamba%20Apartment!5e0!3m2!1sen!2sin!4v1591524543830!5m2!1sen!2sin"
						></iframe>
						<div class="bg-white relative flex flex-wrap py-6">
							<div class="lg:w-1/2 px-6">
								<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">
									ADDRESS
								</h2>
								<p class="leading-relaxed">
									Ricco Puliya Ke Neche, Ricco Kanta, Kalyanpura Road, Mansarovar, Jaipur - 302020
								</p>
							</div>
							<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
								<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">
									EMAIL
								</h2>
								<a class="text-indigo-500 leading-relaxed">
									dsrajawat0788@gmail.com
								</a>
								<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
									PHONE
								</h2>
								<p class="leading-relaxed">+91-7976964252</p>
								<p class="leading-relaxed">+91-9649224791</p>
							</div>
						</div>
					</div>
					<div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
						<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
							Feedback
						</h2>
						<p class="leading-relaxed mb-5 text-gray-600">
							Write below to provide feedback or get a call from
							us
						</p>
						<input
							class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
							placeholder="Name"
							type="text"
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
							placeholder="Email"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<textarea
							class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
							placeholder="Message"
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<button
							class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
							onClick={() => sendMessage()}
						>
							Button
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
