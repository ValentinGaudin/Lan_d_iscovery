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
 * @property int    $id
 * @property string $civility
 * @property string $first_name
 * @property string $last_name
 * @property string $full_name
 * @property string $email
 * @property Carbon $created_at
 */
class UserResource extends JsonResource
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
            'id'         => $this->id,
            'first_name' => $this->first_name,
            'last_name'  => $this->last_name,
            'full_name'  => $this->fullName,
            'email'      => $this->email,
            'created_at' => $this->created_at,
        ];
    }
}
