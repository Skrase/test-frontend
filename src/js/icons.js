let icons = {
	arrow : `<svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#000" stroke-linecap="square"/></svg>`,
	search : `<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.11 0a8.11 8.11 0 104.99 14.51l3.2 3.2a1 1 0 001.4-1.42l-3.19-3.2A8.11 8.11 0 008.11 0zm4.4 12.35A6.11 6.11 0 103.7 3.88a6.11 6.11 0 008.82 8.47z"/></svg>`,
}

document.querySelectorAll('.js-icon').forEach((elem)=>{
	if(icons[elem.getAttribute('data-icon')]){
		elem.innerHTML = icons[elem.getAttribute('data-icon')];
		elem.classList.add("js-icon_loaded");
	}
});