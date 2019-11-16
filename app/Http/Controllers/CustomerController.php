<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    function show()
    {
        $customers = Customer::all();
        return view('customer.list', compact('customers'));
    }

    function search(Request $request)
    {
        if ($request->ajax()) {
            $customers = Customer::where('name', "like", "%$request->keyword%")->get();
            return response()->json($customers);
        }
    }

    function destroy($id)
    {
        $customer = Customer::findOrFail($id);
        $customer->delete();
        return response()->json([
            'message' => 'xoa thanh cong!'
        ]);
    }

    function create(Request $request)
    {
        if ($request->ajax()) {
            $customer = new Customer();
            $customer->name = $request->nameCustomer;
            $customer->age = $request->ageCustomer;
            $customer->save();

            return response()->json($customer);
        }
    }
    function update(Request $request, $id)
    {
        if ($request->ajax()) {
            $customer = Customer::findOrFail($id);
            $customer->name = $request->nameCustomer;
            $customer->age = $request->ageCustomer;
            $customer->save();
            return response()->json($customer);
        }
    }
}
