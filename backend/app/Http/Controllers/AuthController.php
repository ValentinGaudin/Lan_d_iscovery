<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use ErrorException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Throwable;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        try {
            $validateUser = Validator::make(
                $request->all(),
                [
                    'email'    => 'required|email',
                    'password' => 'required|string',
                //                    'remember' => 'string'
                ]
            );

            if ($validateUser->fails()) {
                return response()->json([
                    'status'  => false,
                    'message' => 'validation error',
                    'errors'  => $validateUser->errors()
                ], 401);
            }
            if (!Auth::attempt($request->only(['email', 'password']))) {
                return response()->json([
                    'status'  => false,
                    'message' => 'Email & Password does not match with our record.'
                ], 401);
            }

            $user = User::query()->where('email', $request->input('email'))->firstOrFail();

            if (!$user instanceof User) {
                throw new ErrorException('There are no user with this email');
            }

            return response()->json([
                'status'  => true,
                'message' => 'User Logged In Successfully',
                'token'   => $user->createToken('auth:api')->plainTextToken,
                'user'    => new UserResource($user),
            ], 201);
        } catch (Throwable $th) {
            return response()->json([
                'status'  => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function register(Request $request): JsonResponse
    {
        try {
            $validateUser = Validator::make(
                $request->all(),
                [
                    'name'     => 'required|string',
                    'email'    => 'required|email|unique:users,email',
                    'password' => 'required|string',
                ]
            );

            if ($validateUser->fails()) {
                return response()->json([
                    'status'  => false,
                    'message' => 'validation error',
                    'errors'  => $validateUser->errors()
                ], 401);
            }

            $user = User::query()->create([
                'name'     => $request->input('name'),
                'email'    => $request->input('email'),
                'password' => Hash::make($request->string('password')),
            ]);

            if (!$user instanceof User) {
                throw new ErrorException('There are no user with this email');
            }

            return response()->json([
                'status'  => true,
                'message' => 'User Registered Successfully',
                'token'   => $user->createToken('auth:api')->plainTextToken,
                'user'    => new UserResource($user),
            ], 201);
        } catch (Throwable $th) {
            return response()->json([
                'status'  => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function refresh(Request $request): JsonResponse
    {
        if ($request->user()) {
            $user = $request->user();

            $user->tokens()->delete();
            $token = $user->createToken('auth:api')->plainTextToken;

            return response()->json(['access_token' => $token]);
        }

        return response()->json(['message' => 'Unauthenticated'], 401);
    }

    public function user(Request $request): JsonResponse
    {
        if ($request->user()) {
            return response()->json(new UserResource($request->user()));
        }
        return response()->json(null, 401);
    }
}
