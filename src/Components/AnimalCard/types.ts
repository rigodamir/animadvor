export enum Size {
  veliki = "veliki",
  srednji = "srednji",
  manji = "manji",
}

export enum Personality {
  aktivni = "aktivni",
  manjeAktivni = "manje aktivni",
  plahi = "plahi",
  socijalizirani = "socijalizirani",
}

export enum Spol {
  musko = "musko",
  zensko = "zensko",
}

export enum Dob {
  stene = "stene",
  mladi = "mladi",
  odrastao = "odrastao",
}

export interface Animal {
  name: string;
  bodyText: string;
  imageUrls: string[];
  age: string;
  gender: string;
  size: string;
  personality: string;
}
