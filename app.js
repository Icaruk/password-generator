

const ele_abc1 = document.getElementById("abc1");
const ele_abc2 = document.getElementById("abc2");
const ele_num = document.getElementById("num");
const ele_esp = document.getElementById("esp");
const ele_cus = document.getElementById("cus");
const ele_inputCus = document.getElementById("input_cus");

const ele_slider = document.getElementById("nChars");
const ele_sliderTxt = document.getElementById("nCharsTxt");
const ele_pass = document.getElementById("pass");



// Funciones
function onSliderChange () {
	ele_sliderTxt.value = ele_slider.value;
};



function copy() {
	
	const pass = document.getElementById('pass');
	pass.focus();
	pass.select();
	
	document.execCommand("copy");
	
};



function gen() {
	
	let pool = "";
	
	
	// Opciones
	let abc1 = ele_abc1.checked;
	let abc2 = ele_abc2.checked;
	let num = ele_num.checked;
	let esp = ele_esp.checked;
	let cus = ele_cus.checked;
	let chars = Math.min (ele_sliderTxt.value, 64);
	
	
	// Ejecuto opciones
	if (abc1) {
		pool += "abcdefghijklmnopqrstuvwxyz";
	};
	
	if (abc2) {
		pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	};
	
	if (num) {
		pool += "0123456789";
	};
	
	if (esp) {
		pool += 'º\|@#€¬ª!"·$%&/()=?¿';
	};
	
	if (cus) {
		pool += (ele_inputCus.value);
	};
	
	
	
	if (pool == "") {
		ele_pass.value = "Select at least one option!";
		return 0;
	};
	
	
	
	// Empiezo a generar
	let strPass = "";
	
	
	for (let i = 1; i <= chars; i++) {
		
		let idx = Math.floor (Math.random() * pool.length);
		strPass += pool.charAt(idx);
		
	};
	
	
	
	// Escribo
	ele_pass.value = strPass;
	
	
};



// EHs
ele_slider.oninput = function() {
	ele_sliderTxt.value = ele_slider.value;
	gen();
};

ele_abc1.onclick = function() {gen()};
ele_abc2.onclick = function() {gen()};
ele_num.onclick = function() {gen()};
ele_esp.onclick = function() {gen()};



// Init
onSliderChange();
