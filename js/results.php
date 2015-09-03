<?php
    // You should fetch the JSON data from the remote location the same
    $json = file_get_contents("magicseaweed.com/api/5f57bd47d1f0e4a60f78308cf6e54cce/forecast/?spot_id=10");

    // This is just a subset JSON data for this example
   

    // Decode the JSON data into a PHP array using 'true'
    // as 2nd argument of the json_decode function
    $data = json_decode($json, true);

    // Iterate each of the records and access the data as needed
    foreach ($data as $record) {
        echo "Timestamp: {$record['timestamp']}\n";
        echo "Wind speed: {$record['wind']['speed']}\n";
        echo "Temperature: {$record['condition']['temperature']}\n";
    }
?>