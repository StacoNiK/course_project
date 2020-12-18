<?php

namespace app\controller;

use app\model\Tour;
use app\RequestParams;

class TourController extends BaseController
{
    public function get()
    {
        return ["items" => Tour::all()];
    }

    public function getById()
    {
        return ["item" => Tour::getById(RequestParams::$data['id'])];
    }

    public function add()
    {
        Tour::insert(RequestParams::$data);
        return ['success' => true];
    }

    public function edit()
    {
        $params = RequestParams::$data;

        Tour::editById($params['id'], $params);
    }

    public function delete()
    {
        $params = RequestParams::$data;

        $id = (int) $params['id'];
        Tour::deleteById($id);
        return ['success' => true];
    }
}
