<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory()
            ->count(4)
            ->create();

        $posts = Post::all();

        $posts->each(function (Post $post) {
            $post->categories()->attach(Category::query()->find(rand(1, 20))?->getKey());
        });
    }
}
