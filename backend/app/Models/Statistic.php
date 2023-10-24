<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Statistic extends Model
{
    use HasFactory;

    protected $fillable = [
        'statistic_id',
        'statistic_class',
    ];

    protected $casts = [
        'statistic_id' => 'integer',
        'statistic_class' => 'string',
    ];

    /**
     * Get the parent commentable model (post or video).
     *
     * @return MorphTo<Model, Statistic>
     */
    public function statistical(): MorphTo
    {
        return $this->morphTo();
    }
}
