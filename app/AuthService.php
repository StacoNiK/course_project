<?php

namespace app;

use app\model\Manager;

class AuthService
{
    public static function checkAuth($login, $password)
    {
        return Manager::checkAuth($login, $password);
    }
}