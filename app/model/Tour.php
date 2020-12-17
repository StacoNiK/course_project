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
}