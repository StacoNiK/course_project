<?php

namespace app\controller;

class AuthController extends BaseController
{
    public function check()
    {
        return ['auth' => true];
    }
}
