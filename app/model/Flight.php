<?php

namespace app\model;

class Flight extends BaseModel
{
    public static $properties = [
        'from_airport',
        'to_airport',
        'date_start',
        'date_end',
        'cost'
    ];

    public static $table = 'flights';

    public static function insert($data)
    {
        $toInsert = [];
        foreach (static::$properties as $prop) {
            if (isset($data[$prop])) {
                $toInsert[$prop] = $data[$prop];
            }
        }
        parent::insert($data);
    }
}