<?php

namespace app\model;

class Person extends BaseModel
{
    public static $table = "persons";

    public static $properties = [
        'first_name',
        'last_name',
        'passport_number',
        'person_id',
        'sex',
        'birthday'
    ];
}