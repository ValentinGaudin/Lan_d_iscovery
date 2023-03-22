<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     *
     * @return void
     */
    public function viewAny(User $user): void
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  User $user
     * @param Post  $post
     *
     * @return void
     */
    public function view(User $user, Post $post): void
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     *
     * @return void
     */
    public function create(User $user): void
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  User $user
     * @param Post              $post
     *
     * @return void
     */
    public function update(User $user, Post $post): void
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  User  $user
     * @param Post  $post
     *
     * @return void
     */
    public function delete(User $user, Post $post): void
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  User $user
     * @param  Post             $post
     *
     * @return void
     */
    public function restore(User $user, Post $post): void
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  User $user
     * @param  Post             $post
     *
     * @return void
     */
    public function forceDelete(User $user, Post $post): void
    {
        //
    }
}
