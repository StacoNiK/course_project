<?php

include __DIR__.'/vendor/autoload.php';

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$config = include __DIR__.'/config.php';

\app\Database::connect($config['db_host'], $config['db_user'], $config['db_password'], $config['db_name']);

header("Access-Control-Allow-Origin: *");
$data = json_decode(file_get_contents('php://input'), true);
//$data = $_GET;

\app\RequestParams::$data = $data;

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
        'controller' => \app\controller\TourController::class,
        'methods' => [
            'get',
            'getById',
            'add',
            'delete',
            'edit'
        ],

    ],
    'tours_requests' => [
        'controller' => \app\controller\ToursRequestController::class,
        'methods' => [
            'get',
            'getById',
            'add',
            'delete',
            'edit'
        ],

    ],
    'persons' => [
        'controller' => \app\controller\PersonController::class,
        'methods' => [
            'get',
            'getById',
            'add',
            'delete',
            'edit'
        ],
    ],
    'auth' => [
        'controller' => \app\controller\AuthController::class,
        'methods' => [
            'check'
        ]
    ]
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

if (!isset($data['login']) || !isset($data['password'])) {
    echo '{"auth": false}';
    die();
}

$isAuth = \app\AuthService::checkAuth($data['login'], $data['password']);

if (!$isAuth) {
    echo '{"auth": false}';
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

