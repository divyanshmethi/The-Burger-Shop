import React, {Component} from 'react'

import Auxillary from '../hoc/Auxillary'
import Burger from '../../src/components/Burger/Burger'
import BuildControls from '../../src/components/Burger/BuildControls/BuildControls'

const PRICE = {
  salad: 5,
  cheese: 10,
  meat: 25,
  bacon: 20
}

class BurgerBuilder extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 20,
      purchasable: false
    }
    this.addIngredientHandler = this.addIngredientHandler.bind(this)
    this.removeIngredientHandler = this.removeIngredientHandler.bind(this)
  }

  updatePurchaseState(ingredients)
  {
    const total = Object.values(ingredients).reduce((sum,ele) => {
      return sum + ele
    },0)
    console.log("Sum: " + total)
    return total
  }

  addIngredientHandler(type)
  {
    const prevCount = this.state.ingredients[type]
    const updatedCount = prevCount + 1
    const updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount
    const initialPrice = this.state.totalPrice
    const priceUpdated = initialPrice + PRICE[type]
    const total = this.updatePurchaseState(updatedIngredient)
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: priceUpdated,
      purchasable: total > 0
    })
  }

  removeIngredientHandler(type)
  {
    const prevCount = this.state.ingredients[type]
    if(prevCount <= 0)
      return
    const updatedCount = prevCount - 1
    const updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount
    const initialPrice = this.state.totalPrice
    const priceUpdated = initialPrice - PRICE[type]
    const total = this.updatePurchaseState(updatedIngredient)
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: priceUpdated,
      purchasable: total > 0
    })
  }

  render()
  {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo)
    {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (<Auxillary>
      <Burger ingredients = {this.state.ingredients} />
      <BuildControls 
      addIngredient = {this.addIngredientHandler} 
      removeIngredient = {this.removeIngredientHandler} 
      disabled = {disabledInfo}
      price = {this.state.totalPrice}
      purchasable = {this.state.purchasable}
      />
    </Auxillary>)
  }
}

export default BurgerBuilder