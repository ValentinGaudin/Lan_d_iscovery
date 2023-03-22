<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

/**
 * App\Models\User
 *
 * @property int     $id
 * @property string  $title
 * @property ?string $description
 * @property boolean $is_active
 * @property Carbon  $created_at
 */
class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array<string, int|string|Carbon>|Arrayable<string, int|string|Carbon>|JsonSerializable
     */
    public function toArray($request): array|JsonSerializable|Arrayable
    {
        return [
            'id'          => $this->id,
            'title'       => $this->title,
            'description' => $this->description,
            'is_active'   => $this->is_active,
            'created_at'  => $this->created_at->format('Y-m-d'),
        ];
    }
}
