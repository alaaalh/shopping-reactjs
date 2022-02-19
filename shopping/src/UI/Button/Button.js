import classes from './Button.module.css'

const ButtonUI = props => {
    return (
        <button className={classes.button}>{props.children}</button>
    )
}

export default ButtonUI