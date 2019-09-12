<?php
/////////////////////////////////////////////////////
// FALLBACK FOR META DATA
// https://www.flashradio.info
//
// Copyright (C) SODAH | JOERG KRUEGER 
// https://www.sodah.de
/////////////////////////////////////////////////////
error_reporting(0);
header('Content-type: text/plain');
header('Pragma: public'); 
header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');                  
header('Last-Modified: '.gmdate('D, d M Y H:i:s') . ' GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: pre-check=0, post-check=0, max-age=0');
header('Pragma: no-cache'); 
header('Expires: 0'); 

if (isset($_POST['url']) && isset($_POST['mode'])) {
	if ($_POST['url'] != "") {
		switch ($_POST['mode']) {
			case "fallback":
				$options = array(
					'http'=>array(
					'method'=>"GET",
					'header'=>"Accept-language: en\r\n" .
								"Cookie: foo=bar\r\n" . 
								"User-Agent: Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.102011-10-16 20:23:10\r\n" // i.e. An iPad 
					)
				);

				$contents = file_get_contents($_POST['url'], false, stream_context_create($options),0, 12000);
				echo $contents;
				break;
		}
	}
}
?>