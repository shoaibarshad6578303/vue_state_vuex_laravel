<?php

namespace App\Http\Controllers;

use App\Jobs\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderShipped;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $order=[];
        // Mail::to('shoaibarshad37@gmail.com')
        // ->queue(new OrderShipped($order));
        
        dispatch(new Email($order));

        return view('home');
        
    }
}
