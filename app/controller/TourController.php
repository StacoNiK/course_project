<?php

namespace app\controller;

use app\model\Tour;

class TourController extends BaseController
{
    public function get()
    {
        return ["items" => Tour::all()];
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
