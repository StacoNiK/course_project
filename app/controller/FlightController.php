<?php

namespace app\controller;

use app\model\Flight;
use app\RequestParams;

class FlightController extends BaseController
{
    public function get()
    {
        return ['items' => Flight::all()];
    }

    public function getById()
    {

    }

    public function add()
    {

    }

    public function edit()
    {

    }

    public function delete()
    {
        $params = RequestParams::$data;

        $id = (int) $params['id'];
        Flight::deleteById($id);
    }
}
