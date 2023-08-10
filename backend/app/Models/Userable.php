<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

abstract class Userable extends Model
{
    /**
     * @return MorphOne<User>
     */
    protected function user(): MorphOne
    {
        return $this->morphOne(User::class, 'userable');
    }
}
