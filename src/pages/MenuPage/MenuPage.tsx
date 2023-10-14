import MyButton from "../../components/UI/MyButton/MyButton";
import cn from 'classnames'
import styles from './MenuPage.module.css'
import {Routes} from "../../utils/constants";
import {useNavigateWithFade} from "../../hooks/useNavigateWithFade";

enum Buttons {
  BUTTON_1 = '1',
  BUTTON_2 = '2',
  BUTTON_3 = '3',
}

const MenuPage = () => {
  const [navigateWithFade, fade] = useNavigateWithFade();

  function onMenuButtonClick(buttonType: Buttons) {
    switch (buttonType) {
      case Buttons.BUTTON_1:
        navigateWithFade(Routes.GAME_ROUTE + Routes.FINANCES_ROUTE);
        break
      case Buttons.BUTTON_2:
        navigateWithFade(Routes.GAME_ROUTE + Routes.BUSINESS_ROUTE);
        break
      case Buttons.BUTTON_3:
        navigateWithFade(Routes.GAME_ROUTE + Routes.CUSTOM_ROUTE);
        break
    }
  }

  return (
    <div className="fade-container">
      <div className={cn(styles.container, fade && 'fade-page')}>
        <MyButton
          onClick={() => onMenuButtonClick(Buttons.BUTTON_1)}
        >финансовая грамотность</MyButton>
        <MyButton
          onClick={() => onMenuButtonClick(Buttons.BUTTON_2)}
        >предпринимательство</MyButton>
        <MyButton
          onClick={() => onMenuButtonClick(Buttons.BUTTON_3)}
        >своя сборка</MyButton>
      </div>
    </div>
  );
};

export default MenuPage;