<?php

include __DIR__.'/vendor/autoload.php';

$config = include __DIR__.'/config.php';

\app\Database::connect($config['db_host'], $config['db_user'], $config['db_password'], $config['db_name']);

header("Access-Control-Allow-Origin: *");
//$data = json_decode(file_get_contents('php://input'), true);
$data = $_GET;

$apiMethods = [
    'flights' => [
        'controller' => \app\controller\FlightController::class,
        'methods' => [
            'get',
            'getById',
            'add',
            'delete',
            'edit'
        ]

    ],
    'tours' => [
        'controller' => '',
        'methods' => [
            'get',
            'getById',
            'add',
            'delete',
            'edit'
        ]

    ],
];

if (!isset($data['method'])) {
    echo 'method not found';
    die();
}

$requestMethod = $data['method'];
$methodParts = explode('.', $requestMethod);

if (!isset($methodParts[1])){
    echo 'incorrect method';
    die();
}

if (isset($apiMethods[$methodParts[0]])) {
    $methodName = $methodParts[1];
    $controller = new $apiMethods[$methodParts[0]]['controller']();

    if (in_array($methodName, $apiMethods[$methodParts[0]]['methods'])) {
        $response = $controller->$methodName();
        $controller->sendJsonResponse($response);
    }

} else {
    echo 'incorrect method';
    die();
}

