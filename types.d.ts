export type Konto = {
  id: number;
  icon: "Home" | "School" | "ShowChart" | "Category" | "Alarm";
  name: string;
  kontostand: number;
  kontonummer: string;
  buchungen: Buchung[];
};

export type Buchung = {
  id: number;
  betrag: number;
  buchungsdatum: string;
  buchungstext: string;
};
