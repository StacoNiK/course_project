<?php

namespace app\model;

use app\Database;

abstract class BaseModel
{
    public static $table;

    public static $properties = null;

    public static function all()
    {
        $table = static::getTable();
        $result = static::getDbConnection()->query("SELECT * FROM {$table}");
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function deleteById($id)
    {
        $table = static::getTable();
        $id = (int) $id;
        $result = static::getDbConnection()->query("DELETE FROM `{$table}` WHERE id = {$id}");
        return ["success" => true];
    }

    public static function insert($data)
    {
        $toInsert = [];

        if (!is_array(static::$properties)) {
            $toInsert = $data;
        } else {
            foreach (static::$properties as $prop) {
                if (isset($data[$prop])) {
                    $toInsert[$prop] = $data[$prop];
                }
            }
        }

        $table = static::getTable();
        $values = '';
        foreach ($toInsert as $key => $item) {
            $values .= "`{$key}`=\"{$item}\",";
        }
        $values = substr($values, 0, -1);
        $result = static::getDbConnection()->query("INSERT INTO `{$table}` SET {$values}");
        return ["success" => true];
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