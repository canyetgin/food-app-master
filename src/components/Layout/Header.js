import classes from './Header.module.css';
import img from '../../assests/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={img} alt='meals' />
      </div>
    </>
  );
};

export default Header;
