import meals from '../../assets/meals.jpg';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>

      <div className={classes['main-image']}>
        <img src={meals} alt="reactMeals" />
      </div>
    </>
  )
}

export default Header;