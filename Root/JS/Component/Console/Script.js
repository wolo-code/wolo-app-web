var auth_processed = false;
var map_ready = false;
var target_index;

window.onload = function() {
	initApp();
	setupControls();
	setTargetIndex();
};

function setTargetIndex() {
	var param = window.location.hash.substr(1);
	if(param.length > 0 && !isNaN(param))
		target_index = parseInt(param)-1;
}

function initApp() {
	firebase.auth().getRedirectResult().then(function(result) {
		if (result.credential) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			//var token = result.credential.accessToken;
			queryPendingList();
		}
		else if (firebase.auth().currentUser) {
			queryPendingList();
			// User already signed in.
			// Update your UI, hide the sign in button.
		} else {
			showRestrictedBlock();
			// No user signed in, update your UI, show the sign in button.
			var provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithRedirect(provider);
		}
		var user = result.user;
	}).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
	});
}

function beginLoader() {
	idLoader = setTimeout(function(){endLoader('unauthenticated')}, 2500);
}

function endLoader(status) {
	clearTimeout(idLoader);
	idLoader = null;
	if(status == 'authenticated')
		showConsloeBlock();
	else if('unauthenticated')
		showRestrictedBlock();
}

function initMap() {
	if(auth_processed)
		initialize();
	else
		map_processed = true;
}

function showRestrictedBlock() {
	console_block.classList.add('hide');
	restrict_block.classList.remove('hide');
}

function showConsloeBlock() {
	restrict_block.classList.add('hide');	
	console_block.classList.remove('hide');
	if(map_processed)
		initialize();
	else
		auth_processed = true;
		
}

function nextRow() {
	if(data_index+1 < data.length) {
		data_index++;
		updateList();
	}
}

function deleteRow() {
}

function previousRow() {
	if(data_index == 0) {
		if(data.length > 0) {
			data_index = data.length-1;
			updateList();
		}
	}
	else {
		data_index--;
		updateList();
	}
}

function updateList() {
	if(data.length > 0) {
		view_data_index.innerText = data_index+1;
		var entry = data[data_index];
		data_gp_id.innerText = entry.gp_id;
		data_lat.innerText = entry.lat_lng.lat
		data_lng.innerText = entry.lat_lng.lng;
		setAddress(entry.address, entry.gp_id);
		data_time.innerText = formatDate(new Date(entry.time));
		location_request_list.classList.remove('invisible');
		map.panTo(entry.lat_lng);
		showEntryMarker(entry.lat_lng);
	}
	else {
		location_request_list.classList.add('invisible');
		clearAddress();
	}
	clearForm();
}

function setupControls() {
	
	view_data_index.addEventListener('click', function(e) {
		showDetails();
	});
	
	details_close.addEventListener('click', function(e) {
		hideDetails();
	});
	
	data_previous.addEventListener('click', function(e) {
		previousRow();
	});
	
	data_reject.addEventListener('click', function(e) {
		process_entry(data[data_index].id);
		deleteRow();
//		updateRow();
	});
	
	data_next.addEventListener('click', function(e) {
		nextRow();
	});
	
	data_process_checkbox.addEventListener('change', function() {
		if(this.checked) {
			var entry = data[data_index];
			map.panTo(entry.lat_lng);
			showEntryMarker(entry.lat_lng);			
		}
		else {
			
		}
	});
	
	submit_city_button.addEventListener('click', function() {
		if(city_submit_panel.checkValidity()) {
			submit_city(city_lat.value, city_lng.value, city_country.value.trim(), city_group.value.trim(), city_name.value.trim());
			if(data_process_checkbox.checked) {
				process_entry(data[data_index].id);
			}
		}
	});
	
}

function formatDate(date) {
	var monthNames = [
		"Jan", "Feb", "Mar",
		"Apr", "May", "Jun", "Jul",
		"Aug", "Sep", "Oct",
		"Nov", "Dec"
	];

	var day = date.getDate();
	var monthIndex = date.getMonth();
	var hour = date.getHours();
	var minute = date.getMinutes();
	return monthNames[monthIndex] + ' ' + formatNumber(day) + ' ' + formatNumber(hour) + ':' + formatNumber(minute);
}

function formatNumber(number) {
	WIDTH = 2;
	if (String(number).length < WIDTH)
		return ' '+number;
	else
		return number;
}

//google.maps.event.addDomListener(window, "load", initialize);

function fillForm(lat, lng, country) {
	city_lat.value = lat;
	city_lng.value = lng;	
	city_country.value = country;
}

function clearForm() {
	city_lat.value = '';
	city_lng.value = '';
	city_country.value = '';
	city_group.value = '';
	city_name.value = '';	
}
