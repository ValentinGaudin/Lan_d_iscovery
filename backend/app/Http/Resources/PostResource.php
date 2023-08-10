<?php

namespace App\Http\Resources;

use App\Models\User;
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
 * @property string     $title
 * @property ?string    $description
 * @property boolean    $is_active
 * @property Carbon     $created_at
 * @property Carbon     $updated_at
 * @property Carbon     $deleted_at
 * @property int        $author
 * @property Collection $users
 * @property Collection $categories
 */
class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     *
     * @return array<string, mixed>|Arrayable<string, mixed>|JsonSerializable
     */
    public function toArray(Request $request): array|JsonSerializable|Arrayable
    {
        return [
            'id'          => $this->id,
            'title'       => $this->title,
            'description' => $this->description,
            'is_active'   => $this->is_active,
            'author'      => new UserResource(User::query()->findOrFail($this->author)),
            'created_at'  => $this->created_at->translatedFormat('d M\, Y'),
            'updated_at'  => $this->updated_at->format('Y-m-d H:i'),
            'deleted_at'  => $this->updated_at->format('Y-m-d H:i'),
            'users'       => UserResource::collection($this->users),
            'categories'  => CategoryResource::collection($this->categories),
        ];
    }
}
