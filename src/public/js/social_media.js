const media_btn = document.querySelectorAll(".media-btn");
const tbody = document.querySelector("#tbody");

const transition_time = 0.2;

// change media_btn style
media_btn.forEach((btn) => {
	btn.style.transition = `all ${transition_time}s ease-in-out`;
});

media_btn.forEach((btn) => {
	btn.addEventListener("click", () => {
		// remove_checked(btn);
		// btn.classList.toggle("btn-checked");
		let tut = btn.getAttribute("tut");
		console.log(tut);
		add_animation(btn);

		// check if tbody have the same tut
		let tbody_tut = tbody.getAttribute("tut");
		if (tbody_tut !== tut) {
			console.log("tbody_tut !== tut");
			get_page_async(tut);
		}
	});
});

const remove_checked = (clicked_btn) => {
	media_btn.forEach((btn) => {
		if (btn !== clicked_btn) {
			btn.classList.remove("btn-checked");
		}
	});
};

const add_animation = (clicked_btn) => {
	// add class .animated-click to clicked button and 1 seg later remove it
	clicked_btn.classList.remove("neuromorphic");
	clicked_btn.classList.add("anime1");
	setTimeout(() => {
		clicked_btn.classList.add("anime2");
	}, transition_time * 1000);
	
	setTimeout(() => {
		clicked_btn.classList.remove("anime1");
		clicked_btn.classList.remove("anime2");
		clicked_btn.classList.add("neuromorphic");
	}, transition_time * 1000);
};

const replace_animation = (body) => {
	body.classList.remove("replace-in");
	body.classList.add("replace-out");
	setTimeout(() => {
		body.classList.remove("replace-out");
		body.classList.add("replace-in");
	}, 500);
};

async function get_page_async(page) {
	// fetch GET page with the given page name as source/page.html
	try {
		replace_animation(tbody);
		const response = await fetch(`source/${page}.html`);
		const data = await response.text();
		// console.log(data);
		// console.log(tbody);
		setTimeout(() => {
			tbody.innerHTML = data;
			tbody.setAttribute("tut", page);
			call_prism();
		}, 500);
	} catch (err) {
		console.log("error get_page_async");
		console.log(err);
	}
}

function call_prism () {
	const script = document.createElement('script');
	script.src = 'js/prism.js';

	let script_container = document.querySelector('#script-container');
	script_container.appendChild(script);

	console.log('script_container: ', script_container);
};