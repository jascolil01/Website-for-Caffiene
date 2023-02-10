const Drink = require('../models/drinks')

const createDrink = async (req,res)=>{
  try{
    const drink = await new Drink(req.body)
    await drink.save()
    return res.status(201).json({
      drink,
    })
  }catch(e){
    return res.status(500).json({ error: e.message})
  }
}

const getAllDrink = async (req, res) => {
  try {
      const drinks = await Drink.find()
      return res.status(200).json({ drinks })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getDrinkById = async (req, res) => {
  try {
      const { id } = req.params;
      const drinks = await Drink.findById(id)
      if (drinks) {
          return res.status(200).json({ drinks });
      }
      return res.status(404).send('Drink Type with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const updateDrink = async (req, res) => {
  try {
      const drink = await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true})
      res.status(200).json(drink)
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteDrink = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Drink.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Drink type deleted");
      }
      throw new Error("Drink type not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports={
  createDrink,
  getAllDrink,
  getDrinkById,
  deleteDrink,
  updateDrink
}