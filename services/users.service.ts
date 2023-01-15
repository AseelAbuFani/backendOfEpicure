import { UsersDal } from "../dal/users.dal";
import bcrypt, { compare } from 'bcrypt';

export class UsersService {
  public async getUsers() {
    const dal = new UsersDal();
    const res = await dal.findAll();
    return res;
  }

  public static async register(user: any) {
    const saltRounds = 10;
    const isUserExist = await UsersDal.compareEmails(user);
    if (isUserExist){
      return { status: "failure", message: "User already exist" };
    }
    bcrypt.hash(user.password, saltRounds, async function (err, hash) {
      user["password"] = hash;
      const res = await UsersDal.createUser(user);
      return res;
    });
  }

  public static async login(args: any) {
    const hashedPasswordFromDB = await UsersDal.getUserPassword(args);
    if (!hashedPasswordFromDB){
      return {status: "failure", message: "Incorrect userName or password"};
    }
    const response = await bcrypt.compare(args.password, hashedPasswordFromDB);
    if (response){
      return {status: "success", message: "Welcome!"};
    }
    return {status: "failure", message: "Incorrect userName or password"};
  }
}
