<?php

use Illuminate\Database\Seeder;

class CustomerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $customer = new \App\Customer();
        $customer->id = 1;
        $customer->name = "bach";
        $customer->age = "27";
        $customer->save();

        $customer = new \App\Customer();
        $customer->id = 2;
        $customer->name = "an";
        $customer->age = "18";
        $customer->save();
    }
}
