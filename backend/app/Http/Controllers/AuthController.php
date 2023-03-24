<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Throwable;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $validateUser = Validator::make(
                $request->all(), [
                    'email'    => 'required|email',
                    'password' => 'required|string'
                ]
            );

            if ($validateUser->fails()) {
                return $this->response()->json([
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

            $user = User::where('email', $request->input('email'))->firstOrFail();

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

    public function logout(Request $request)
    {
        Auth::logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh(Request $request)
    {
        $request->user()->tokens()->delete();

        $token = $request->user()->createToken('auth:api')->plainTextToken;

        return response()->json(['access_token' => $token]);
    }

    public function user(Request $request)
    {
        $user = User::query()->findOrFail($request->user()->getKey());

        return response()->json(new UserResource($user));
    }
}
