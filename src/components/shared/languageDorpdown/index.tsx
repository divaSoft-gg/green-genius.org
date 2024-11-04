
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ILanguages } from "../../../common/types";
import { languages } from "../../../common/data";

export default function LanguageDropdown() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<ILanguages>(languages.find((el: ILanguages) => el.code == i18n.language) as ILanguages)

    return (
        <Select
            size='sm'
            defaultSelectedKeys={[selectedLanguage?.country_code as string]}
            aria-label="Language"
            className="w-32"
            disallowEmptySelection
            startContent={<Avatar alt="Flag" className="w-6 h-6" src={selectedLanguage.image} />}
        >
            {languages.map((element: ILanguages) => (
                <SelectItem
                    onClick={() => { i18n.changeLanguage(element.code); setSelectedLanguage(element) }}
                    key={element.country_code}
                    startContent={<Avatar alt="Flag" className="w-6 h-6" src={element.image} />}
                >
                    {element.name}
                </SelectItem>
            ))}
        </Select>
    );
}