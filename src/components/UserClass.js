import React from "react";
// extends React.Component make react to know this is class component
class UserClass extends React.Component{

    constructor(props){
        super(props);

        // object of states if there is multiple states->
        this.state = {
            count: 0,  
            userInfo:{
                name: "null",
                location: " Default",
               
            },
        }

        
    }
  
    async componentDidMount() {
            console.log("child componentDidMount");
            // Api call
         const data = await fetch("https://api.github.com/users/khushi0103");
         const json = await data.json()

         this.setState({
            userInfo:json,
         })
         console.log(json);

        }

    componentDidUpdate(){
        console.log("call after the data is updated")
    }

    componentWillUnmount(){
    //    When a component is removed from the DOM 
    // (for example, when navigating to another page and the current component is no longer displayed), it is called unmounting.
        console.log("call after component is unmount")
    }

    render(){
        const {count } = this.state;

        const {login , id , avatar_url} = this.state.userInfo;
        return(
             <div className = "user-card">
            {/* <h1> Count: {count}</h1> */}

             {/* this.setState is like a object contains all states updation */}
            {/* <button onClick={() => {
                this.setState({
                    count : this.state.count +1,
                });
                console.log("button clicked")
            }}>Increase Count</button> */}


            <img src ={avatar_url}/>
            <h2>Name: {login}</h2>
            <h3>Location: {id}</h3>
            <h4>Contact: AKK@gmail.com</h4>

        </div>
        );
    }
}

export default UserClass;

/*** 
 *     Never compare mount cycle method with functional component ----->
 *     
 *     THIS IS MOUNTING CYCLE --->
 * 
 * At initial constructor is called with dummy data 
 * then render hoga ui with dummy data
 * <HTML> has dummy data for few milliseconds
 * then componentDidMount chlega api call hogi 
 * then we set this.setState() -> State variable is updated
 * 
 *      NOW UPDATE CYCLE BEGINS -->
 * 
 *   again render() with api data
 *   now html loaded with new api data 
 *   then call componentDidUpdate()
 */