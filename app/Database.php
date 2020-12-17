<?php

namespace app;

use mysqli;

class Database
{
    /**
     * @var mysqli/Mysqli
     */
    public static $connection = null;

    public static function connect($host, $user, $password, $name)
    {
        self::$connection = new Mysqli($host, $user, $password, $name);
    }
}