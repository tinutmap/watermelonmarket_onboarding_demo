import React, { Fragment, JSX, useState } from "react";
import validator from "validator";
import { ResponseStatus, useAsync } from "../lib/useAsync";
import {
  createOnboardingData,
  OnboardingDataEntryPostType,
} from "./OnboardingData.query";

interface OnboardingQuestionType {
  dataFields: string[];
  data: OnboardingDataEntryPostType;
  setter: React.Dispatch<React.SetStateAction<OnboardingDataEntryPostType>>;
}

const CurrencyOptions = () => {
  return (
    <>
      <option value="XUA">ADB Unit of Account</option>
      <option value="AFN">Afghan Afghani</option>
      <option value="AFA">Afghan Afghani (1927–2002)</option>
      <option value="ALL">Albanian Lek</option>
      <option value="ALK">Albanian Lek (1946–1965)</option>
      <option value="DZD">Algerian Dinar</option>
      <option value="ADP">Andorran Peseta</option>
      <option value="AOA">Angolan Kwanza</option>
      <option value="AOK">Angolan Kwanza (1977–1991)</option>
      <option value="AON">Angolan New Kwanza (1990–2000)</option>
      <option value="AOR">Angolan Readjusted Kwanza (1995–1999)</option>
      <option value="ARA">Argentine Austral</option>
      <option value="ARS">Argentine Peso</option>
      <option value="ARM">Argentine Peso (1881–1970)</option>
      <option value="ARP">Argentine Peso (1983–1985)</option>
      <option value="ARL">Argentine Peso Ley (1970–1983)</option>
      <option value="AMD">Armenian Dram</option>
      <option value="AWG">Aruban Florin</option>
      <option value="AUD">Australian Dollar</option>
      <option value="ATS">Austrian Schilling</option>
      <option value="AZN">Azerbaijani Manat</option>
      <option value="AZM">Azerbaijani Manat (1993–2006)</option>
      <option value="BSD">Bahamian Dollar</option>
      <option value="BHD">Bahraini Dinar</option>
      <option value="BDT">Bangladeshi Taka</option>
      <option value="BBD">Barbadian Dollar</option>
      <option value="BYN">Belarusian Ruble</option>
      <option value="BYB">Belarusian Ruble (1994–1999)</option>
      <option value="BYR">Belarusian Ruble (2000–2016)</option>
      <option value="BEF">Belgian Franc</option>
      <option value="BEC">Belgian Franc (convertible)</option>
      <option value="BEL">Belgian Franc (financial)</option>
      <option value="BZD">Belize Dollar</option>
      <option value="BMD">Bermudan Dollar</option>
      <option value="BTN">Bhutanese Ngultrum</option>
      <option value="BOB">Bolivian Boliviano</option>
      <option value="BOL">Bolivian Boliviano (1863–1963)</option>
      <option value="BOV">Bolivian Mvdol</option>
      <option value="BOP">Bolivian Peso</option>
      <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
      <option value="BAD">Bosnia-Herzegovina Dinar (1992–1994)</option>
      <option value="BAN">Bosnia-Herzegovina New Dinar (1994–1997)</option>
      <option value="BWP">Botswanan Pula</option>
      <option value="BRC">Brazilian Cruzado (1986–1989)</option>
      <option value="BRZ">Brazilian Cruzeiro (1942–1967)</option>
      <option value="BRE">Brazilian Cruzeiro (1990–1993)</option>
      <option value="BRR">Brazilian Cruzeiro (1993–1994)</option>
      <option value="BRN">Brazilian New Cruzado (1989–1990)</option>
      <option value="BRB">Brazilian New Cruzeiro (1967–1986)</option>
      <option value="BRL">Brazilian Real</option>
      <option value="GBP">British Pound</option>
      <option value="BND">Brunei Dollar</option>
      <option value="BGL">Bulgarian Hard Lev</option>
      <option value="BGN">Bulgarian Lev</option>
      <option value="BGO">Bulgarian Lev (1879–1952)</option>
      <option value="BGM">Bulgarian Socialist Lev</option>
      <option value="BUK">Burmese Kyat</option>
      <option value="BIF">Burundian Franc</option>
      <option value="XPF">CFP Franc</option>
      <option value="KHR">Cambodian Riel</option>
      <option value="CAD">Canadian Dollar</option>
      <option value="CVE">Cape Verdean Escudo</option>
      <option value="KYD">Cayman Islands Dollar</option>
      <option value="XAF">Central African CFA Franc</option>
      <option value="CLE">Chilean Escudo</option>
      <option value="CLP">Chilean Peso</option>
      <option value="CLF">Chilean Unit of Account (UF)</option>
      <option value="CNX">Chinese People’s Bank Dollar</option>
      <option value="CNY">Chinese Yuan</option>
      <option value="CNH">Chinese Yuan (offshore)</option>
      <option value="COP">Colombian Peso</option>
      <option value="COU">Colombian Real Value Unit</option>
      <option value="KMF">Comorian Franc</option>
      <option value="CDF">Congolese Franc</option>
      <option value="CRC">Costa Rican Colón</option>
      <option value="HRD">Croatian Dinar</option>
      <option value="HRK">Croatian Kuna</option>
      <option value="CUC">Cuban Convertible Peso</option>
      <option value="CUP">Cuban Peso</option>
      <option value="CYP">Cypriot Pound</option>
      <option value="CZK">Czech Koruna</option>
      <option value="CSK">Czechoslovak Hard Koruna</option>
      <option value="DKK">Danish Krone</option>
      <option value="DJF">Djiboutian Franc</option>
      <option value="DOP">Dominican Peso</option>
      <option value="NLG">Dutch Guilder</option>
      <option value="XCD">East Caribbean Dollar</option>
      <option value="DDM">East German Mark</option>
      <option value="ECS">Ecuadorian Sucre</option>
      <option value="ECV">Ecuadorian Unit of Constant Value</option>
      <option value="EGP">Egyptian Pound</option>
      <option value="GQE">Equatorial Guinean Ekwele</option>
      <option value="ERN">Eritrean Nakfa</option>
      <option value="EEK">Estonian Kroon</option>
      <option value="ETB">Ethiopian Birr</option>
      <option value="EUR">Euro</option>
      <option value="XBA">European Composite Unit</option>
      <option value="XEU">European Currency Unit</option>
      <option value="XBB">European Monetary Unit</option>
      <option value="XBC">European Unit of Account (XBC)</option>
      <option value="XBD">European Unit of Account (XBD)</option>
      <option value="FKP">Falkland Islands Pound</option>
      <option value="FJD">Fijian Dollar</option>
      <option value="FIM">Finnish Markka</option>
      <option value="FRF">French Franc</option>
      <option value="XFO">French Gold Franc</option>
      <option value="XFU">French UIC-Franc</option>
      <option value="GMD">Gambian Dalasi</option>
      <option value="GEK">Georgian Kupon Larit</option>
      <option value="GEL">Georgian Lari</option>
      <option value="DEM">German Mark</option>
      <option value="GHS">Ghanaian Cedi</option>
      <option value="GHC">Ghanaian Cedi (1979–2007)</option>
      <option value="GIP">Gibraltar Pound</option>
      <option value="XAU">Gold</option>
      <option value="GRD">Greek Drachma</option>
      <option value="GTQ">Guatemalan Quetzal</option>
      <option value="GWP">Guinea-Bissau Peso</option>
      <option value="GNF">Guinean Franc</option>
      <option value="GNS">Guinean Syli</option>
      <option value="GYD">Guyanaese Dollar</option>
      <option value="HTG">Haitian Gourde</option>
      <option value="HNL">Honduran Lempira</option>
      <option value="HKD">Hong Kong Dollar</option>
      <option value="HUF">Hungarian Forint</option>
      <option value="IMP">IMP</option>
      <option value="ISK">Icelandic Króna</option>
      <option value="ISJ">Icelandic Króna (1918–1981)</option>
      <option value="INR">Indian Rupee</option>
      <option value="IDR">Indonesian Rupiah</option>
      <option value="IRR">Iranian Rial</option>
      <option value="IQD">Iraqi Dinar</option>
      <option value="IEP">Irish Pound</option>
      <option value="ILS">Israeli New Shekel</option>
      <option value="ILP">Israeli Pound</option>
      <option value="ILR">Israeli Shekel (1980–1985)</option>
      <option value="ITL">Italian Lira</option>
      <option value="JMD">Jamaican Dollar</option>
      <option value="JPY">Japanese Yen</option>
      <option value="JOD">Jordanian Dinar</option>
      <option value="KZT">Kazakhstani Tenge</option>
      <option value="KES">Kenyan Shilling</option>
      <option value="KWD">Kuwaiti Dinar</option>
      <option value="KGS">Kyrgystani Som</option>
      <option value="LAK">Laotian Kip</option>
      <option value="LVL">Latvian Lats</option>
      <option value="LVR">Latvian Ruble</option>
      <option value="LBP">Lebanese Pound</option>
      <option value="LSL">Lesotho Loti</option>
      <option value="LRD">Liberian Dollar</option>
      <option value="LYD">Libyan Dinar</option>
      <option value="LTL">Lithuanian Litas</option>
      <option value="LTT">Lithuanian Talonas</option>
      <option value="LUL">Luxembourg Financial Franc</option>
      <option value="LUC">Luxembourgian Convertible Franc</option>
      <option value="LUF">Luxembourgian Franc</option>
      <option value="MOP">Macanese Pataca</option>
      <option value="MKD">Macedonian Denar</option>
      <option value="MKN">Macedonian Denar (1992–1993)</option>
      <option value="MGA">Malagasy Ariary</option>
      <option value="MGF">Malagasy Franc</option>
      <option value="MWK">Malawian Kwacha</option>
      <option value="MYR">Malaysian Ringgit</option>
      <option value="MVR">Maldivian Rufiyaa</option>
      <option value="MVP">Maldivian Rupee (1947–1981)</option>
      <option value="MLF">Malian Franc</option>
      <option value="MTL">Maltese Lira</option>
      <option value="MTP">Maltese Pound</option>
      <option value="MRU">Mauritanian Ouguiya</option>
      <option value="MRO">Mauritanian Ouguiya (1973–2017)</option>
      <option value="MUR">Mauritian Rupee</option>
      <option value="MXV">Mexican Investment Unit</option>
      <option value="MXN">Mexican Peso</option>
      <option value="MXP">Mexican Silver Peso (1861–1992)</option>
      <option value="MDC">Moldovan Cupon</option>
      <option value="MDL">Moldovan Leu</option>
      <option value="MCF">Monegasque Franc</option>
      <option value="MNT">Mongolian Tugrik</option>
      <option value="MAD">Moroccan Dirham</option>
      <option value="MAF">Moroccan Franc</option>
      <option value="MZE">Mozambican Escudo</option>
      <option value="MZN">Mozambican Metical</option>
      <option value="MZM">Mozambican Metical (1980–2006)</option>
      <option value="MMK">Myanmar Kyat</option>
      <option value="NAD">Namibian Dollar</option>
      <option value="NPR">Nepalese Rupee</option>
      <option value="ANG">Netherlands Antillean Guilder</option>
      <option value="TWD">New Taiwan Dollar</option>
      <option value="NZD">New Zealand Dollar</option>
      <option value="NIO">Nicaraguan Córdoba</option>
      <option value="NIC">Nicaraguan Córdoba (1988–1991)</option>
      <option value="NGN">Nigerian Naira</option>
      <option value="KPW">North Korean Won</option>
      <option value="NOK">Norwegian Krone</option>
      <option value="OMR">Omani Rial</option>
      <option value="PKR">Pakistani Rupee</option>
      <option value="XPD">Palladium</option>
      <option value="PAB">Panamanian Balboa</option>
      <option value="PGK">Papua New Guinean Kina</option>
      <option value="PYG">Paraguayan Guarani</option>
      <option value="PEI">Peruvian Inti</option>
      <option value="PEN">Peruvian Sol</option>
      <option value="PES">Peruvian Sol (1863–1965)</option>
      <option value="PHP">Philippine Peso</option>
      <option value="XPT">Platinum</option>
      <option value="PLN">Polish Zloty</option>
      <option value="PLZ">Polish Zloty (1950–1995)</option>
      <option value="PTE">Portuguese Escudo</option>
      <option value="GWE">Portuguese Guinea Escudo</option>
      <option value="QAR">Qatari Rial</option>
      <option value="XRE">RINET Funds</option>
      <option value="RHD">Rhodesian Dollar</option>
      <option value="RON">Romanian Leu</option>
      <option value="ROL">Romanian Leu (1952–2006)</option>
      <option value="RUB">Russian Ruble</option>
      <option value="RUR">Russian Ruble (1991–1998)</option>
      <option value="RWF">Rwandan Franc</option>
      <option value="SVC">Salvadoran Colón</option>
      <option value="WST">Samoan Tala</option>
      <option value="SAR">Saudi Riyal</option>
      <option value="RSD">Serbian Dinar</option>
      <option value="CSD">Serbian Dinar (2002–2006)</option>
      <option value="SCR">Seychellois Rupee</option>
      <option value="SLL">Sierra Leonean Leone</option>
      <option value="XAG">Silver</option>
      <option value="SGD">Singapore Dollar</option>
      <option value="SKK">Slovak Koruna</option>
      <option value="SIT">Slovenian Tolar</option>
      <option value="SBD">Solomon Islands Dollar</option>
      <option value="SOS">Somali Shilling</option>
      <option value="ZAR">South African Rand</option>
      <option value="ZAL">South African Rand (financial)</option>
      <option value="KRH">South Korean Hwan (1953–1962)</option>
      <option value="KRW">South Korean Won</option>
      <option value="KRO">South Korean Won (1945–1953)</option>
      <option value="SSP">South Sudanese Pound</option>
      <option value="SUR">Soviet Rouble</option>
      <option value="ESP">Spanish Peseta</option>
      <option value="ESA">Spanish Peseta (A account)</option>
      <option value="ESB">Spanish Peseta (convertible account)</option>
      <option value="XDR">Special Drawing Rights</option>
      <option value="LKR">Sri Lankan Rupee</option>
      <option value="SHP">St. Helena Pound</option>
      <option value="XSU">Sucre</option>
      <option value="SDD">Sudanese Dinar (1992–2007)</option>
      <option value="SDG">Sudanese Pound</option>
      <option value="SDP">Sudanese Pound (1957–1998)</option>
      <option value="SRD">Surinamese Dollar</option>
      <option value="SRG">Surinamese Guilder</option>
      <option value="SZL">Swazi Lilangeni</option>
      <option value="SEK">Swedish Krona</option>
      <option value="CHF">Swiss Franc</option>
      <option value="SYP">Syrian Pound</option>
      <option value="STN">São Tomé &amp; Príncipe Dobra</option>
      <option value="STD">São Tomé &amp; Príncipe Dobra (1977–2017)</option>
      <option value="TVD">TVD</option>
      <option value="TJR">Tajikistani Ruble</option>
      <option value="TJS">Tajikistani Somoni</option>
      <option value="TZS">Tanzanian Shilling</option>
      <option value="XTS">Testing Currency Code</option>
      <option value="THB">Thai Baht</option>
      <option value="XXX">
        The codes assigned for transactions where no currency is involved
      </option>
      <option value="TPE">Timorese Escudo</option>
      <option value="TOP">Tongan Paʻanga</option>
      <option value="TTD">Trinidad &amp; Tobago Dollar</option>
      <option value="TND">Tunisian Dinar</option>
      <option value="TRY">Turkish Lira</option>
      <option value="TRL">Turkish Lira (1922–2005)</option>
      <option value="TMT">Turkmenistani Manat</option>
      <option value="TMM">Turkmenistani Manat (1993–2009)</option>
      <option value="USD">US Dollar</option>
      <option value="USN">US Dollar (Next day)</option>
      <option value="USS">US Dollar (Same day)</option>
      <option value="UGX">Ugandan Shilling</option>
      <option value="UGS">Ugandan Shilling (1966–1987)</option>
      <option value="UAH">Ukrainian Hryvnia</option>
      <option value="UAK">Ukrainian Karbovanets</option>
      <option value="AED">United Arab Emirates Dirham</option>
      <option value="UYW">Uruguayan Nominal Wage Index Unit</option>
      <option value="UYU">Uruguayan Peso</option>
      <option value="UYP">Uruguayan Peso (1975–1993)</option>
      <option value="UYI">Uruguayan Peso (Indexed Units)</option>
      <option value="UZS">Uzbekistani Som</option>
      <option value="VUV">Vanuatu Vatu</option>
      <option value="VES">Venezuelan Bolívar</option>
      <option value="VEB">Venezuelan Bolívar (1871–2008)</option>
      <option value="VEF">Venezuelan Bolívar (2008–2018)</option>
      <option value="VND">Vietnamese Dong</option>
      <option value="VNN">Vietnamese Dong (1978–1985)</option>
      <option value="CHE">WIR Euro</option>
      <option value="CHW">WIR Franc</option>
      <option value="XOF">West African CFA Franc</option>
      <option value="YDD">Yemeni Dinar</option>
      <option value="YER">Yemeni Rial</option>
      <option value="YUN">Yugoslavian Convertible Dinar (1990–1992)</option>
      <option value="YUD">Yugoslavian Hard Dinar (1966–1990)</option>
      <option value="YUM">Yugoslavian New Dinar (1994–2002)</option>
      <option value="YUR">Yugoslavian Reformed Dinar (1992–1993)</option>
      <option value="ZWN">ZWN</option>
      <option value="ZRN">Zairean New Zaire (1993–1998)</option>
      <option value="ZRZ">Zairean Zaire (1971–1993)</option>
      <option value="ZMW">Zambian Kwacha</option>
      <option value="ZMK">Zambian Kwacha (1968–2012)</option>
      <option value="ZWD">Zimbabwean Dollar (1980–2008)</option>
      <option value="ZWR">Zimbabwean Dollar (2008)</option>
      <option value="ZWL">Zimbabwean Dollar (2009)</option>
    </>
  );
};

export const OnboardingQuestion1 = ({
  dataFields,
  data,
  setter,
}: OnboardingQuestionType): JSX.Element => {
  return (
    <>
      <h2>What is the name of your store?</h2>
      <p>
        Example: Razer Gold, Amazon, Target. (If you have multiple stores,
        choose your top gift card -- you can always add more later.)
      </p>
      <div className="mb-3">
        <input
          type="text"
          onChange={(event) =>
            setter((onboardingData) => {
              return { ...onboardingData, [dataFields[0]]: event.target.value };
            })
          }
          value={data[dataFields[0] as keyof OnboardingDataEntryPostType]}
          className="form-control"
        />
      </div>
    </>
  );
};

const OnboardingQuestion2 = ({
  dataFields,
  data,
  setter,
}: OnboardingQuestionType): JSX.Element => {
  return (
    <>
      <h2>Balance</h2>
      <p>
        What is the balance left on your gift card? If possible, please double
        check your balance before entering the number here. Example answer:
        $100, 2,000 INR, 200 EUR.
      </p>
      <div className="input-group mb-3">
        <input
          type="number"
          onChange={(event) =>
            setter((onboardingData) => {
              return { ...onboardingData, [dataFields[0]]: event.target.value };
            })
          }
          value={data[dataFields[0] as keyof OnboardingDataEntryPostType]}
          className="form-control"
        />
        <select
          name=""
          id=""
          onChange={(event) =>
            setter((onboardingData) => {
              return { ...onboardingData, [dataFields[1]]: event.target.value };
            })
          }
          value={data[dataFields[1] as keyof OnboardingDataEntryPostType]}
          className="form-select"
        >
          <CurrencyOptions />
        </select>
      </div>
    </>
  );
};

const OnboardingQuestion3 = ({
  dataFields,
  data,
  setter,
}: OnboardingQuestionType): JSX.Element => {
  return (
    <>
      <h2>What price are you selling at?</h2>
      <p>
        Example Answer: $70. Please remember a low prices generally results in a
        faster and more successful sale, and we recommend a substantial
        discount. This number must be strictly at least ten percent less than
        the face value of the card, as we only sell discounted gift cards.
      </p>
      <div className="input-group mb-3">
        <input
          type="number"
          onChange={(event) =>
            setter((onboardingData) => {
              return { ...onboardingData, [dataFields[0]]: event.target.value };
            })
          }
          value={data[dataFields[0] as keyof OnboardingDataEntryPostType]}
          className="form-control"
        />
        <select
          name=""
          id=""
          onChange={(event) =>
            setter((onboardingData) => {
              return { ...onboardingData, [dataFields[1]]: event.target.value };
            })
          }
          value={data[dataFields[1] as keyof OnboardingDataEntryPostType]}
          className="form-select"
        >
          <CurrencyOptions />
        </select>
      </div>
    </>
  );
};

const OnboardingQuestion4 = ({
  dataFields,
  data,
  setter,
}: OnboardingQuestionType): JSX.Element => {
  return (
    <>
      <h2>Which network would you like to receive funds at?</h2>
      <p>
        If you are unsure, please select Polygon. (You may change this later.)
      </p>
      <select
        name=""
        id=""
        onChange={(event) =>
          setter((onboardingData) => {
            return { ...onboardingData, [dataFields[0]]: event.target.value };
          })
        }
        value={data[dataFields[0] as keyof OnboardingDataEntryPostType]}
        className="form-select"
      >
        <option value="MATIC">Polygon</option>
        <option value="ETH">Ethereum</option>
      </select>
    </>
  );
};
const OnboardingQuestion5 = ({
  dataFields,
  data,
  setter,
}: OnboardingQuestionType): JSX.Element => {
  return (
    <>
      <h2>What is the name of your store?</h2>
      <p>
        You may change this later. Example:
        0xfA63Ca5caF1D88f42e1A73aE0E0cb7060B9E7292
      </p>
      <input
        type="text"
        onChange={(event) =>
          setter((onboardingData) => {
            return { ...onboardingData, [dataFields[0]]: event.target.value };
          })
        }
        value={data[dataFields[0] as keyof OnboardingDataEntryPostType]}
        className="form-control"
      />
    </>
  );
};
const OnboardingQuestion6 = ({
  dataFields,
  data,
  setter,
}: OnboardingQuestionType): JSX.Element => {
  return (
    <>
      <h2>Almost done! What is your email address?</h2>
      <p>
        We will only use this to reach out about the transaction. Please check
        this often as we'll use this as the main way of getting in touch.
      </p>
      <input
        type="email"
        onChange={(event) =>
          setter((onboardingData) => {
            return { ...onboardingData, [dataFields[0]]: event.target.value };
          })
        }
        value={data[dataFields[0] as keyof OnboardingDataEntryPostType]}
        className="form-control"
        placeholder="someone@example.com"
      />
    </>
  );
};
const OnboardingQuestion7 = ({
  onboardingData,
}: {
  onboardingData: OnboardingDataEntryPostType;
}): JSX.Element => {
  const { data, status } = useAsync<boolean, OnboardingDataEntryPostType>(
    createOnboardingData,
    [],
    onboardingData
  );
  switch (status) {
    case ResponseStatus.Pending: {
      return <p>Loading...</p>;
    }
    case ResponseStatus.Reject: {
      throw new Error(data.toString());
    }
    case ResponseStatus.Resolved: {
      return <h2>Thank you for your submission!</h2>;
    }
  }
};
export const OnboardingQuestionWrapper = (): JSX.Element => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [onboardingData, setOnboardingData] =
    useState<OnboardingDataEntryPostType>({
      gift_card_amount_currency: "USD",
      gift_card_price_currency: "USD",
      crypto_network: "MATIC",
    });
  const questions = [
    {
      component: (
        <OnboardingQuestion1
          dataFields={["store_name"]}
          data={onboardingData}
          setter={setOnboardingData}
        />
      ),
    },
    {
      component: (
        <OnboardingQuestion2
          dataFields={["gift_card_amount", "gift_card_amount_currency"]}
          data={onboardingData}
          setter={setOnboardingData}
        />
      ),
    },
    {
      component: (
        <OnboardingQuestion3
          dataFields={["gift_card_price", "gift_card_price_currency"]}
          data={onboardingData}
          setter={setOnboardingData}
        />
      ),
    },
    {
      component: (
        <OnboardingQuestion4
          dataFields={["crypto_network"]}
          data={onboardingData}
          setter={setOnboardingData}
        />
      ),
    },
    {
      component: (
        <OnboardingQuestion5
          dataFields={["crypto_address"]}
          data={onboardingData}
          setter={setOnboardingData}
        />
      ),
    },
    {
      component: (
        <OnboardingQuestion6
          dataFields={["email"]}
          data={onboardingData}
          setter={setOnboardingData}
        />
      ),
      isInvalid:
        !onboardingData.email || !validator.isEmail(onboardingData.email),
      invalidMessage: "invalid email",
    },
    {
      component: <OnboardingQuestion7 onboardingData={onboardingData} />,
    },
  ];
  const [error, setError] = useState("");

  return (
    <>
      <h1 className="App-header">Watermelon Markets - Seller Survey</h1>
      <div className="App-body">
        <div>{questions[questionNumber].component}</div>
        {error && (
          <p className="alert alert-warning" role="alert">
            {error}
          </p>
        )}
        <div className="nav-buttons">
          {questionNumber > 0 && questionNumber < questions.length - 1 && (
            <button
              onClick={() => setQuestionNumber((val) => Math.max(val - 1, 0))}
              className="btn btn-secondary"
            >
              Back
            </button>
          )}
          {questionNumber < questions.length - 1 && (
            <button
              onClick={async () => {
                if (questions[questionNumber].isInvalid) {
                  return setError(
                    questions[questionNumber].invalidMessage ?? ""
                  );
                }
                setError("");
                setQuestionNumber((val) =>
                  Math.min(val + 1, questions.length - 1)
                );
              }}
              className="btn btn-primary"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};
