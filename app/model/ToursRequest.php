<?php

namespace app\model;

class ToursRequest extends BaseModel
{
    public static $table = "tours_requests";

    public static function get($offer = 0, $count = 100000)
    {
        $table = static::getTable();
        $queryString = "SELECT r.id, r.cost, p.id as person_id, p.first_name, p.last_name, t.id as tour_id, t.name as tour_name  FROM {$table} as r, persons as p, tours as t WHERE r.person_id = p.id AND r.tour_id = t.id";
        $result = static::getDbConnection()->query($queryString);
        //  var_dump($result);
        return $result->fetch_all(MYSQLI_ASSOC);
    }
}