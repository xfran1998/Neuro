let media_btn = document.querySelectorAll(".media-btn");
let tbody = document.querySelector("#tbody");

let transition_time = 0.2;

// change media_btn style
media_btn.forEach((btn) => {
	btn.style.transition = `all ${transition_time}s ease-in-out`;
});

media_btn.forEach((btn) => {
	btn.addEventListener("click", () => {
		// remove_checked(btn);
		// btn.classList.toggle("btn-checked");
		let tut = btn.getAttribute("tut");
		add_animation(btn);

		// check if tbody have the same tut
		let tbody_tut = tbody.getAttribute("tut");
		if (tbody_tut !== tut) {
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
		let response = await fetch(`source/${page}.html`);
		let data = await response.text();
		// console.log(data);
		// console.log(tbody);
		setTimeout(() => {
			tbody.innerHTML = data;
			tbody.setAttribute("tut", page);
			console.log("tbody changed");
			call_scripts(tbody);
		}, 500);
	} catch (err) {
		console.log("error get_page_async");
		console.log(err);
	}
}

function call_scripts(tbody) {
	console.log(tbody);
	tbody.querySelectorAll("script").forEach((script) => {
		let script_src = script.getAttribute("src");
		// check if script_src is already loaded
		if (script_src) {
			let node_script = document.createElement("script");
			node_script.src = script_src;
			// script.parentNode.removeChild(script);

			tbody.appendChild(node_script);
			console.log("script added");
		}
	});
}
