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
}