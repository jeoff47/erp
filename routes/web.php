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
    return Inertia::render('products/Brands'); 
})->middleware(['auth', 'verified'])->name('Brands');

Route::get('/Currencies', function () {
    return Inertia::render('currencies/Currencies'); 
})->middleware(['auth', 'verified'])->name('Currencies');

Route::get('/Customers', function () {
    return Inertia::render('people/Customers'); 
})->middleware(['auth', 'verified'])->name('Customers');

Route::get('/Expenses', function () {
    return Inertia::render('expenses/Expenses'); 
})->middleware(['auth', 'verified'])->name('Expenses');

Route::get('/ExpensesCategories', function () {
    return Inertia::render('expenses/ExpensesCategories'); 
})->middleware(['auth', 'verified'])->name('ExpensesCategories');

Route::get('/PrintBarCode', function () {
    return Inertia::render('products/PrintBarCode'); 
})->middleware(['auth', 'verified'])->name('PrintBarCode');

Route::get('/ProductCategories', function () {
    return Inertia::render('products/ProductCategories'); 
})->middleware(['auth', 'verified'])->name('ProductCategories');

Route::get('/Products', function () {
    return Inertia::render('products/Products'); 
})->middleware(['auth', 'verified'])->name('Products');

Route::get('/Purchases', function () {
    return Inertia::render('purchases/Purchases'); 
})->middleware(['auth', 'verified'])->name('Purchases');

Route::get('/PurchasesReturn', function () {
    return Inertia::render('products/PurchasesReturn'); 
})->middleware(['auth', 'verified'])->name('PurchasesReturn');

Route::get('/Quotation', function () {
    return Inertia::render('qoutation/Quotations'); 
})->middleware(['auth', 'verified'])->name('Quotations');

Route::get('/Reports', function () {
    return Inertia::render('eport/Reports'); 
})->middleware(['auth', 'verified'])->name('Reports');

Route::get('/RolesAndPermission', function () {
    return Inertia::render('rolesAndPremission/RolesAndPermission'); 
})->middleware(['auth', 'verified'])->name('RolesAndPermission');

Route::get('/Sales', function () {
    return Inertia::render('sales/Sales'); 
})->middleware(['auth', 'verified'])->name('Sales');

Route::get('/SalesReturn', function () {
    return Inertia::render('sales/SalesReturn'); 
})->middleware(['auth', 'verified'])->name('SalesReturn');

Route::get('/Settings', function () {
    return Inertia::render('settings/Settings'); 
})->middleware(['auth', 'verified'])->name('Settings');

Route::get('/Suppliers', function () {
    return Inertia::render('people/Suppliers'); 
})->middleware(['auth', 'verified'])->name('Suppliers');

Route::get('/Transfers', function () {
    return Inertia::render('transfers/Transfers'); 
})->middleware(['auth', 'verified'])->name('Transfers');

Route::get('/Units', function () {
    return Inertia::render('products/Units'); 
})->middleware(['auth', 'verified'])->name('Units');

Route::get('/User', function () {
    return Inertia::render('people/User'); 
})->middleware(['auth', 'verified'])->name('User');

Route::get('/Variation', function () {
    return Inertia::render('products/Variation'); 
})->middleware(['auth', 'verified'])->name('Variation');

Route::get('/Warehouse', function () {
    return Inertia::render('warehouse/Warehouse'); 
})->middleware(['auth', 'verified'])->name('Warehouse');
;

Route::get('/Adjustments', function () {
    return Inertia::render('adjustments/Adjustments'); 
})->middleware(['auth', 'verified'])->name('Adjustment');
;





Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Products
    
});

require __DIR__.'/auth.php';
