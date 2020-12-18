<?php

namespace app\model;

class Manager extends BaseModel
{
    public static $table = "managers";

    public static $properties = [
        "username",
        "password",
        "role"
    ];

    public static function checkAuth($username, $password)
    {
        $table = static::getTable();

        if (!$username || !$password)
            return false;

        $result = static::getDbConnection()->query("SELECT * FROM {$table} WHERE `username` = '{$username}' AND `password` = '{$password}'");
        return $result->num_rows > 0 ? true : false;
    }
}