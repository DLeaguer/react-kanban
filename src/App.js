import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/db';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{
        id: 1,
        description: 'Make Better Styles.',
        priority: 'Medium',
        by: 'Jon',
        to: 'Renee'
      },
      {
        id: 2,
        description: 'Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
        priority: 'Medium',
        by: 'Jon',
        to: 'Renee'
      }]
    }
  }

  // addItemToInventory = (item) => {
  //   addItemToFakeXHR(item)
  //     .then( items => {
  //       if (items) {
  //         this.setState({ items })
  //       }
  //     })
  // }

  // componentDidMount() {
  //   getItemsFromFakeXHR()
  //       this.setState({ items })
    //     .then( items => {
  //     }, function() {
  //       console.log('this.state updated', this.state)
  //     })
  // }

  render() {

    // console.log('this.state.count', this.state.count)
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">KANBAN</div>
          <div className="App-task">+ NEW TASK</div>
        </header>
        <div className="category">
          <div className='column'>IN_QUEUE</div>
          <div className='columncenter'>IN_PROGRESS</div>
          <div className='column'>DONE</div>
        </div>
        {/* <div className='category'> */}
          <div className='items'>
            {this.state.items.map( item => 
            <div className='card'>
              <div className='infostrong'> 
                {item.description} 
              </div>
              <div className='info'> 
                Priority: {item.priority} 
              </div> 
              <div className='info'> 
                Assigned by: {item.by} 
              </div>
              <div className='emp'>
                <div className='edit'> Edit </div>
                <div className='edit'> Delete </div>
                <div className='worker'> {item.to} </div> 
              </div>
            </div>)}  
          </div>
        {/* </div> */}
        {/* <ItemList items={this.state.items}/>
        <ItemForm addItem={this.addItemToInventory}/> */}
      </div>
    )
  }
}

// function TitleList(props) {
//   return props.titles.map( title => <Title key={title.id} name={title.title}/>)
// }

// function Title(props) {
//   return  <div>{props.name}</div>
// }




// function ItemList(props) {
//   return props.items.map( item => <Item key={item.id} name={item.description} />)
// }

// function Item(props) {
//   return <div >{props.name}</div>
// }

// class ItemForm extends Component {
//   constructor(props) {
//     super(props)
//     this.state ={
//       decription: null,
//       priority: null,
//       by: null
//     }
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('SUBMITTED!!!!', this.state)
//     this.props.addItem(this.state)
//   }

//   handleChange = (e) => {
//     e.preventDefault()

//     const { name, value } = e.target
//     this.setState({
//       [name] : value
//     })
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input onClick={this.Edit} type="text" value="Edit"/>
//         <input onClick={this.Delete} type="text" value="Delete"/> 
//         <label> Description:
//           <input onChange={this.handleChange} type="text" name="description"/>
//         </label>
//         <label> Priority:
//           <input onChange={this.handleChange} type="text" name="priority"/>
//         </label>
//         <label> Assigned by:
//           <input onChange={this.handleChange} type="text" name="by"/>
//         </label>
//         <input type="submit"/>
//       </form>
//     )
//   }

// }






export default App;