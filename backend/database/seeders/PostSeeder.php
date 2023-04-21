<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        Post::factory()
            ->count(4)
            ->create();

        $posts = Post::all();

        $posts->each(function (Post $post) {
            $post->categories()->attach(Category::query()->find(rand(1, 20))->getKey());
            $post->users()->syncWithPivotValues(
                User::query()->first()->getKey(), [
                    'role' => 'RT'
                ]
            );
        });
    }
}
