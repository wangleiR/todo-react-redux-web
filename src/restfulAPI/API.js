import React from "react";

//done
export function register(username,password){
    return fetch("/register",{
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
    return fetch('/login',{
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

    return fetch('/todos',{
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

    return fetch('/todos/'+todoId,{
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

    return fetch('/todos',{
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

    return fetch('/todos',{
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

    return fetch('/tags',{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => response.json());
}


//done
export function searchTodoListFromAPI(token,queryObject) {

    return fetch('/todos/search?searchNameOrTagsValue='+queryObject.searchNameOrTagsValue,{
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

    return fetch('/todos?sort='+sortParamObject.sort+','+sortParamObject.direction,{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => response.json());
}
