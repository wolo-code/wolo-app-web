<div id='overlay'>
	<div id='overlay_message'>
		<div id='overlay_message_info'>
			<span class='image'><?php echo file_get_contents('resource\info.svg'); ?></span>
		</div>
		<div id='overlay_message_close' class="control">
			<span class='image'><?php echo file_get_contents('resource\close.svg'); ?></span>
		</div>
		<h1>
			Note
		</h1>
		<h2>
			Status
		</h2>
		<ol>
			<li>This is a beta demo of word based geo addressing</li>
			<li>The first word specifies the city, the other three words are from a limited dictionary of 1024 easy common nouns</li>
			<li>At present this runs on a temporary algorithm</li>
			<li>Limited to 'Bangalore', 'India'</li>
			<li>Your precise location will not be recorded and stored</li>
			<li>Tested with Google Chrome v58</li>
		</ol>
		<h2>
			Steps
		</h2>
		<ol>
			<li>Click to generate WCode for that location</li>
			<li>Enter a WCode and press 'Decode' to go to that location</li>
		</ol>
		<h2>
			Known issues
		</h2>
		<ol>
			<li>Word list will be further refined</li>
			<li>The accuracy is not *exact* but _close enough_.</li>
			<li>Thus nearby places will generate same code</li>
			<li>The server roundtrip induces a delay. Please wait a few seconds for the result to show up</li>
		</ol>
		<div class="center"><button id='overlay_enter' type='button'>Enter</button></div>
		<div id='contact'>
			For any related query contact <a class='link' href='https://wcodes.org/about_me'>me</a> at: <a class="link" href="mailto:ujjwalsingh@outlook.com?Subject=WAddress">ujjwalsingh@outlook.com</a>
		</div>
		<div id='updated'>Updated:
<?php
			echo date('Y-M-d H:i:s');
?>
		</div>
	</div>
</div>
