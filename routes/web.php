<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::prefix("customers")->group(function () {
    Route::get('/', "CustomerController@show")->name('customers.list');
    Route::get("/search", "CustomerController@search")->name("customer.search");
    Route::get("/{id}/delete", "CustomerController@destroy")->name("customer.search");
    Route::post("/{id}/edit", "CustomerController@update")->name("customer.edit");
    Route::post("/create", "CustomerController@create")->name("customer.create");

});
