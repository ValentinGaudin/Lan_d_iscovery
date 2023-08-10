<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return PostResource::collection(Post::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StorePostRequest $request
     * @return void
     */
    public function store(StorePostRequest $request): void
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param string $id
     * @return PostResource
     */
    public function show(string $id): PostResource
    {
        $post = Post::query()->findOrFail($id);

        return new PostResource($post);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     *
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function search(Request $request): JsonResponse|AnonymousResourceCollection
    {
        $validator = Validator::make($request->all(), [
            'search' => 'required|string|min:3'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $search = $request->input('search');
        $post = Post::query()->where('title', 'like', '%' . $search . '%')->get();

        return PostResource::collection($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdatePostRequest $request
     * @param Post              $post
     * @return void
     */
    public function update(UpdatePostRequest $request, Post $post): void
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     * @return void
     */
    public function destroy(Post $post): void
    {
        //
    }
}
