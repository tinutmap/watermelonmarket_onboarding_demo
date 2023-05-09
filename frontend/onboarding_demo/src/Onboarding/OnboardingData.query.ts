export interface OnboardingDataEntryPostType {
  store_name?: string;
  gift_card_amount?: number;
  gift_card_amount_currency?: string;
  gift_card_price?: number;
  gift_card_price_currency?: string;
  crypto_network?: string;
  crypto_address?: string;
  email?: string;
}

export interface OnboardingDataEntryGetType
  extends OnboardingDataEntryPostType {
  id: number;
  survey_id: string;
}

export const getOnboardingDataList = async (): Promise<
  OnboardingDataEntryGetType[]
> => {
  const res = await fetch("http://localhost:8000/test1/");
  if (res.ok) {
    return res.json() as Promise<OnboardingDataEntryGetType[]>;
  } else throw new Error(`STATUS ${res.status}: ${res.statusText}`);
};

export const createOnboardingData = async (
  onboardingData: OnboardingDataEntryPostType
) =>
  // : Promise<boolean>
  {
    const res = await fetch("http://localhost:8000/test1/", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...onboardingData }),
    });
    if (res.ok) {
      return true;
    }
    throw new Error(`STATUS ${res.status}: ${res.statusText}`);
  };
