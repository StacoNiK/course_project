<?php

namespace app\controller;

use app\model\Tour;
use app\model\ToursRequest;
use app\RequestParams;

class ToursRequestController extends BaseController
{
    public function get()
    {
        return ["items" => ToursRequest::get()];
    }

    /*public function getById()
    {

    }

    public function add()
    {
        Tour::insert(RequestParams::$data);
        return ['success' => true];
    }

    public function edit()
    {

    }*/

    public function delete()
    {
        $params = RequestParams::$data;

        $id = (int) $params['id'];
        ToursRequest::deleteById($id);
        return ['success' => true];
    }
}
