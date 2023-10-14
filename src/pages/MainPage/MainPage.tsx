import styles from './MainPage.module.css'
import cn from 'classnames'
import {useNavigateWithFade} from '../../hooks/useNavigateWithFade';
import {Routes} from '../../utils/constants';

const MainPage = () => {
  const [navigateWithFade, fade] = useNavigateWithFade();

  function onStartButtonClick() {
    navigateWithFade(Routes.MENU_ROUTE);
  }

  return (
    <div className={cn("fade-container", fade && 'fade-page')}>
      <button
        className={cn(styles.start_btn)}
        onClick={onStartButtonClick}
      >старт</button>
    </div>
  );
};

export default MainPage;