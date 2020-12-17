<?php

namespace app\model;

class Tour extends BaseModel
{
    public static $table = "tours";

    public static $properties = [
        'name',
        'country',
        'date_start',
        'date_end',
        'cost'
    ];

    public static function insert($data)
    {
        $toInsert = [];
        foreach (static::$properties as $prop) {
            if (isset($data[$prop])) {
                $toInsert[$prop] = $data[$prop];
            }
        }
        parent::insert($toInsert);
    }
}