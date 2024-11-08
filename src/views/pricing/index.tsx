import { Button, Divider, Image, Select, SelectItem } from "@nextui-org/react";
import SectionTitle from "../../components/shared/sectionTitle";
import CentredLayout from "../../components/ui/centredLayout";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useState } from "react";
import {
  cn,
  fetchExchangeRates,
  getConvertedAmount,
  getCurrentDay,
} from "../../common/utils";
import {
  currencyListType,
  ExchangeRateData,
  FetchExchangeRates,
  pricingPlansType,
} from "../../common/types";
import { currencyList } from "../../common/data";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export default function PricingPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 720px  )" });
  const { t } = useTranslation();
  const pricingPlans: pricingPlansType[] = t("pricing.pricingPlans", {
    returnObjects: true,
  }) as pricingPlansType[];
  const [selectedCurrency, setSelectedCurrency] = useState<string>("TND");
  const [exchangeRates, setExchangeRates] = useState<ExchangeRateData>({
    date: "",
    usdRate: 1,
    eurRate: 1,
    tndRate: 1,
  });

  const handleExchangeRate = async (fetchExchangeRates: FetchExchangeRates) => {
    const storedData = localStorage.getItem("exchangeRate");
    const today = getCurrentDay();
    const isDataStale = !storedData || JSON.parse(storedData).date !== today;
    if (!isDataStale) {
      setExchangeRates(JSON.parse(storedData) as ExchangeRateData);
      return;
    }

    fetchExchangeRates().then((data: ExchangeRateData) => {
      localStorage.setItem("exchangeRate", JSON.stringify({ ...data }));
      setExchangeRates(data);
      return;
    });
  };

  return (
    <section id="pricing-page" className="my-12">
      <CentredLayout>
        <div className="flex flex-col gap-10 px-4 lg:px-0">
          <SectionTitle
            title={t("pricing.sectionTitle")}
            subtitle={t("pricing.sectionSubtitle")}
          />
          <div className="flex flex-row items-center gap-6">
            <h1 className="text-lg">{t("pricing.selectLabel")}</h1>
            <Select
              className="lg:max-w-xs max-w-24 "
              defaultSelectedKeys={["TND"]}
              aria-label="currency"
              onChange={(e) => {
                setSelectedCurrency(e.target.value);
                handleExchangeRate(fetchExchangeRates);
              }}
              disallowEmptySelection
            >
              {currencyList.map((element: currencyListType) => (
                <SelectItem key={element.code} value={element.label}>
                  {element.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex flex-row flex-wrap">
            {pricingPlans.map((plan: pricingPlansType, index: number) => {
              const showBorderRadiusForFirstCard = index === 0 && !isMobile;
              const showBorderRadiusForLastCard =
                index === pricingPlans.length - 1 && !isMobile;

              return (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col w-56 gap-6 p-4 border border-collapse grow bg-white dark:bg-black",
                    showBorderRadiusForFirstCard && "rounded-l-2xl",
                    showBorderRadiusForLastCard && "rounded-r-2xl"
                  )}
                >
                  <Image src={plan.icon} width={60} className="self-start" />
                  <h1 className="text-4xl font-semibold min-h-20 dark:text-white">
                    {plan.title}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-white dark:opacity-80 min-h-24">
                    {plan.subtitle}
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <h6 className="text-3xl dark:text-white">
                      {getConvertedAmount(
                        plan.amount,
                        selectedCurrency,
                        exchangeRates
                      )}{" "}
                      {selectedCurrency}
                    </h6>
                    <span className="text-gray-500 text-medium dark:text-white">
                      / {plan.duration}
                    </span>
                  </div>

                  <Divider />
                  <ul>
                    {plan.services.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex flex-row items-center gap-4 py-3"
                      >
                        <IoIosCheckmarkCircleOutline color="green" />
                        <p className="font-semibold text-gray-600 dark:text-white">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Button color="primary" className="text-medium">
                    {plan.buttonText}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
