<?php

namespace app\model;

use app\Database;

abstract class BaseModel
{
    public static $table;

    public static $properties = [];

    public static function all()
    {
        $table = static::getTable();
        $result = static::getDbConnection()->query("SELECT * FROM {$table}");
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    protected static function getDbConnection()
    {
        return Database::$connection;
    }

    protected static function getTable()
    {
        return static::$table;
    }
}