import Chefs from "../db/models/chefs";

export class ChefsDal {
  public createChef(chef: any) {
    chef = new Chefs({
      name: chef.name,
      discription: chef.discription,
      chefImage: chef.chefImage,
    });

    chef.save(function (err: any, results: any) {
      if (err) {
        throw err;
      }
      return results;
    });
  }

  public async updateChef(chef: any) {
    const data = await Chefs.findOne({
      name: chef.name,
    }).updateOne({ $set: { name: chef.name } });
    return data;
  }

  public findAll(query: any = null) {
    return Chefs.find(query);
  }

  public async getChef(param: { [key: string]: string }) {
    const data = await Chefs.aggregate([
      { $match: { name: `${param.name}` } },
      {
        $lookup: {
          localField: "restaurants",
          foreignField: "_id",
          from: "restaurants",
          as: "restaurants",
        },
      },
    ]);
    return data;
  }
}
