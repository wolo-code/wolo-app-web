var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var b=a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,c||0)}},"es6-impl","es3");
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"startsWith");a+="";for(var e=b.length,g=a.length,h=Math.max(0,Math.min(c|0,b.length)),f=0;f<g&&h<e;)if(b[h++]!=a[f++])return!1;return f>=g}},"es6-impl","es3");var latLng_p="",address="",gpId="";
function getAddress(a){(new google.maps.Geocoder).geocode({location:a},function(b,c){latLng_p=a;"OK"===c?b[0]?(address=b[0].formatted_address,gpId=b[0].place_id,refreshAddress()):console.log("No geoCoding results found"):console.log("Geocoder failed due to: "+c);pendingCitySubmit&&(execSubmitCity(),pendingCitySubmit=!1)})}function toggleAddress(){"hide"==address_text.classList.value?showAddress():hideAddress()}
function showAddress(){address_text_content.innerText=address;address_text.classList.remove("hide")}function hideAddress(){address_text_content.innerText="";address_text.classList.add("hide")}function clearAddress(){gpId=address="";address_text_content.innerText=""}function refreshAddress(){address_text.classList.contains("hide")||(address_text_content.innerText=address)}function copyAddress(){copyNodeText(address_text_content)}
function noCity(a){showAddress();showNoCityMessage();infoWindow.setContent("Location not in database")}function submitCity(){""==address?pendingCitySubmit=!0:execSubmitCity()}function execSubmitCity(){var a=firebase.database().ref().child("CityRequest").push().key,b={};b["/CityRequest/"+a]={time:firebase.database.ServerValue.TIMESTAMP,lat_lng:latLng_p,gp_id:gpId,address:address,processed:!1};firebase.database().ref().update(b);showNotification("Request submitted. Check back later")}
function tryDefaultCity(){execDecode("Bangalore Diesel Hall Planet");notification_top.classList.add("hide");infoWindow.close()}var urlFunctions="https://location.wcodes.org/api/";
function encode_(a,b){var c=new XMLHttpRequest;c.open("POST",urlFunctions+"encode",!0);c.setRequestHeader("Content-type","application/json");c.setRequestHeader("version",1);wait_loader.classList.remove("hide");c.onreadystatechange=function(){4==c.readyState&&200==c.status&&(setCodeWords(c.responseText,a,b),wait_loader.classList.add("hide"))};c.send(stringifyEncodeData(getCityBegin(a.center),b));return""}
function setCodeWords(a,b,c){var d=[];d.push(b.name);a=JSON.parse(a).code;a=$jscomp.makeIterator(a);for(b=a.next();!b.done;b=a.next()){i=b.value;if(0>i||1023<i){focusDefault();return}d.push(wordList[i])}setInfoWindowText(d,c)}function stringifyEncodeData(a,b){var c={};c.city_begin=a;c.position=b;return JSON.stringify(c)}
function decode_(a,b){var c=new XMLHttpRequest;c.open("POST",urlFunctions+"decode",!0);c.setRequestHeader("Content-type","application/json");c.setRequestHeader("version",1);wait_loader.classList.remove("hide");c.onreadystatechange=function(){4==c.readyState&&200==c.status&&(b.splice(0,0,a.name),setCodeCoord(c.responseText,b),wait_loader.classList.add("hide"))};var d=[];d[0]=wordList.indexOf(b[0]);d[1]=wordList.indexOf(b[1]);d[2]=wordList.indexOf(b[2]);c.send(stringifyDecodeData(getCityBegin(a.center),
d))}function stringifyDecodeData(a,b){var c={};c.city_begin=a;c.code=b;return JSON.stringify(c)}function setCodeCoord(a,b){var c=JSON.parse(a);focus__(c,b)}var CityList=[],city_plus_wordList=[],pendingPosition,pendingWords;
function getCityFromPosition(a){var b=[];CityList.forEach(function(c){var d=Math.abs(c.center.lng-a.lng);if(.25>Math.abs(c.center.lat-a.lat)&&.25>d)if(0==b.length)b.push({city:c,dLng:d});else for(i=0;i<b.length;i++)if(b[i].dLng>d){b.splice(i,0,{city:c,dLng:d});break}});return 0==b.length?null:b[0].city}function getCityFromName(a){for(var b=0;b<CityList.length;b++)if(0==CityList[b].name.toLowerCase().localeCompare(a))return CityList[b]}function getCityBegin(a){return{lat:a.lat-.25,lng:a.lng-.25}}
function encode(a){if(0<CityList.length){var b=getCityFromPosition(a);null==b?(pendingPosition=a,noCity(a)):encode_(b,a)}else pendingPosition=a}function decode(a){if(0<CityList.length){var b=getCityFromName(a[0]);decode_(b,a.splice(1,a.length-1))}else pendingWords=a}
firebase.database().ref("CityList").on("value",function(a){CityList=a.val();CityList.forEach(function(a){city_plus_wordList.push(a.name.toLowerCase())});city_plus_wordList=city_plus_wordList.concat(wordList);null!=pendingPosition?(encode(pendingPosition),pendingPosition=null):null!=pendingWords&&(decode(pendingWords),pendingWords=null)});function copyWCode(){showAndCopy(getWCodeFullFromInfoWindow().join(" "));showNotification("WCode copied")}
function copyLink(){var a=location.hostname+"/"+getWCodeFromInfoWindow().join(".");showAndCopy(a.toLowerCase());showNotification("WCode link copied")}function getWCodeFullFromInfoWindow(){var a=infowindow_code.innerText.replace(/(\r?\n|\r)/gm," ").split(" ");a.pop();return a}function getWCodeFromInfoWindow(){var a=getWCodeFullFromInfoWindow();return a.slice(1,a.length-1)}function logCode(a,b){console.log("Code:");console.log(a);console.log(b);console.log("--")}
function logDifference(a,b,c){var d=Math.round(1E6*(a-curPos.lat))/1E6,e=Math.round(1E6*(b-curPos.lng))/1E6;console.log("Difference:");console.log(d+" "+e);console.log(curPos.lat+" "+curPos.lng);console.log(a+" "+b);console.log(c);console.log("--")}var map,marker,infoWindow,accuCircle,myLocDot,poiPlace,pendingLocate=!1,pendingCitySubmit=!1;
function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:-34.397,lng:150.644},mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.BOTTOM_CENTER},zoom:8,fullscreenControl:!1,streetViewControl:!1,zoomControl:!1});locate();var a=document.getElementById("pac-input"),b=new google.maps.places.SearchBox(a);map.controls[google.maps.ControlPosition.TOP_LEFT].push(a);map.addListener("bounds_changed",
function(){b.setBounds(map.getBounds())});var c=[];b.addListener("places_changed",function(){var a=b.getPlaces();if(0!=a.length){clearMap();c.forEach(function(a){a.setMap(null)});c=[];var e=new google.maps.LatLngBounds;1==a.length?(clearAddress(),focus_(a[0].geometry.location),a=resolveLatLng(a[0].geometry.location),encode(a),getAddress(a)):(a.forEach(function(a){if(a.geometry){var b={url:a.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),
scaledSize:new google.maps.Size(25,25)},b=new google.maps.Marker({map:map,icon:b,title:a.name,position:a.geometry.location});b.addListener("click",function(){load(this)});c.push(b);a.geometry.viewport?e.union(a.geometry.viewport):e.extend(a.geometry.location)}else console.log("Returned place contains no geometry")}),map.fitBounds(e))}});map.addListener("click",function(a){pendingPosition=null;notification_top.classList.add("hide");clearAddress();focus_(a.latLng);encode(resolveLatLng(a.latLng))});
location_button.addEventListener("click",function(){locate()});decode_button.addEventListener("click",function(){clearMap();result.setInnerText="";var a=document.getElementById("pac-input").value;execDecode(a)});document.getElementById("pac-input").addEventListener("input",suggestComplete);new ClickEventHandler(map)}function resolveLatLng(a){return{lat:a.lat(),lng:a.lng()}}
function execDecode(a){a=a.replace(/(\\|\/)/gm,"").trim().toLowerCase();var b=!0;if(0<a.length){var c;c=-1!=a.indexOf(" ")?" ":".";c=a.split(c);var d;if(3>c.length)b=!1;else if(3<c.length?(d=c.splice(0,c.length-3).join(" "),d=getCityFromName(d)):d=getCityFromPosition(resolveLatLng(myLocDot.position)),null==d)b=!1;else for(a=0;3>a;a++)if(1!=wordList.includes(c[a])){b=!1;break}}b?decode_(d,c):showNotification('Incorrect input! Should be at least 3 WCode words, optionally preceded by a city. E.g: "Bangalore cat apple tomato"')}
function suggestComplete(a){a=document.getElementById("pac-input").value;a.includes(" ")?(a=a.split(" "),0<a.length&&""!=a[a.length-1]?arrayContainsArray(city_plus_wordList,a.slice(0,-1))?changeInput(city_plus_wordList,a[a.length-1]):result.innerText="":result.innerText=""):changeInput(city_plus_wordList,a)}function matchWord(a,b){var c=new RegExp(b.split("").join("\\w*").replace(/\W/,""),"i");return a.filter(function(a){if(a.match(c)&&a.toLowerCase().startsWith(b.toLowerCase()))return a})}
function changeInput(a,b){var c=matchWord(a,b);result.innerText="";if(1!=c.length||b!=c[0])if(5>c.length||2<b.length)for(var d=0;d<c.length&&10>d;d++){var e=document.createElement("div");e.innerText=c[d];e.addEventListener("click",chooseWord);result.appendChild(e)}}function chooseWord(a){a=document.getElementById("pac-input").value.split(" ");a[a.length-1]=this.innerText;document.getElementById("pac-input").value=a.join(" ")+" ";document.getElementById("pac-input").focus();result.innerText=""}var lastMarker;
function load(a){focus_(a.position);window.marker.title=a.title;infoWindow.open(map,window.marker);a.setVisible(!1);lastMarker=a;infoWindow_setContent("Loading ..");encode(a.position)}function focus__(a,b){focus_(a);setInfoWindowText(b,a)}var ClickEventHandler=function(a){this.map=a;this.placesService=new google.maps.places.PlacesService(a);this.map.addListener("click",this.handleClick.bind(this))};
ClickEventHandler.prototype.handleClick=function(a){a.placeId?(a.stop(),this.getPlaceInformation(a.placeId)):getAddress(resolveLatLng(a.latLng))};ClickEventHandler.prototype.getPlaceInformation=function(a){this.placesService.getDetails({placeId:a},function(a,c){"OK"===c&&(poiPlace=a,address=a.formatted_address,refreshAddress())})};
function focus_(a,b){hideNoCityMessage();map.panTo(a);"undefined"===typeof marker?(marker=new google.maps.Marker({position:a,map:map,title:"Hello World!"}),marker.addListener("click",function(){infoWindow.open(map,marker)})):marker.setPosition(a);null==marker.getMap()&&marker.setMap(map);if("undefined"!==typeof b){if(map.fitBounds(b,26),null!=map.getBounds()){var c=map.getBounds().toSpan(),c={lat:a.lat+.06*c.lat(),lng:a.lng};map.panTo(c)}}else"undefined"!==typeof accuCircle&&accuCircle.setOptions({fillOpacity:.1});
infoWindow_setContent("Loading ..");infoWindow.open(map,marker)}function locate(){locationAccess?(pendingLocate=!1,locateExec()):(pendingLocate=!0,showLocateRightMessage())}
function locateExec(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(a){locationAccess=!0;var b={lat:a.coords.latitude,lng:a.coords.longitude};"undefined"===typeof accuCircle?accuCircle=new google.maps.Circle({strokeColor:"#69B7CF",strokeOpacity:0,strokeWeight:0,fillColor:"#69B7CF",fillOpacity:.35,map:map,center:b,radius:a.coords.accuracy,clickable:!1}):(accuCircle.setOptions({fillOpacity:.35}),accuCircle.setCenter(b),accuCircle.setRadius(a.coords.accuracy));"undefined"===
typeof myLocDot?myLocDot=new google.maps.Marker({clickable:!1,icon:new google.maps.MarkerImage("https://maps.gstatic.com/mapfiles/mobile/mobileimgs2.png",new google.maps.Size(22,22),new google.maps.Point(0,18),new google.maps.Point(11,11)),shadow:null,zIndex:999,map:map,position:b}):myLocDot.setPosition(b);0==initWCode?(focus_(b,accuCircle.getBounds()),encode(b),getAddress(b)):(initWCode=!1,map.setZoom(12))},function(a){(a.code=a.PERMISSION_DENIED)?showNotification("Location permission was denied. Click to point"):
handleLocationError(!0,infoWindow,map.getCenter())}):handleLocationError(!1,infoWindow,map.getCenter())}function handleLocationError(a,b,c){infoWindow_setContent(a?"Error: The Geolocation service failed":"Error: Your browser doesn't support geolocation");b.setPosition(c)}
function setInfoWindowText(a,b){infoWindow_setContent("<div id='infowindow_code'><div id='infowindow_code_left'><span class='slash'>\\</span> <span class='infowindow_code' id='infowindow_code_left_code'>"+a[0]+"</span></div><div id='infowindow_code_right'><span class='infowindow_code' id='infowindow_code_right_code'>"+a.slice(1,a.length).join(" ")+"</span> <span class='slash'>/</span></div></div><div class='center'><img id='show_address_button' class='control' onclick='toggleAddress();' src='/resource/address.svg' ><img id='copy_code_button' class='control' onclick='copyWCode();' src='/resource/copy.svg' ><img id='copy_link_button' class='control' onclick='copyLink();' src='/resource/link.svg' ><a href='"+
getIntentURL(b,a)+"'><img id='external_map_button' class='control' onclick='' src='/resource/map.svg' ></a></div>")}function getIntentURL(a,b){return navigator.userAgent.match(/android/i)?"geo:0,0?q="+a.lat+","+a.lng+"(\\ "+b.join(" ")+" /)":"https://maps.google.com/maps?q=loc:"+a.lat+","+a.lng}
function focusDefault(){setTimeout(function(){alert("This location appears to not be in the database. Please submit a request to add at support@wcodes.org")},100);setTimeout(function(){focusDefault_()},1E3)}function focusDefault_(){var a={lat:12.978328666666666,lng:77.59628655555555};focus_(a);setInfoWindowText(["Bangalore","hand","cat","bone"],a);map.setZoom(12)}function clearMap(){marker.setMap(null)}
function infoWindow_setContent(a){"undefined"==typeof infoWindow&&(infoWindow=new google.maps.InfoWindow({map:map}));infoWindow.setContent(a)}function arrayContainsArray(a,b){return b.every(function(b){return 0<=a.indexOf(b.toLowerCase())})}window.onload=init;
function init(){overlay.addEventListener("click",hideOverlay);overlay_message_close.addEventListener("click",hideOverlay);info.addEventListener("click",showOverlay);no_city_message_close.addEventListener("click",hideNoCityMessage);locate_right_message_close.addEventListener("click",hideLocateRightMessage);locate_right_message_yes.addEventListener("click",locateRight_grant);locate_right_message_no.addEventListener("click",locateRight_deny);no_city_submit_yes.addEventListener("click",noCity_add);no_city_submit_no.addEventListener("click",
noCity_cancel);no_city_submit_wait_continue.addEventListener("click",noCityWait_continue);no_city_submit_wait_stop.addEventListener("click",noCityWait_stop);notification_top.addEventListener("click",tryDefaultCity)}function showAndCopy(a){showNotification(a);copyNodeText(notification_bottom)}
function copyNodeText(a){var b=document.createRange();b.selectNode(a);window.getSelection().removeAllRanges();window.getSelection().addRange(b);document.execCommand("copy");window.getSelection().removeAllRanges()}var wordList="abacus actor air alarm almond ambulance anchor angle ant antenna apple apricot arch area arm army art asteroid atom aurora autumn avocado axle baby back bacteria badge bag bag ball balloon bamboo banana bangle bank base basin basis basket bat bath battery bay beach bead beam bean beast bed bed bee beetle bell belt bench bicycle bike bill bird biscuit black black blade blanket blizzard blood blue board boat body bone bonus book boot border boss bottle bottom boundary bow bowl box boy brain brake branch brass bread breath brick bridge broccoli broom brother brush bubble bucket buffalo building bulb bull bun bus bush butter button buyer cabbage cable cactus cage cake calcium calculator calendar camel camera camp canal cancer candle candy cannon canvas cap car carbon card care carriage carrot cart case cash cashew cast castle cat catch cave ceiling cell cellar cement cemetery cent century chain chair chalk channel cheek cheese cheetah cherry chess chest chicken child children chili chimpanzee chin chocolate circle city clam class claw clay cliff climate clock cloth cloud clover clown club coach coal coast coat cobra cockroach cocoa coffee coil coin collar color comb company compass computer concrete continent cook cookie copper cord cork corn cotton cough country cover cow crab crack crane crate crayon cream creature credit cricket cricket crime crocodile crook crow crowd crown cube cucumber cup current curtain curve dad daffodil dahlia dark date dawn death decade deck degree depth desert desk diamond diary dice diesel dime dinosaur dirt dish disk distance doctor dodo doll dollar dolphin dome donkey door doughnut dove dragon drain drama drawer dress drill drink drop drum duck dusk dust eagle ear earth east eclipse edge egg elbow electron elephant ellipse engine entry equation equator eraser error event exam exit eye face fact factory fall fan fang farm farmer fat father faucet fax feast feather feet fence fever field file film finger fire fish flag flame flesh floor flower flute fly fog food foot force forest fork form formula fountain fox frame frock frog front fruit fuel fungi fur furniture galaxy game garden garlic gas gate gear gecko gem gene giant gift giraffe girl glacier glass glove glue goal goat gold goose gorilla governor grade grain grape graph grass gravity green grid grip ground group guava guest guide guitar hair half hall hammer hand harmonica harpoon hat hawk head heart heat helicopter helium helmet hill hip hippo hockey hole home honey hook hope horn horse hose hospital hotel hour house hurricane hydrogen ice idea impulse income ink insect instrument insurance interest invention iridium iron island item jackal jacket jail jam jar jeans jeep jelly jewel join joke journey judge juice kangaroo kettle key kick kidney kind king kite kitten kiwi knee knowledge lab lace lack ladder lady lake lamp land land language lasso law lawn lawyer lead leaf leather left leg lemon lens leopard letter lettuce level library life lift light lily line linen link lion lip liquid list liver lizard load lock locket log logo look loss lotus love low lumber lunch lung machine magic magnet mail mall mammoth man manager mango map marble market mars mask mass mat math matrix matter meal meat media memory menu mercury metal meteor milk millennium mind mine minister minute mirror mist mode mom money monk monkey month mood mop morning mosquito mother motion motor mountain mouse mouth movie mud muffin mug muscle mushroom music nail name nation nature nebula neck needle nerve nest net neutron news night nitrogen noise north nose nose note number nurse nut oak oat ocean octopus office oil olive onion orange orbit orchid ornament ostrich oven owl owner oxygen oyster pack page paint pair palm pan panda pant panther papaya paper parcel parent park parrot part patch peace peak pear pearl pen pencil penguin pepper perfume person pest pet petrol phone photon piano pickle picture pie pigeon pill pillar pillow pilot pin pine pipe pizza place plan plane planet plant plasma plastic plate platinum play pleasure plot plough plug plutonium pocket poem poet point pole police polo pond pool port porter position post pot potato powder power price print printer prison profit proton pulsar pump punch purse pyramid quartz queen question quiet quilt quince quiver rabbit rack radio radish rain rake range rat rate ratio ray receipt rectangle red rent rhino rice rice rifle right rim ring risk river road robin rock rocket rod role roof room root rope rose route rub rule run rust sack saddle sail salad salt sample sand satellite sauce scale scarf scene scent school science scissor screw sea second seed self shade shake shampoo shark sheep sheet shelf shell ship shirt shoe shop shot shoulder shout shovel shower side sign silicon silk silver sink sister site size skate skeleton skill skin skirt sky sleep sleet slip slope sloth smell smile smoke snail snake snow soap soccer society sock socket soda sodium sofa soil soldier son song sort sound soup south space spade spark speaker spear sphere spider sponge spoon spot spring spy square squid squirrel stage stamp stand star state statement station steak steam steel stem step stew stick stitch stomach stone storm story stove straw street string student study sugar suit summer sushi swan sweater swing switch sword syringe system table tail tale tank tap tape task tattoo tea teacher telephone telescope tennis tent term test text theory thief thigh thing thorn thought thread throat thumb thunder ticket tide tie tiger tile tilt time timer tin tip titanium toast toe tomato tomb tongue tool tooth top topic tornado tortoise toss touch towel tower town toy trade train tree tremor triangle trip trophy trouser truck trunk truth tsunami tub tube tulip tuna tunnel turnip twig twist type umbrella uncle union unit universe uranium user valley value van vanilla vase vegetable veil vein venom verse vessel vest video view village violin virus vitamin voice volcano vulture waffle wall wallet walrus war watch water wave wax weapon weather web week weight west whale wheat wheel while whip whistle white wife wind window wing winter wire wolf woman wonder wood wool word work world wound wrench wrist yak yard yarn year yellow yogurt youth zebra zinc".split(" ");
