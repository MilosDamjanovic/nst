export class Pharmasist {
  pharmasistID;
  name;
  surname;
  username;
  password;

  constructor(
    pharmasistID: number,
    name: string,
    surname: string,
    username: string,
    password: string
  ) {
    this.pharmasistID = pharmasistID;
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.password = password;
  }
}
