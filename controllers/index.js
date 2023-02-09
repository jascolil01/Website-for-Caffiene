const DrinkType = require('../models/drinkType')

const createDrinkType = async (req,res)=>{
  try{
    const drink = await new DrinkType(req.body)
    await drink.save()
    return res.status(201).json({
      drink,
    })
  }catch(e){
    return res.status(500).json({ error: e.message})
  }
}

const getAllDrinkTypes = async (req, res) => {
  try {
      const drinks = await DrinkType.find()
      return res.status(200).json({ drinks })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getDrinkTypeById = async (req, res) => {
  try {
      const { id } = req.params;
      const drinks = await DrinkType.findById(id)
      if (drinks) {
          return res.status(200).json({ drinks });
      }
      return res.status(404).send('Drink Type with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const updateDrinkType = async (req, res) => {
  try {
      const drink = await DrinkType.findByIdAndUpdate(req.params.id, req.body, { new: true})
      res.status(200).json(drink)
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteDrinkType = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await DrinkType.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Drink type deleted");
      }
      throw new Error("Drink type not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports={
  createDrinkType,
  getAllDrinkTypes,
  getDrinkTypeById,
  deleteDrinkType,
  updateDrinkType
}