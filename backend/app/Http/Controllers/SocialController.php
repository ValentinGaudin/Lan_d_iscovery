<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse;

class SocialController extends Controller
{
    /**
     * Redirect the user to the provider authentication page.
     *
     * @param string $provider
     *
     * @return \Illuminate\Http\RedirectResponse|RedirectResponse
     */
    public function redirectToProvider(string $provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from the provider.
     *
     * @param string $provider
     *
     * @return JsonResponse
     */
    public function handleProviderCallback(string $provider)
    {
        $user = Socialite::driver($provider)->user();

        // Do something with the user data, such as log in or register the user
        // ...

        // Return a JSON response with the user data
        return response()->json($user);
    }
}
