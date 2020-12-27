import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
]

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {
        controls.map(ctrl => {
          return <BuildControl 
          remove={() => props.removeIngredient(ctrl.type)} 
          add = {() => props.addIngredient(ctrl.type)} 
          disabled = {props.disabled[ctrl.type]}
          key ={ctrl.label} 
          label={ctrl.label} />
        })
      }
      <button disabled={!props.purchasable}
       className={classes.OrderButton}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
  )
}

export default BuildControls