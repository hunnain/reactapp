import React, { Component } from 'react';

class FormsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            users: [],
            gender: {
                Male: false,
                Female: false
            }
        }


        this.submitUser = this.submitUser.bind(this);
        this.userNameHandler = this.userNameHandler.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        
        
    }

    submitUser() {
        // console.log('submituser');
        // let usersClone = this.state.users
        // usersClone.push(this.state.userName);

        // this.setState({
        //     users: usersClone,
        //     userName: ''
        // })

        console.log(this.state.gender)

    }
    userNameHandler(ev) {
        this.setState({
            userName: ev.target.value
        })
    }


    radioHandler(ev){
        // console.log(ev.target.value)
        // let genderClone = this.state.gender
        // for( var key in genderClone){
        //     // console.log(key)
        //     key = false;
        // }

        // let genderClone = {}
        // genderClone[ev.target.value]= ev.target.checked
        // // console.log(genderClone)
        // this.setState({
        //     gender: genderClone
        // })


    }
    render() {
        return (
            <div>



                {/* Gender:  <br/>
                <label>Male: <input type='radio' name='gender' value='Male' onChange={this.radioHandler} /></label>
                <br/>
                <label>Female: <input type='radio' name='gender' value='Female' onChange={this.radioHandler} /></label>

                <button onClick={this.submitUser}>Add User</button> */}


                <input type='text' placeholder='user name' value={this.state.userName} onChange={this.userNameHandler}/>
                <button onClick={this.submitUser}>Add User</button>
               {
                   this.state.users.map((value, indx)=>{
                    return(
                        <h1 key={indx}>
                            Hello {value}
                        </h1>
                    )
                   })
               }

            </div>
        )
    }

}

export default FormsComponent;