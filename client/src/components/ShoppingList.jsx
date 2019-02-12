import React, {Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import uuid from "uuid"; 

class ShoppingList extends Component {
    state =  {
        items:[
            {id:uuid(), name:"This"},
            {id:uuid(), name:"is"},
            {id:uuid(), name:"an example of"},
            {id:uuid(), name:"MERN-based shopping list web"}
        
        ]
    }
    render (){
        const {items} = this.state;
        return (
        <Container>
            
            <ListGroup> 
           
              <TransitionGroup className="shopping-list">
                    {items.map(({ id,name })=>(
                        <CSSTransition key={id} timeout = {500} classNames = "fade" >
                            <ListGroupItem>   
                                <Button className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={()=>{
                                            this.setState( state => ({
                                                items: state.items.filter (item => item.id !== id)
                                            }));
                                        }}
                                        
                                >x
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
              </TransitionGroup>
            </ListGroup>
            <br />
            <Button color="dark"
                    style={{marginBottom: '2rem'}} 
                    onClick={ () => { 
                        const name = prompt ("Enter Item");
                         if (name){
                             this.setState ((state) => ({
                                 items : [...state.items,{id:uuid(), name}]
                             }));   
                         }
                    }} 
                >Add Item          
            </Button>
        </Container>
        )
    }
}

export default ShoppingList;    