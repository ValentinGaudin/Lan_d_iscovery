<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return ProjectResource::collection(Project::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create(): void
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     *
     * @return void
     */
    public function store(Request $request): void
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param string $id
     *
     * @return ProjectResource
     */
    public function show(string $id): ProjectResource
    {
        $post = Project::query()->findOrFail($id);

        return new ProjectResource($post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Project $project
     *
     * @return void
     */
    public function edit(Project $project): void
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Project $project
     *
     * @return void
     */
    public function update(Request $request, Project $project): void
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Project  $project
     *
     * @return void
     */
    public function destroy(Project $project): void
    {
        //
    }
}
