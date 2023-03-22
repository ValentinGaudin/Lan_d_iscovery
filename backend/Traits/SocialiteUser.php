<?php
namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse;

trait SocialiteUser
{
    /**
     * Redirect the user to the authentication page for the given provider.
     *
     * @param  string  $provider
     * @return RedirectResponse
     */
    public function redirectToProvider($provider): RedirectResponse
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from the provider.
     *
     * @param  string  $provider
     * @return JsonResponse
     */
    public function handleProviderCallback($provider): JsonResponse
    {
        $socialUser = Socialite::driver($provider)->stateless()->user();
        $user = $this->findOrCreateUser($provider, $socialUser);

        $token = $user->createToken('API Token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    /**
     * Find or create a user from the given provider user.
     *
     * @param string                            $provider
     * @param \Laravel\Socialite\Contracts\User $socialUser
     *
     * @return User
     */
    protected function findOrCreateUser(string $provider, \Laravel\Socialite\Contracts\User $socialUser): User
    {
        // Find the user in the database, or create a new one if not found
        // based on the social user's unique ID.
        return User::firstOrCreate([
            'provider'    => $provider,
            'provider_id' => $socialUser->getId(),
        ], [
            'name'  => $socialUser->getName(),
            'email' => $socialUser->getEmail(),
        ]);
    }
}
