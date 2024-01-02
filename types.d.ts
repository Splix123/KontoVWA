export type Konto = {
  id: number;
  icon: "Home" | "School" | "ShowChart" | "Category" | "Alarm";
  name: string;
  kontostand: number;
  kontonummer: string;
};

export type Buchung = {
  id: number;
  lfd: number;
  kontonummer: string;
  betrag: number;
  buchungsdatum: string;
  buchungstext: string;
};
