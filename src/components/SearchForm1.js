import React, { Component } from 'react'
import {db} from '../firebase.js'
import SearchForm2 from './SearchForm2'
class SearchForm1 extends Component {

    constructor(props) {
        
        super(props)
    
        this.state = ({
             message: '',
             list: []
        })

        //this.handleTableChange=this.handleTableChange.bind(this)
        //this.handleSearchChange=this.handleSearchChange.bind(this)
    }


    handleSearchChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

     hadleTableChage=(m2)=> {
        console.log(m2)
        this.setState({
            list: [...this.state.list, m2]
          });
    }

  
    handleSubmit = (event) => {
        var data1=[],c=0,m=0
        const m1 = this.state.message


        db.collection("Medicines")
        .where("Name", "==", m1)
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data().shops);
        //console.log(data[0]);
        m=data[0].length
        //this.hadleTableChage(data[0]);
        console.log("from Medicines Collection the shops:")


        data[0].forEach(function(name){
                            var docRef = db.collection("Shops").doc(name);

                docRef.get().then(function(doc) {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        hadleTableChage(doc.data())
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
        })
        }
        );
        
        // if(m===c)
        // {
        //     console.log(data1)
        //     //this.handleTableChange(data1)
        // }
        event.preventDefault()
        
    }
    

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Search</label>
                <input type="text" value={this.state.message} onChange={this.handleSearchChange}></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                
            </form>
            {/* <div>
                <SearchForm2 name={this.state.message1}></SearchForm2>
            </div> */}
            </div>
        )
    }
}

export default SearchForm1
