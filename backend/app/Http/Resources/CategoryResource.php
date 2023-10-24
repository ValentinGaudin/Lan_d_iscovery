<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * App\Models\CategoryCard
 *
 * @property int    $id
 * @property string $title
 */
class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     *
     * @return array{id: int, title: string}
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
        ];
    }
}
