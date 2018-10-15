import React from "react";

//done
export function register(username,password){
    return fetch("/api/users/register",{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({"name":username,"password":password})
    });
};


//done
export function login(username,password) {
    return fetch('/api/users/login',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({"name":username,"password":password})
    }).then(response => response.json());
};

//done
export function getListFromAPI(token) {

    return fetch('/api/todos',{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => response.json());
}

//done
export function deleteListFromAPIById(token,todoId) {

    return fetch('/api/todos/'+todoId,{
        method:'DELETE',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => response.json());
}

//done
export function addTodoFromAPI(token,todoObject) {

    return fetch('/api/todos',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
        body: JSON.stringify(todoObject)
    }).then(response => response.json());
}

//done
export function editTodoFromAPI(token,todoObject) {

    return fetch('/api/todos',{
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
        body: JSON.stringify(todoObject),
    }).then(response => response.json());
}

//done
export function getTagListFromAPI(token) {

    return fetch('/api/tags',{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => response.json());
}


//done
export function searchTodoListFromAPIAdvance(token,queryObject) {

    return fetch('/api/todos/search?searchNameOrTagsValue='+queryObject.searchNameOrTagsValue
        +'&from='+queryObject.beginDate+'&to='+queryObject.endDate,{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => response.json());
}

//done
export function sortTodoListFromAPI(token,sortParamObject) {

    return fetch('/api/todos?sort='+sortParamObject.sort+','+sortParamObject.direction,{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => response.json());
}
