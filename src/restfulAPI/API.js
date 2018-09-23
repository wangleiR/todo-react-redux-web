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


export function deleteListFromAPIById(token,todoId,deleteInReduxFunc) {

    return fetch('/todos/'+todoId,{
        method:'DELETE',
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':token,
        },
    }).then(response => {
        if (response.ok){
            deleteInReduxFunc(todoId);
            return response.json();
        }
    }).catch(error => {
        console.error('Error:', error)
    });
}
