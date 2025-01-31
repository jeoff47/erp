<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Adjustment extends Controller
{
    public function index(): Response
    {
        return Inertia::render('adjustments/Adjustments');
    }
}
