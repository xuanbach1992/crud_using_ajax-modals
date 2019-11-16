@extends('home')
@section('content')
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th class="text-center" style="width: 15%" scope="col">STT</th>
            <th class="text-center" style="width: 45%" scope="col">Name</th>
            <th class="text-center" style="width: 15%" scope="col">Age</th>
            <th class="text-center" style="width: 25%" scope="col"></th>
        </tr>
        </thead>
        <tbody id="list-customers">
        @foreach($customers as $key=>$item)
            <tr class="customer-{{$item->id}}" >
                <th id="{{$item->id}}" class="text-center index" data-index="{{(!empty($key))?($key+1):1}}"
                    scope="row">{{(!empty($key))?($key+1):1}}</th>
                <td class="text-center nameCustomer-{{$item->id}}">{{$item->name}}</td>
                <td class="text-center ageCustomer-{{$item->id}}">{{$item->age}}</td>
                <td class="text-center">
                    <button class="btn btn-outline-warning edit" name="edit" data-id={{$item->id}} data-toggle="modal"
                            data-target="#exampleModal">Edit
                    </button>
                    <button class="btn btn-outline-danger delete" data-id={{$item->id}}>Delete</button>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
