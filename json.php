<?
error_log("json.php called");
header('Content-Type: application/json;charset=utf-8');
$json_response = '[{"key" : "5", "value" : "kirill"},'.
                  '{"key" : "3", "value" : "dsfdfs"},'.
                  '{"key" : "1", "value" : "cxbxcvb"},'.
                  '{"key" : "7", "value" : "ewrwew"},'.
                  '{"key" : "4", "value" : "xcvbc"},'.
                  '{"key" : "2", "value" : "qwer3qw"},'.
                  '{"key" : "0", "value" : "5gte4th"}]';
$length = strlen($json_response);
header('Content-Length:'.$length);
echo $json_response;
