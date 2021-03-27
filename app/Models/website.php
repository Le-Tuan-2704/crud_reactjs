<?php
 
namespace App;
 
use Illuminate\Database\Eloquent\Model;
 
class Product extends Model
{
    protected $table = 'website';
    protected $fillable = [ 
        'name',
        'url',
        'image'
    ];
}