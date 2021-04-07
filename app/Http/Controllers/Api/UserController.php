<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SessionUser;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function test()
    {
        return response()->json([
            'code' => 200,
            'message' => "test!"
        ], 200);
    }

    public function login(Request $request)
    {
        // xac thuc user co tai khoan
        $checkUser = $request->only('email', 'password');

        if (Auth::attempt($checkUser)) {
            $checkTokenExit = SessionUser::where('user_id', Auth::id())->first();
            if (empty($checkTokenExit)) {
                $userSession = SessionUser::create([
                    'token' => Str::random(60),
                    'refresh_token' => Str::random(60),
                    'token_expried' => date('Y-m-d H:i:s', strtotime('+30 day')),
                    'refresh_token_expried' => date('Y-m-d H:i:s', strtotime('+365 day')),
                    'user_id' => Auth::id(),
                ]);
            } else {
                $userSession = $checkTokenExit;
            }
            return response()->json([
                'code' => 200,
                'data' => $userSession,
                'check' => true
            ], 200);
        } else {
            return response()->json([
                'code' => 401,
                'message' => "username or pass khong dung!"
            ], 200);
        }
    }


    public function register(Request $request)
    {
        $role = 1;
        $checkEmail = User::where('email', $request->email)->first();
        if (($checkEmail)) {
            return response()->json([
                'code' => 404,
                'messinger' => 'email da ton tai'
            ], 201);
        }

        $userCreate = User::create([
            'full_name' => $request->name,
            'role' => $role,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'code' => 201,
            'data' => $userCreate,
            'messinger' => 'tao thanh cong'
        ], 201);
    }
}