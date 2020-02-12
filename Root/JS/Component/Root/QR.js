function showQR() {
	if(current_title)
		document.getElementById('qr_title_main').value = current_title;
	else
		document.getElementById('qr_title_main').value = '';
	if(current_segment)
		document.getElementById('qr_title_segment').value = current_segment;
	else
		document.getElementById('qr_title_segment').value = '';
	if(current_address) {
		document.getElementById('qr_address').innerText = current_address;
		document.getElementById('qr_address').classList.remove('initial');
		qr_address_active_first = false;
	}
	else {
		document.getElementById('qr_address').innerHTML = "&nbsp;&nbsp;Address (optional)";
		document.getElementById('qr_address').classList.add('initial');
		qr_address_active_first = true;
	}
	var city_accent = getProperCityAccent(code_city);
	var code_string = code_wcode.join(' ');
	document.getElementById('qr_wcode_city').innerHTML = city_accent;
	document.getElementById('qr_wcode_code').innerHTML = code_string;
	var qrcode = new QRCode({
		content: "https://"+location.hostname + '/' + getCodeFull().join('.').toLowerCase().replace(' ', '_'),
		container: "svg",
		join: true,
		xmlDeclaration: false,
		width: 380,
		height: 380
	});
	var svg = qrcode.svg();
	document.getElementById('qr_code').innerHTML = svg;
	document.getElementById('qr').classList.remove('hide');
	
	window.addEventListener('beforeprint', beforeQRprint);
	window.addEventListener('afterprint', afterQRprint);
}

function closeQR() {
	document.getElementById('qr').classList.add('hide');
	previewQR_deactivate()
	window.removeEventListener('afterprint', afterQRprint);
	window.removeEventListener('beforeprint', beforeQRprint);
	current_title = document.getElementById('qr_title_main').value;
	current_segment = document.getElementById('qr_title_segment').value;
	if(!qr_address_active_first)
		current_address = document.getElementById('qr_address').innerText;
}

function previewQR_activate() {
	mode_preview = true;
	hideEmptyElsePreview(document.getElementById('qr_title_main'));
	hideEmptyElsePreview(document.getElementById('qr_title_segment'));
	if(qr_address_active_first || document.getElementById('qr_address').innerHTML.trim().length == 0)
		document.getElementById('qr_address').classList.add('hide');
	else {
		document.getElementById('qr_address').classList.add('preview');
		document.getElementById('qr_address').setAttribute('contenteditable', false);
	}
	document.getElementById('qr_preview').classList.add('button_active');
}

function previewQR_deactivate() {
	mode_preview = false;
	unHideEmptyAndRemovePreview(document.getElementById('qr_title_main'));
	unHideEmptyAndRemovePreview(document.getElementById('qr_title_segment'));
	document.getElementById('qr_address').setAttribute('contenteditable', true);
	document.getElementById('qr_address').classList.remove('preview');
	document.getElementById('qr_address').classList.remove('hide');
	document.getElementById('qr_preview').classList.remove('button_active');
}

function qr_address_active() {
	if (qr_address_active_first) {
		qr_address_active_first = false;
		document.getElementById('qr_address').classList.remove('initial');
		document.getElementById('qr_address').innerHTML = address;
	}
}

function hideEmptyElsePreview(node) {
	if(node.value.trim() == '')
		node.classList.add('hide')
	else
		node.classList.add('preview')
}

function unHideEmptyAndRemovePreview(node) {
	node.classList.remove('hide');
	node.classList.remove('preview');
}

function toggleQRpreview() {
	if(mode_preview)
		previewQR_deactivate();
	else
		previewQR_activate();
}

function beforeQRprint() {
	document.body.classList.add('print');
	if(!mode_preview) {
		toggleQRpreview();
		mode_preview_activated = true;
	}
	document.getElementById('qr').classList.remove('overlay');
	document.getElementById('qr').classList.add('section-to-print');
	document.getElementById('qr_close').classList.add('hide');
}

function afterQRprint() {
	document.body.classList.remove('print');
	document.getElementById('qr').classList.add('overlay');
	document.getElementById('qr').classList.remove('section-to-print');
	document.getElementById('qr_close').classList.remove('hide');
	if(mode_preview_activated)
		toggleQRpreview();
}

function printQR() {
	if(UMB.getCurrentBrowser() == 'safari')	
		beforeQRprint();
	window.print();
	if(UMB.getCurrentBrowser() == 'safari')
		afterQRprint();
}

function downloadQR() {
	if(!mode_preview) {
		toggleQRpreview();
		mode_preview_activated = true;
	}
	document.getElementById('qr_body').setAttribute( 'style',
	 "height: "+(document.getElementById('qr_body').offsetHeight-6)+"px"+"; "+
	 "width: "+document.getElementById('qr_body').offsetWidth+"px" );
	document.getElementById('qr_close').classList.add('hide');
	html2canvas(document.querySelector('#qr_body')).then(canvas => {
		if(mode_preview_activated)
			toggleQRpreview();
		document.getElementById('qr_body').removeAttribute('style');
		document.getElementById('qr_close').classList.remove('hide');			
		var qrImage = canvas.toDataURL("image/png");
		downloadURI('data:' + qrImage, "Wolo codes - " + getCodeFull_text() + ".png");
	});
}

function downloadURI(uri, name) {
	var link = document.createElement('a');
	link.download = name;
	link.href = uri;
	link.click();
}
