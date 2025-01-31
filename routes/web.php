<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
}); 


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/BaseUnit', function () {
    return Inertia::render('products/BaseUnit'); 
})->middleware(['auth', 'verified'])->name('BaseUnit');

Route::get('/Brands', function () {
    return Inertia::render('Pages/products/Adjuments'); 
});
Route::get('/Currencies', function () {
    return Inertia::render('Pages/currencies/Currencies'); 
});
Route::get('/Customers', function () {
    return Inertia::render('Pages/people/Customers'); 
});
Route::get('/Expenses', function () {
    return Inertia::render('Pages/expenses/Expenses'); 
});
Route::get('/ExpensesCategories', function () {
    return Inertia::render('Pages/expenses/ExpensesCategories'); 
});
Route::get('/PrindBarCode', function () {
    return Inertia::render('Pages/products/PrintBarCode'); 
});
Route::get('/ProductsCategories', function () {
    return Inertia::render('Pages/products/ProductsCategories'); 
});
Route::get('/Products', function () {
    return Inertia::render('Pages/products/Products'); 
});
Route::get('/Purchases', function () {
    return Inertia::render('Pages/purchases/Purchases'); 
});
Route::get('/PurchasesReturn', function () {
    return Inertia::render('Pages/products/PurchasesReturn'); 
});
Route::get('/Quotation', function () {
    return Inertia::render('Pages/qoutation/Quotations'); 
});
Route::get('/Reports', function () {
    return Inertia::render('Pages/report/Reports'); 
});
Route::get('/RolesAndPermission', function () {
    return Inertia::render('Pages/rolesAndPremission/RolesAndPermission'); 
});
Route::get('/Sales', function () {
    return Inertia::render('Pages/sales/Sales'); 
});
Route::get('/SalesReturn', function () {
    return Inertia::render('Pages/sales/SalesReturn'); 
});
Route::get('/Settings', function () {
    return Inertia::render('Pages/settings/Settings'); 
});
Route::get('/Suppliers', function () {
    return Inertia::render('Pages/people/Suppliers'); 
});
Route::get('/Transfers', function () {
    return Inertia::render('Pages/transfers/Transfers'); 
});
Route::get('/Units', function () {
    return Inertia::render('Pages/products/Units'); 
});
Route::get('/User', function () {
    return Inertia::render('Pages/people/User'); 
});
Route::get('/Variation', function () {
    return Inertia::render('Pages/products/Variation'); 
});
Route::get('/Warehouse', function () {
    return Inertia::render('Pages/warehouse/Warehouse'); 
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Products
    
});

require __DIR__.'/auth.php';
