<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;
use Ramsey\Collection\Collection;

/**
 * App\Models\User
 *
 * @property int        $id
 * @property string     $slug
 * @property string     $title
 * @property ?string    $description
 * @property bool    $is_active
 * @property bool    $is_featured
 * @property bool    $is_premium
 * @property bool    $is_sponsored
 * @property Collection $categories
 * @property Carbon     $created_at
 * @property Carbon     $updated_at
 * @property ?Carbon    $deleted_at
 */
class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     *
     * @return array<string, mixed>|Arrayable<string, mixed>|JsonSerializable
     */
    public function toArray(Request $request): array|JsonSerializable|Arrayable
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'description' => $this->description,
            'is_active' => $this->is_active,
            'is_featured' => $this->is_featured,
            'is_premium' => $this->is_premium,
            'is_sponsored' => $this->is_sponsored,
            'categories' => CategoryResource::collection($this->categories),
            'created_at' => $this->created_at->translatedFormat('d M\, Y'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i'),
            'deleted_at' => $this->deleted_at?->format('Y-m-d H:i'),
        ];
    }
}
