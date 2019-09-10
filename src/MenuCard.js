import React from 'react'
import './MenuCard.css'
import TitleEdit from './TitleEdit';
import DescriptionEdit from './DescriptionEdit';
import PriceEdit from './PriceEdit';

export default class MenuCard extends React.Component {

  state = {
    items: [
      {
        id: '1',
        dish: 'tacos',
        description: 'Lollipop cookie brownie tootsie roll souffle candy gummibears',
        image: 'https://i.imgur.com/2F5aOCt.jpg?1',
        price: '$9',
        edit: false
      }
    ]
  }

  handleChange = (id) => {
    console.log('sdsdfsdf')
    const {items} = this.state

    this.setState({
      items: items.map(item => {
        if( item.id === id){
          return { ...item, edit: !item.edit }
        } else {
          return item
        }
      })
    })
  }

  handleSubmit = (targetItem, event) =>{
    event.preventDefault()
    const {items} = this.state
    this.setState ({
      items: items.map(item => {
        if (item.id === targetItem.id) {
          return {...item, edit: false}
        } else {
          return item
        }
      })
    })
  }

  setValue = (targetItem, e) => {
    const { items } = this.state

    this.setState({
      items: items.map(item => {
        if (item.id === targetItem.id) {
          return {...item, dish: e.target.value }
        } else {
          return item
        }
      })
    })
  }

  setDescription = (targetItem, e) => {
    const { items } = this.state
    console.log(targetItem)
    this.setState({
      items: items.map(item => {
        if (item.id === targetItem.id) {
          return {...item, description: e.target.value }
        } else {
          return item
        }
      })
    })
  }

  setPrice = (targetItem, e) => {
    const { items } = this.state
    this.setState({
      items: items.map(item => {
        if (item.id === targetItem.id) {
          return {...item, price: e.target.value }
        } else {
          return item
        }
      })
    })
  }

  render(){
    const { items } = this.state

    return (
      <section className="menu">
        {items.map(item =>
          <div className="menu-card">
            <TitleEdit menuItem={item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} setValue={this.setValue} />
            {/* <div className="img-desc-wrapper"> */}
              {/* <img src={item.image} alt=""/> */}
              <div className="price-desc">
                <DescriptionEdit menuItem={item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} setDescription={this.setDescription}/>
                <PriceEdit menuItem={item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} setPrice={this.setPrice}/>
              </div>
            {/* </div> */}
          </div>
        )}
      </section>
    )
  }
}