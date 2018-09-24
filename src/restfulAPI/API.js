import React from "react";

export function getListFromAPI(token,getListFromBackAPI) {

    return fetch('/todos',{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => {
        if (response.ok){
            return response.json();
        }
    }).then( data  => {
        if (data !== undefined) {
            getListFromBackAPI(data.content);
        }
    }).catch(error => {
        console.error('Error:', error)
    });
}


export function deleteListFromAPIById(token,todoId,updateTodoInReduxFunc) {

    return fetch('/todos/'+todoId,{
        method:'DELETE',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => {
        if (response.ok){
            getListFromAPI(token,updateTodoInReduxFunc);
            return response.json();
        }
    }).catch(error => {
        console.error('Error:', error)
    });
}

export function addTodoFromAPI(token,todoObject,updateTodoInReduxFunc) {

    return fetch('/todos',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
        body: JSON.stringify(todoObject)
    }).then(response => {
        if (response.ok){
            getListFromAPI(token,updateTodoInReduxFunc);
            return response.json();
        }
    }).catch(error => {
        console.error('Error:', error)
    });
}


export function editTodoFromAPI(token,todoObject,updateTodoInReduxFunc) {

    return fetch('/todos',{
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
        body: JSON.stringify(todoObject)
    }).then(response => {
        if (response.ok){
            getListFromAPI(token,updateTodoInReduxFunc);
        }
    }).catch(error => {
        console.error('Error:', error)
    });
}


export function getTagListFromAPI(token,getTagListFromBackAPI) {

    return fetch('/tags',{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => {
        if (response.ok){
            return response.json();
        }
    }).then( data  => {
        if (data !== undefined) {
            getTagListFromBackAPI(data.content);
        }
    }).catch(error => {
        console.error('Error:', error)
    });
}
