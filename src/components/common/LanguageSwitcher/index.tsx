import { useTranslation } from "react-i18next";
import Button from "../Button";

const LanguageSwitcher  = () => {
    const { i18n } = useTranslation();
  
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };

    return (
        <div className="flex ">
            <Button className="pl-2 hover:text-text-primary" onClick={() => changeLanguage('en')}>English</Button>
            <Button className="pl-2 hover:text-text-primary" onClick={() => changeLanguage('fr')}>Français</Button>
            <Button className="pl-2 hover:text-text-primary" onClick={() => changeLanguage('ar')}>عربي</Button>
        </div>
    );
}

export default LanguageSwitcher;
