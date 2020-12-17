<?php

namespace app\controller;

abstract class BaseController
{

    public function sendJsonResponse($data)
    {
        header('Content-Type: application/json');
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
}