﻿
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var b=a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,c||0)}},"es6-impl","es3");
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"startsWith");a+="";for(var e=b.length,f=a.length,l=Math.max(0,Math.min(c|0,b.length)),k=0;k<f&&l<e;)if(b[l++]!=a[k++])return!1;return k>=f}},"es6-impl","es3");var ClickEventHandler=function(a){this.map=a;this.placesService=new google.maps.places.PlacesService(a);this.map.addListener("click",this.handleClick.bind(this))};
ClickEventHandler.prototype.handleClick=function(a){a.placeId?(a.stop(),this.getPlaceInformation(a.placeId)):getAddress(resolveLatLng(a.latLng))};ClickEventHandler.prototype.getPlaceInformation=function(a){this.placesService.getDetails({placeId:a},function(a,c){"OK"===c&&(poiPlace=a,address=a.formatted_address,refreshAddress())})};
var config={apiKey:"AIzaSyCYD7Q0f4ZR0cH0EOi29wVV2Edgb_j5i_s",authDomain:"location.wcodes.org",databaseURL:"https://waddress-5f30b.firebaseio.com",projectId:"waddress-5f30b",storageBucket:"waddress-5f30b.appspot.com",messagingSenderId:"744968913043"};firebase.initializeApp(config);var database=firebase.database();function showIncompatibleBrowserMessage(){document.getElementById("incompatible_browser_message").classList.remove("hide")}
function hideIncompatibleBrowserMessage(){document.getElementById("incompatible_browser_message").classList.add("hide");showNotification("This browser is not unsupported")}function showNotification(a){notification_bottom.innerText=a;notification_bottom.classList.remove("hide");"undefined"!=typeof notification_timer&&null!=notification_timer&&clearTimeout(notification_timer);notification_timer=setTimeout(function(){notification_bottom.innerText="";notification_bottom.classList.add("hide")},2500)}
var _umb={require:{chrome:60,firefox:37,ie:10,opera:7,safari:29}},initLoadDone=!1;initLoad();var latLng_p="",address="",gpId="";function getAddress(a){(new google.maps.Geocoder).geocode({location:a},function(b,c){latLng_p=a;"OK"===c?b[0]?(address=b[0].formatted_address,gpId=b[0].place_id,refreshAddress()):console.log("No geoCoding results found"):console.log("Geocoder failed due to: "+c);pendingCitySubmit&&(execSubmitCity(),pendingCitySubmit=!1)})}
function toggleAddress(){"hide"==address_text.classList.value?showAddress():hideAddress()}function showAddress(){address_text_content.innerText=address;address_text.classList.remove("hide")}function hideAddress(){address_text_content.innerText="";address_text.classList.add("hide")}function clearAddress(){gpId=address="";address_text_content.innerText=""}function refreshAddress(){address_text.classList.contains("hide")||(address_text_content.innerText=address)}
function copyAddress(){copyNodeText(address_text_content)}var CURRENT_VERSION=1,initWCode=!1;function setLocationAccess(a){"undefined"!==typeof Storage&&(localStorage.location_access=1==a)}function locationAccessCheck(){return"undefined"!==typeof Storage&&"undefined"!==typeof localStorage.location_access&&""!=localStorage.location_access&&!0===JSON.parse(localStorage.location_access)?!0:!1}function setLocationAccessDND(a){"undefined"!==typeof Storage&&(localStorage.location_access_dnd=1==a)}
function locationAccessDNDcheck(){return locationAccessDNDstatus()&&!0===JSON.parse(localStorage.location_access_dnd)?!0:!1}function locationAccessDNDstatus(){if("undefined"!==typeof Storage&&"undefined"!==typeof localStorage.location_access_dnd&&""!=localStorage.location_access_dnd)return!0;setLocationAccessDND(!1);return!1}
function versionCheck(){var a=!1;"undefined"!==typeof Storage&&("undefined"===typeof localStorage.note_version?a=!0:""!=localStorage.note_version&&JSON.parse(localStorage.note_version)<CURRENT_VERSION&&(a=!0));a?(localStorage.note_version=CURRENT_VERSION,initWCode=!0,showOverlay()):(info_intro.classList.add("hide"),info_full.classList.remove("hide"))}
function urlDecode(){return""!=window.location.pathname.substr(1)?(pendingWords=window.location.pathname.substr(1).toLowerCase().split("."),initWCode=!0):!1}var DEFAULT_WCODE=["bangalore","diesel","hall","planet"],pendingCity=!1;function noCity(a){showAddress();showNoCityMessage();infoWindow.setContent("Location not in database")}function submitCity(){""==address?pendingCitySubmit=!0:(execSubmitCity(),pendingCity=!0)}
function execSubmitCity(){var a=firebase.database().ref().child("CityRequest").push().key,b={};b["/CityRequest/"+a]={time:firebase.database.ServerValue.TIMESTAMP,lat_lng:latLng_p,gp_id:gpId,address:address,processed:!1};firebase.database().ref().update(b);showNotification("Request submitted")}function tryDefaultCity(){decode(DEFAULT_WCODE);notification_top.classList.add("hide");infoWindow.close()}var urlFunctions="https://location.wcodes.org/api",curEncRequestId=0;
function encode_(a,b){var c=new XMLHttpRequest;c.open("POST",urlFunctions+"/encode",!0);c.setRequestHeader("Content-type","application/json");c.setRequestHeader("version","1");c.requestId=++curEncRequestId;wait_loader.classList.remove("hide");c.onreadystatechange=function(){4==c.readyState&&c.requestId==curEncRequestId&&(200==c.status?(setCodeWords(c.responseText,a,b),wait_loader.classList.add("hide")):204==c.status&&(noCity(b),notification_top.classList.remove("hide"),wait_loader.classList.add("hide")))};
c.send(stringifyEncodeData(a.center,b));return""}function setCodeWords(a,b,c){var d=[];d.push(b.name);a=JSON.parse(a).code;a=$jscomp.makeIterator(a);for(b=a.next();!b.done;b=a.next())d.push(wordList.getWord(b.value));setWcode(d,c)}function stringifyEncodeData(a,b){var c={};c.city_center=a;c.position=b;return JSON.stringify(c)}
function decode_(a,b){var c=new XMLHttpRequest;c.open("POST",urlFunctions+"/decode",!0);c.setRequestHeader("Content-type","application/json");c.setRequestHeader("version","1");wait_loader.classList.remove("hide");c.onreadystatechange=function(){4==c.readyState&&200==c.status&&(setCodeCoord(c.responseText,Array(a.name).concat(b)),notification_top.classList.add("hide"),wait_loader.classList.add("hide"))};var d=[];d[0]=wordList.indexOf(b[0]);d[1]=wordList.indexOf(b[1]);d[2]=wordList.indexOf(b[2]);c.send(stringifyDecodeData(a.center,
d))}function stringifyDecodeData(a,b){var c={};c.city_center=a;c.code=b;return JSON.stringify(c)}function setCodeCoord(a,b){var c=JSON.parse(a);focus__(c,b)}var WCODE_CODE_COPIED_MESSAGE="WCode copied to clipboard",WCODE_LINK_COPIED_MESSAGE="WCode link copied to clipboard";function showCopyWcodeMessage(){copy_wcode_message_city_name.innerText=getWcodeCity();copy_wcode_message.classList.remove("hide")}
function hideCopyWcodeMessage(){copy_wcode_message.classList.add("hide");copy_wcode_message_city_name.innerText=""}function copyWcodeFull(){showAndCopy(getWcodeFull_formatted().join(" "));showNotification(WCODE_CODE_COPIED_MESSAGE);hideCopyWcodeMessage()}function copyWcodeCode(){showAndCopy(getWcodeCode_formatted().join(" "));showNotification(WCODE_CODE_COPIED_MESSAGE);hideCopyWcodeMessage()}
function copyWcodeLink(){var a=location.hostname+"/"+getWcodeFull().join(".");showAndCopy(a.toLowerCase());showNotification(WCODE_LINK_COPIED_MESSAGE)}var CityList,city_styled_wordlist=[],city_plus_wordList=[],pendingPosition,pendingWords,wordList,PURE_WCODE_CITY_PICKED="Since your city is not set - city was chosen from the last location",PURE_WCODE_CITY_FAILED="Since your city is not set - you must first choose the city or preceed the WCode with city name";
function getCityFromPosition(a){var b;CityList.forEach(function(c){var d=Math.abs(c.center.lng-a.lng);.25>Math.abs(c.center.lat-a.lat)&&.25>d&&(null==b||b.dLng>d)&&(b={city:c,dLng:d})});return null==b?null:b.city}function getCityFromName(a){for(var b=0;b<CityList.length;b++)if(0==CityList[b].name.toLowerCase().localeCompare(a))return CityList[b];return null}
function encode(a){clearWcode();if(null!=CityList){var b=getCityFromPosition(a);null==b?pendingCity||(pendingPosition=a,noCity(a)):(pendingCity&&(hideNoCityMessage(),infoWindow_setContent(MESSAGE_LOADING),pendingCity=!1),encode_(b,a))}else pendingPosition=a}
function decode(a){if(null!=CityList){var b,c=!1,d=a.length-3;if(3<a.length)b=a.slice(0,d).join(" "),b=getCityFromName(b),c=!0;else if(3==a.length){if(null==myLocDot){null!=marker&&null!=marker.position?(c=marker.position,focus_(c),showNotification(PURE_WCODE_CITY_PICKED)):showNotification(PURE_WCODE_CITY_FAILED);return}c=myLocDot.position;null!=c&&(b=getCityFromPosition(resolveLatLng(c)));c=null!=b?!0:!1}if(c)for(var e=0;3>e;e++)if(1!=wordList.includes(a[d+e])){c=!1;break}c?decode_(b,a.slice(d,a.length)):
showNotification(INCORRECT_WCODE)}else pendingWords=a}var wcode_city,wcode_code,wcode_postition;function setWcode(a,b){wcode_city=a[0];wcode_code=a.slice(1,a.length);wcode_postition=b;setInfoWindowText(a,b)}function clearWcode(){wcode_postition=null}function getWcodeFull(){return[wcode_city].concat(wcode_code)}function formatWcode(a){return["\\"].concat(a).concat(["/"])}function getWcodeFull_formatted(){return formatWcode(getWcodeFull())}function getWcodeCode(){return wcode_code}
function getWcodeCode_formatted(){return formatWcode(getWcodeCode())}function getWcodeCity(){return wcode_city}
function WordList(a){this.wordList=a;this.curList=[];a=$jscomp.makeIterator(this.wordList);for(var b=a.next();!b.done;b=a.next())this.curList.push(b.value[0]);this.indexOf=function(a){for(var b=0;1024>b;b++)if(-1!=this.wordList[b].indexOf(a))return b;return-1};this.getWord=function(a){return this.curList[a]};this.includes=function(a){for(var b=$jscomp.makeIterator(this.wordList),c=b.next();!c.done;c=b.next())for(var c=$jscomp.makeIterator(c.value),f=c.next();!f.done;f=c.next())if(f.value==a)return!0;
return!1}}firebase.database().ref("WordList").on("value",function(a){wordList=new WordList(a.val());null!=CityList&&initData()});firebase.database().ref("CityList").on("value",function(a){CityList=a.val();CityList.forEach(function(a){city_styled_wordlist.push(a.name);city_plus_wordList.push(a.name.toLowerCase())});null!=wordList&&initData()});
function initData(){city_styled_wordlist=city_styled_wordlist.concat(wordList.curList);city_plus_wordList=city_plus_wordList.concat(wordList.curList);null!=pendingPosition?encode(pendingPosition):null!=pendingWords&&decode(pendingWords)}function focus__(a,b){focus_(a);setWcode(b,a)}
function focus_(a,b){hideNoCityMessage();"undefined"===typeof marker?(marker=new google.maps.Marker({position:a,map:map,title:"Hello World!"}),marker.addListener("click",function(){0==infoWindow_open?(infoWindow.open(map,marker),infoWindow_open=!0):(infoWindow.close(),infoWindow_open=!1)})):marker.setPosition(a);null==marker.getMap()&&marker.setMap(map);"undefined"!==typeof b?map.fitBounds(b,26):"undefined"!==typeof accuCircle&&accuCircle.setOptions({fillOpacity:.1});map.panTo(a);map.panBy(0,getPanByOffset());
infoWindow_setContent(MESSAGE_LOADING);infoWindow.open(map,marker);infoWindow_open=!0}function infoWindow_setContent(a){"undefined"==typeof infoWindow&&(infoWindow=new google.maps.InfoWindow({map:map}));infoWindow.setContent(a)}
function setInfoWindowText(a,b){infoWindow_setContent("<div id='infowindow_code'><div id='infowindow_code_left'><span class='slash'>\\</span> <span class='infowindow_code' id='infowindow_code_left_code'>"+a[0]+"</span></div><div id='infowindow_code_right'><span class='infowindow_code' id='infowindow_code_right_code'>"+a.slice(1,a.length).join(" ")+"</span> <span class='slash'>/</span></div></div><div id='infowindow_actions' class='center'><img id='show_address_button' class='control' onclick='toggleAddress();' src="+
svg_address+" ><img id='copy_code_button' class='control' onclick='showCopyWcodeMessage();' src="+svg_copy+" ><img id='copy_link_button' class='control' onclick='copyWcodeLink();' src="+svg_link+" ><a href='"+getIntentURL(b,a)+"'><img id='external_map_button' class='control' onclick='' src="+svg_map+" ></a></div>")}
function initLocate(a){if(locationAccessCheck())locateExec();else{var b=a||!locationAccessDNDstatus();a||!locationAccessDNDcheck()?showLocateRightMessage(b):wait_loader.classList.add("hide")}}
function locateExec(){wait_loader.classList.remove("hide");navigator.geolocation?(wait_loader.classList.add("hide"),navigator.geolocation.getCurrentPosition(function(a){setLocationAccess(!0);var b={lat:a.coords.latitude,lng:a.coords.longitude};"undefined"===typeof accuCircle?accuCircle=new google.maps.Circle({strokeColor:"#69B7CF",strokeOpacity:0,strokeWeight:0,fillColor:"#69B7CF",fillOpacity:.35,map:map,center:b,radius:a.coords.accuracy,clickable:!1}):(accuCircle.setOptions({fillOpacity:.35}),accuCircle.setCenter(b),
accuCircle.setRadius(a.coords.accuracy));"undefined"===typeof myLocDot?myLocDot=new google.maps.Marker({clickable:!1,icon:new google.maps.MarkerImage("https://maps.gstatic.com/mapfiles/mobile/mobileimgs2.png",new google.maps.Size(22,22),new google.maps.Point(0,18),new google.maps.Point(11,11)),shadow:null,zIndex:999,map:map,position:b}):myLocDot.setPosition(b);0==initWCode?(focus_(b,accuCircle.getBounds()),encode(b),getAddress(b)):(initWCode=!1,map.setZoom(12))},function(a){(a.code=a.PERMISSION_DENIED)?
(showNotification(LOCATION_PERMISSION_DENIED),setLocationAccess(!1),wait_loader.classList.add("hide")):handleLocationError(!0,infoWindow,map.getCenter());syncCheckIncompatibleBrowserMessage()})):(handleLocationError(!1,infoWindow,map.getCenter()),syncCheckIncompatibleBrowserMessage())}
function handleLocationError(a,b,c){showNotification(a?"Error: The Geolocation service failed":"Error: Your browser doesn't support geolocation");notification_top.classList.remove("hide");syncCheckIncompatibleBrowserMessage()}function showLocateRightMessage(a){1==a?locate_right_message_dnd.classList.add("hide"):locate_right_message_dnd.classList.remove("hide");locate_right_message.classList.remove("hide")}function hideLocateRightMessage(){locate_right_message.classList.add("hide")}
function locateRight_grant(){setLocationAccess(!0);initLocate();hideLocateRightMessage();locateRight_DND_check()}function locateRight_deny(){wait_loader.classList.add("hide");hideLocateRightMessage();locateRight_DND_check()}function locateRight_DND_check(){locate_right_message_dnd_input.checked?setLocationAccessDND(!0):setLocationAccessDND(!1)}
var marker,infoWindow,accuCircle,myLocDot,poiPlace,pendingCitySubmit=!1,infoWindow_open=!1,INCORRECT_WCODE='INCORRECT INPUT! Should be at least 3 WCode words, optionally preceded by a city. E.g: "Bangalore cat apple tomato"',MESSAGE_LOADING="Loading ..",LOCATION_PERMISSION_DENIED="Location permission was denied. Click to point or retry with the locate button";
function initMap(){var a=document.getElementById("pac-input"),b=new google.maps.places.SearchBox(a);map.controls[google.maps.ControlPosition.TOP_LEFT].push(a);map.addListener("bounds_changed",function(){b.setBounds(map.getBounds())});var c=[];b.addListener("places_changed",function(){var a=b.getPlaces();if(0!=a.length){clearMap();c.forEach(function(a){a.setMap(null)});c=[];var e=new google.maps.LatLngBounds;1==a.length?(clearAddress(),a=resolveLatLng(a[0].geometry.location),focus_(a),encode(a),getAddress(a)):
(a.forEach(function(a){if(a.geometry){var b={url:a.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(25,25)},b=new google.maps.Marker({map:map,icon:b,title:a.name,position:a.geometry.location});b.addListener("click",function(){load(this)});c.push(b);a.geometry.viewport?e.union(a.geometry.viewport):e.extend(a.geometry.location)}else console.log("Returned place contains no geometry")}),map.fitBounds(e))}});map.addListener("click",
function(a){pendingPosition=null;notification_top.classList.add("hide");clearAddress();clearURL();a=resolveLatLng(a.latLng);focus_(a);encode(a)});decode_button.addEventListener("click",function(){clearMap();suggestion_result.setInnerText="";var a=document.getElementById("pac-input").value;execDecode(a)});map_type_button.addEventListener("click",function(){toggleMapType(!0)});location_button.addEventListener("click",function(){syncLocate(!0)});document.getElementById("pac-input").addEventListener("input",
suggestComplete);clickHandler=new ClickEventHandler(map);pendingLocate&&syncLocate()}function resolveLatLng(a){return{lat:a.lat(),lng:a.lng()}}function execDecode(a){a=a.replace(/(\\|\/)/gm,"").trim().toLowerCase();var b=!0;if(0<a.length){var c;c=-1!=a.indexOf(" ")?" ":".";a=a.split(c);3>a.length?b=!1:decode(a)}b||showNotification(INCORRECT_WCODE)}
function suggestComplete(a){a=document.getElementById("pac-input").value.toLowerCase().split(" ");var b;0<a.length&&(b=getPossibleList(a.slice(0,-1)));if(null!=b){var c=a[a.length-1];if(b!=city_styled_wordlist&&b!=wordList.curList){var d=a.slice(0,-1).join(" ")+" ",e=[],f=new RegExp(d,"ig");b.forEach(function(a){a.toLowerCase().startsWith(d)&&e.push(a.replace(f,""))});b=e}changeInput(b,c)}else suggestion_result.innerText=""}
function getPossibleList(a){var b;if(0==a.length)b=city_styled_wordlist;else{var c;for(c=a.length;0<c;c--)if(b=a.slice(0,c).join(" "),getCityFromName(b)){b=wordList.curList;break}else if((b=matchWord(city_styled_wordlist,b))&&0<b.length)break;for(;c<a.length;c++)if(wordList.indexOf(a[c]))b=wordList.curList;else return null}return b}
function matchWord(a,b){var c=new RegExp(b.split("").join("\\w*").replace(/\W/,""),"i");return a.filter(function(a){if(a.match(c)&&a.toLowerCase().startsWith(b))return a})}function changeInput(a,b){var c=matchWord(a,b);suggestion_result.innerText="";if(1!=c.length||b!=c[0].toLowerCase())if(5>c.length||2<b.length)for(var d=0;d<c.length&&10>d;d++){var e=document.createElement("div");e.innerText=c[d];e.addEventListener("click",chooseWord);suggestion_result.appendChild(e)}}
function chooseWord(a){a=document.getElementById("pac-input").value.split(" ");a[a.length-1]=this.innerText;document.getElementById("pac-input").value=a.join(" ")+" ";document.getElementById("pac-input").focus();suggestion_result.innerText=""}var lastMarker;function load(a){focus_(a.position);window.marker.title=a.title;infoWindow.open(map,window.marker);infoWindow_open=!0;a.setVisible(!1);lastMarker=a;infoWindow_setContent(MESSAGE_LOADING);encode(a.position)}
function getPanByOffset(){return 1E3>window.innerHeight?-118:0}function getIntentURL(a,b){return navigator.userAgent.match(/android/i)?"geo:0,0?q="+a.lat+","+a.lng+"(\\ "+b.join(" ")+" /)":"https://maps.google.com/maps?q=loc:"+a.lat+","+a.lng+"&t=h"}function clearMap(){null!=marker&&marker.setMap(null)}
function toggleMapType(){map.getMapTypeId()==google.maps.MapTypeId.SATELLITE.toLowerCase()?(map.setMapTypeId(google.maps.MapTypeId.ROADMAP),map_type_button.value="Map"):(map.setMapTypeId(google.maps.MapTypeId.SATELLITE),map_type_button.value="Sattelite")}function showNoCityMessage(){no_city_message.classList.remove("hide")}function hideNoCityMessage(){no_city_message.classList.add("hide");noCity_hideLoader()}function noCity_add(){submitCity();noCity_showLoader()}
function noCity_showLoader(){no_city_message_prompt.classList.add("hide");no_city_message_wait.classList.remove("hide")}function noCity_hideLoader(){no_city_message_prompt.classList.remove("hide");no_city_message_wait.classList.add("hide")}function noCity_cancel(){hideNoCityMessage();notification_top.classList.remove("hide")}function noCityWait_continue(){infoWindow_setContent("Waiting for update");hideNoCityMessage()}
function noCityWait_stop(){pendingPosition=null;pendingCity=!1;hideNoCityMessage();notification_top.classList.remove("hide")}function hideOverlay(){document.getElementById("overlay").classList.add("hide")}function showOverlay(){document.getElementById("overlay").classList.remove("hide")}function arrayContainsArray(a,b){return b.every(function(b){return 0<=a.indexOf(b.toLowerCase())})}
function clearURL(){""!=window.location.pathname.substr(1)&&window.history.pushState({html:"",pageTitle:""},"","/")}function initLoad(){initLoadDone||"interactive"!==document.readyState||(versionCheck(),urlDecode()||syncLocate(),syncInitMap(),setupControls(),initLoadDone=!0)}
function setupControls(){document.getElementById("overlay").addEventListener("click",hideOverlay);document.getElementById("overlay_message_close").addEventListener("click",hideOverlay);document.getElementById("info").addEventListener("click",showOverlay);document.getElementById("no_city_message_close").addEventListener("click",hideNoCityMessage);document.getElementById("locate_right_message_close").addEventListener("click",hideLocateRightMessage);document.getElementById("locate_right_message_yes").addEventListener("click",
locateRight_grant);document.getElementById("locate_right_message_no").addEventListener("click",locateRight_deny);document.getElementById("no_city_submit_yes").addEventListener("click",noCity_add);document.getElementById("no_city_submit_no").addEventListener("click",noCity_cancel);document.getElementById("no_city_submit_wait_continue").addEventListener("click",noCityWait_continue);document.getElementById("no_city_submit_wait_stop").addEventListener("click",noCityWait_stop);document.getElementById("notification_top").addEventListener("click",
tryDefaultCity);document.getElementById("copy_wcode_message_close").addEventListener("click",hideCopyWcodeMessage);document.getElementById("copy_wcode_submit_yes").addEventListener("click",copyWcodeFull);document.getElementById("copy_wcode_submit_no").addEventListener("click",copyWcodeCode);document.getElementById("incompatible_browser_message_close").addEventListener("click",hideIncompatibleBrowserMessage);document.getElementById("incompatible_browser_message_continue").addEventListener("click",
hideIncompatibleBrowserMessage);document.getElementById("address_text_close").addEventListener("click",hideAddress);document.getElementById("address_text_copy").addEventListener("click",copyAddress)}function showAndCopy(a){showNotification(a);copyNodeText(notification_bottom)}function copyNodeText(a){var b=document.createRange();b.selectNode(a);window.getSelection().removeAllRanges();window.getSelection().addRange(b);document.execCommand("copy");window.getSelection().removeAllRanges()}
UMB=function(){function a(b,c,d){d=d||0;for(var e in b)try{b[e]=c[e].constructor==Object?a(b[e],c[e],d+1):c[e]}catch(p){}return b}var b=!1,c=!1,d={},e=function(){if(!b){b=!0;UMB.Detect.init();var c=window._umb||{};d={require:{chrome:UMB.Browsers.chrome.minimum,firefox:UMB.Browsers.firefox.minimum,ie:UMB.Browsers.ie.minimum,opera:UMB.Browsers.opera.minimum,safari:UMB.Browsers.safari.minimum,edge:UMB.Browsers.edge.minimum},display:!0,nonCritical:!1};d=a(d,c)}};return{load:function(){c||(c=!0,UMB.attach(window,
"load",function(){e();d.display&&UMB.autoDisplayWidget()}))},attach:function(a,b,c){a.addEventListener?window.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},getConfig:function(){e();return d},getCurrentBrowser:function(){e();return UMB.Detect.browser},getCurrentVersion:function(){e();return UMB.Detect.version},getBrowserInfo:function(a){e();return UMB.Browsers[a]},getStatus:function(){e();return UMB.Status.getStatus()},displayWidget:function(){e();UMB.Widget.display()},hideWidget:function(){e();
UMB.Widget.hide()},autoDisplayWidget:function(){e();if(-1==document.cookie.indexOf("_umb=hide")){var a=UMB.getStatus();"update"==a&&d.nonCritical?UMB.displayWidget():"warning"==a&&UMB.displayWidget()}},scrollToTop:function(){var a=document.body,b=document.documentElement,b=a.clientHeight?a:b;b.scrollTop=0}}}();UMB.load();"undefined"===typeof UMB&&(UMB=function(){});
UMB.Browsers={chrome:{name:"Chrome",vendor:"Google",current:"62",minimum:"61",update_url:"https://www.google.com/chrome/browser/desktop/index.html",info_url:"http://www.google.com/chrome/intl/en/more/index.html"},safari:{name:"Safari",vendor:"Apple",current:"11",minimum:"10",update_url:"http://www.apple.com/safari/",info_url:"http://www.apple.com/safari/"},edge:{name:"Edge",vendor:"Microsoft",current:"16",minimum:"15",update_url:"https://www.microsoft.com/en-us/download/details.aspx?id=48126",info_url:"https://www.microsoft.com/en-us/windows/microsoft-edge"},
firefox:{name:"Firefox",vendor:"Mozilla",current:"56",minimum:"55",update_url:"http://www.getfirefox.com/",info_url:"https://www.mozilla.org/firefox/desktop/"},ie:{name:"Internet Explorer",vendor:"Microsoft",current:"11",minimum:"10",update_url:"http://www.microsoft.com/ie",info_url:"http://windows.microsoft.com/internet-explorer"},opera:{name:"Opera",vendor:null,current:"48",minimum:"47",update_url:"http://www.opera.com/browser/",info_url:"http://www.opera.com/browser/features/"}};
"undefined"===typeof UMB&&(UMB=function(){});
UMB.Detect={init:function(){this.browser=this.searchString(this.dataBrowser)||"unknown";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"unknown"},searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(d)return a[b].identity}},searchVersion:function(a){var b=
a.indexOf(this.versionSearchString);if(-1!=b)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"OPR/",identity:"opera",versionSearch:"OPR"},{string:navigator.userAgent,subString:"Edge",identity:"edge",versionSearch:"Edge"},{string:navigator.userAgent,subString:"Chrome",versionSearch:"Chrome",identity:"chrome"},{string:navigator.vendor,subString:"Apple",identity:"safari",versionSearch:"Version"},{string:navigator.userAgent,subString:"Firefox",
versionSearch:"Firefox",identity:"firefox"},{string:navigator.userAgent,subString:"MSIE",identity:"ie",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Trident",identity:"ie",versionSearch:"rv"}],dataOS:[{string:navigator.userAgent,subString:"iPhone",identity:"iOS"},{string:navigator.userAgent,subString:"iPad",identity:"iOS"},{string:navigator.userAgent,subString:"Android",identity:"Android"},{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",
identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};"undefined"===typeof UMB&&(UMB=function(){});UMB.Status=function(){return{getStatus:function(){var a=UMB.getBrowserInfo(UMB.Detect.browser),b=UMB.Detect.OS;if(!a||"iOS"==b||"Android"==b)return"unsupported";a=parseFloat(a.current);b=parseFloat(UMB.getConfig().require[UMB.Detect.browser]);return UMB.Detect.version>=a?"latest":UMB.Detect.version>=b?"update":"warning"}}}();"undefined"===typeof UMB&&(UMB=function(){});
UMB.Widget=function(){var a=!1,b=!1,c=function(a,b){for(var c in a)b.style[c]=a[c]},d=function(){b=!1;var a=document.getElementById("BrowserBar");a&&document.getElementsByTagName("body")[0].removeChild(a);a=document.createElement("div");c({display:"none",position:"absolute",height:"19px",fontSize:"14px",lineHeight:"1em",fontFamily:"Arial, sans-serif",color:"black",padding:"10px 0",top:"-40px",left:"0px",backgroundColor:"#FDF2AB",backgroundImage:"url(//updatemybrowser.org/warning.gif)",backgroundPosition:"10px center",
backgroundRepeat:"no-repeat",borderBottom:"1px solid #A29330",width:"100%",textAlign:"left",cursor:"pointer",zoom:"1",zIndex:9999,"-webkit-box-sizing":"content-box","-moz-box-sizing":"content-box","box-sizing":"content-box",overflow:"hidden"},a);a.setAttribute("id","BrowserBar");var m=document.createElement("p");c({margin:"0px 0px 0px 40px",padding:"0px",lineHeight:"1.5em"},m);var d=document.createElement("a");d.href="javascript:void(0);";d.title="Don't show me this notification bar for the next 24 hours";
d.onclick=function(a){a||(a=window.event);a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();UMB.Widget.hidePersistent(1);return!1};c({display:"block",width:"20px",height:"20px",margin:"0px 0px 0px 40px",padding:"0px",lineHeight:"1.5em",position:"absolute",top:"10px",right:"10px",backgroundImage:"url(//updatemybrowser.org/close.gif)",backgroundPosition:"0 0",backgroundRepeat:"no-repeat"},d);a.appendChild(m);a.appendChild(d);document.getElementsByTagName("body")[0].appendChild(a)},e=function(){var a=
UMB.getStatus(),c=UMB.getBrowserInfo(UMB.getCurrentBrowser()),d=UMB.getCurrentVersion();if(a&&c&&d){var e=document.getElementById("BrowserBar"),f=document.createElement("a");f.href="https://www.updatemybrowser.org";f.onclick=function(){return!1};f.style.color="#2183d0";f.style.fontWeight="bold";f.target="_blank";var h="",g="";"latest"==a?(h="You have the latest version of your browser installed ("+c.name+" "+d+"). ",f.style.color="#00A651",f.appendChild(document.createTextNode("Learn more"))):"update"==
a?(h="An update ("+c.name+" "+c.current+") is available for your browser. Please ",f.appendChild(document.createTextNode("install this browser update")),g="."):"warning"==a&&(h="An important update ("+c.name+" "+c.current+") is available for your browser. Please ",f.style.color="#ED1C24",f.appendChild(document.createTextNode("install this critical browser update")),g=".",b=!0);e.getElementsByTagName("p")[0].appendChild(document.createTextNode(h));e.getElementsByTagName("p")[0].appendChild(f);e.getElementsByTagName("p")[0].appendChild(document.createTextNode(g));
document.getElementById("BrowserBar").onclick=function(){window.open(f.href)}}},f=function(a,b){var c;window.getComputedStyle?c=window.getComputedStyle(a)[b]:a.currentStyle&&(c=a.currentStyle[b]);c||(c=a.style[b]);return c},l=function(a,b,c,d,e,h,g){"opacity"==b&&l(a,"filter",100*c,d,e,"alpha(opacity=",")");h=h||"";g=g||"";-1<"|top|marginTop|".indexOf(b)&&(g=g||"px");var m=parseFloat(f(a,b).replace(h,"").replace(g,""))||0;if(0==c.toString().indexOf("+")||0==c.toString().indexOf("-"))c=m+parseFloat(c);
var p=1/(d/10),k=0,q=function(a){return Math.round(100*(m+(c-m)*(.5-Math.cos(a*Math.PI)/2)))/100},n=setInterval(function(){k+=p;a.style[b]=h+q(k)+g;1<=k&&(clearInterval(n),a.style[b]=h+q(1)+g,e&&e())},10)},k=function(){var a=document.getElementsByTagName("body")[0],c=document.getElementById("BrowserBar");if("none"===f(c,"display")&&(a.className+=" umb-active",c.style.opacity="0",c.style.filter="alpha(opacity=0)",c.style.display="block",l(c,"opacity",.95,600),"ie"==UMB.getCurrentBrowser()&&"BackCompat"==
document.compatMode?(c.style.top="0px",c.style.width=(document.documentElement.clientWidth||document.body.clientWidth)+"px"):(a.style.position="relative",a.style.overflow="visible",l(a,"top","+40",300),b||(UMB.attach(window,"resize",function(){c.style.width=(document.documentElement.clientWidth||document.body.clientWidth)+"px"}),c.style.width=(document.documentElement.clientWidth||document.body.clientWidth)+"px",c.style.top="-"+(parseFloat(f(a,"marginTop"))+40)+"px",c.style.left="-"+parseFloat(f(a,
"marginLeft"))+"px")),b))if("ie"==UMB.getCurrentBrowser()&&"BackCompat"==document.compatMode)UMB.attach(window,"scroll",function(){c.style.top=(document.documentElement.scrollTop||document.body.scrollTop)+(!c.offsetHeight&&0)+"px"}),c.style.top=(document.documentElement.scrollTop||document.body.scrollTop)+(!c.offsetHeight&&0)+"px";else if("ie"==UMB.getCurrentBrowser()&&6>=UMB.getCurrentVersion()){UMB.attach(window,"resize",function(){c.style.width=(document.documentElement.clientWidth||document.body.clientWidth)+
"px"});c.style.width=(document.documentElement.clientWidth||document.body.clientWidth)+"px";var d=parseFloat(f(a,"marginTop"))+40;c.style.top="-"+d+"px";c.style.left="-"+parseFloat(f(a,"marginLeft"))+"px";UMB.attach(window,"scroll",function(){c.style.top=(document.documentElement.scrollTop||document.body.scrollTop)-d+"px"});c.style.top=(document.documentElement.scrollTop||document.body.scrollTop)-d+"px"}else c.style.top="0px",c.style.position="fixed"},n=function(){var a=document.getElementsByTagName("body")[0],
b=document.getElementById("BrowserBar");"block"===f(b,"display")&&(a.className=a.className.replace(" umb-active",""),l(b,"opacity",0,600,function(){b.style.display="none"}),"ie"==UMB.getCurrentBrowser()&&"BackCompat"==document.compatMode||l(a,"top","-40",300))};return{init:function(){a||(a=!0,UMB.Widget.redraw())},redraw:function(){d();e()},display:function(){UMB.Widget.init();k()},hide:function(){UMB.Widget.init();n()},hidePersistent:function(a){a=a||1;var b=new Date;b.setDate(b.getDate()+a);a=encodeURIComponent("hide")+
(null==a?"":"; expires="+b.toUTCString())+"; path=/";document.cookie="_umb="+a;UMB.hideWidget()}}}();
var svg_address="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGhlaWdodD0nMjgnIHdpZHRoPScyOCcgdmlld0JveD0iMCAwIDI0IDI0Ij4gPHBhdGggZmlsbD0nIzY5QjdDRicgZD0iTTE0IDE3SDR2MmgxMHYtMnptNi04SDR2MmgxNlY5ek00IDE1aDE2di0ySDR2MnpNNCA1djJoMTZWNUg0eiIgLz4gPHBhdGggZmlsbD0nbm9uZScgZD0iTTAgMGgyNHYyNEgweiIgLz4gPC9zdmc+IA==",svg_copy="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGhlaWdodD0nMjAnIHdpZHRoPScyMCcgdmlld0JveD0iMCAwIDI0IDI0Ij4gPHBhdGggZmlsbD0nbm9uZScgZD0iTTAgMGgyNHYyNEgweiIgLz4gPHBhdGggZmlsbD0nIzY5QjdDRicgZD0iTTE2IDFINGMtMS4xIDAtMiAuOS0yIDJ2MTRoMlYzaDEyVjF6bTMgNEg4Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDExYzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bTAgMTZIOFY3aDExdjE0eiIgLz4gPC9zdmc+IA==",svg_link=
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMicgaGVpZ2h0PScyMCcgdmlld0JveD0iMCA0IDI0IDE1Ij4gPHBhdGggZmlsbD0nbm9uZScgZD0iTTAgMGgyNHYyNEgweiIgLz4gPHBhdGggZmlsbD0nIzY5QjdDRicgZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIgLz4gPC9zdmc+IA==",
svg_map="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMCcgaGVpZ2h0PScyMCcgdmlld0JveD0iMCAwIDI0IDI0Ij4gPHBhdGggZmlsbD0nIzY5QjdDRicgZD0iTTIwLjUgM2wtLjE2LjAzTDE1IDUuMSA5IDMgMy4zNiA0LjljLS4yMS4wNy0uMzYuMjUtLjM2LjQ4VjIwLjVjMCAuMjguMjIuNS41LjVsLjE2LS4wM0w5IDE4LjlsNiAyLjEgNS42NC0xLjljLjIxLS4wNy4zNi0uMjUuMzYtLjQ4VjMuNWMwLS4yOC0uMjItLjUtLjUtLjV6TTE1IDE5bC02LTIuMTFWNWw2IDIuMTFWMTl6IiAvPiA8cGF0aCBmaWxsPSdub25lJyBkPSdNMCAwaDI0djI0SDB6JyAvPiA8L3N2Zz4g";

