<?php

namespace app\controller;

use app\model\Flight;

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

    }
}
