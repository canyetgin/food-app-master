import classes from './Header.module.css';
import img from '../../assests/meals.jpg';
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={img} alt='meals' />
      </div>
    </>
  );
};

export default Header;
