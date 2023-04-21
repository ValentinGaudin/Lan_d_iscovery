<?php

namespace App\Http\Resources;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

/**
 * App\Models\User
 *
 * @property int        $id
 * @property string     $content
 * @property int        $user_id
 * @property Carbon     $created_at
 * @property Carbon     $updated_at
 */
class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     *
     * @return array<string, int|string|Carbon>|Arrayable<string, int|string|Carbon>|JsonSerializable
     */
    public function toArray(Request $request): array|JsonSerializable|Arrayable
    {
        return [
            'id'          => $this->id,
            'content'     => $this->content,
            'user'        => new UserResource(User::query()->findOrFail($this->user_id)),
            'created_at'  => $this->created_at->translatedFormat('Y-m-d'),
            'updated_at'  => $this->updated_at->format('Y-m-d H:i'),
        ];
    }
}
