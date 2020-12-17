<?php

namespace app\controller;

use app\model\Person;
use app\model\Tour;
use app\RequestParams;

class PersonController extends BaseController
{
    public function get()
    {
        return ["items" => Person::all()];
    }

    public function getById()
    {

    }

    public function add()
    {
        Person::insert(RequestParams::$data);
        return ['success' => true];
    }

    public function edit()
    {

    }

    public function delete()
    {
        $params = RequestParams::$data;

        $id = (int) $params['id'];
        Person::deleteById($id);
        return ['success' => true];
    }
}
