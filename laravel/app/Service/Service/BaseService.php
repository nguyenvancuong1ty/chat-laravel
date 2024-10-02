<?php
namespace Service\Class;

use Illuminate\Database\Eloquent\Model;

abstract class BaseService {

    protected Model $model;

    public function __construct(Model $model) {
        $this->model = $model;
    }

    public function getAll() {
        return $this->model->all();
    }
    
    public function find() {
        return $this->model->find();
    }
}

?>