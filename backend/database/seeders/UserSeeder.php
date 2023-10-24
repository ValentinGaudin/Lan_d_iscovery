<?php

namespace Database\Seeders;

use App\Models\Creator;
use App\Models\Member;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //        User::factory()->for(Member::factory(), 'userable')->afterCreating(function (User $user) {
        //            $user->update([
        //                'email' => 'member@thelabs.localhost',
        //            ]);
        //        })->count(1)->create();

        //        User::factory()->for(Creator::factory(), 'userable')->count(1)->create();

    }
}
