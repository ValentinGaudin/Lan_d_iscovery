<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        Project::factory()
            ->count(4)
            ->create();

        $projects = Project::all();

        $projects->each(function (Project $project) {
            $project->categories()->attach(Category::query()->find(rand(1, 20))->getKey());
            $project->users()->syncWithPivotValues(
                User::query()->first()->getKey(), [
                    'role' => 'RT'
                ]
            );
        });
    }
}
