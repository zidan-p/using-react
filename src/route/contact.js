//ini adalah halaman yng berisi dafatar contact

import React from 'react';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users : [],
            isLoading : true
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({user: res, isLoading: false}));
    }

    render(){
        let persons = this.state.users;

        return(
            <div class="container mt-3">
            <div class="row">
                {persons.forEach(person => {
                return(
                    <div class="col-md-8">
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                <h5 class="card-title">{person.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{person.adsress.zipcode}</h6>
                                <p class="card-text">{person.email}</p>
                                <a href="/contact/edit/<%=contact.nama%>" class="btn btn-primary"><i class="bi bi-pencil"></i> detail</a>
                                </div>
                            </div>
                    </div>
                )
                })}
            </div>
        </div>
        )
    }
}

export default Contact;