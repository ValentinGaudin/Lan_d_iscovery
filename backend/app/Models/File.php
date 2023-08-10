<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'file',
        'file_type',
        'file_name',
        'file_alt',
    ];

    /**
     * @return BelongsTo<Post, File>
     */
    public function posts(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * @return BelongsTo<Category, File>
     */
    public function categories(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
