<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('file');
            $table->string('file_type');
            $table->string('file_name');
            $table->string('file_alt');
            $table->foreignId('category_id')->nullable()->constrained('categories');
            $table->foreignId('post_id')->nullable()->constrained('posts');
            $table->unique(['file', 'category_id']);
            $table->unique(['file', 'post_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files');
    }
};
