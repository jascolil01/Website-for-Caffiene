const Drink = require('../models/drinks')
const Comment = require('../models/comment')

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
      const drink = await Drink.findById(id)
      if (drink) {
          return res.status(200).json({ drink });
      }
      return res.status(404).send('Drink with the specified ID does not exists');
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
      const {id} = req.params;
      const deleted = await Drink.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Drink deleted");
      }
      throw new Error("Drink not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}
const createComment = async (req,res)=>{
  try{
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment,
    })
  }catch(e){
    return res.status(500).json({ error: e.message})
  }
}

const getAllComment = async (req, res) => {
  try {
      const comment = await Comment.find()
      return res.status(200).json({ comment })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getCommentById = async (req, res) => {
  try {
      const { id } = req.params;
      const comment = await Comment.findById(id)
      if (comment) {
          return res.status(200).json({ comment });
      }
      return res.status(404).send('Comment with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const updateComment = async (req, res) => {
  try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true})
      res.status(200).json(comment)
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteComment = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Comment.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Comment deleted");
      }
      throw new Error("Commnet not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports={
  createDrink,
  getAllDrink,
  getDrinkById,
  deleteDrink,
  updateDrink,
  createComment,
  getAllComment,
  getCommentById,
  deleteComment,
  updateComment
}