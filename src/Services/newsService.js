import News from "../Models/News.js";

export const create = (body) => News.create(body)
export const findDocuments = () => News.countDocuments()
export const getID = (id) => News.findById(id)
export const findAll = () => News.find().sort({title: 1}).populate('user', 'category')
export const deleteID = (id) => News.findByIdAndDelete({_id: id})
export const update = (id, updateObject) => News.findByIdAndUpdate({_id: id}, {$set: updateObject})
export const search = (searchTerm) => News.find({title: {$regex: searchTerm, $options: 'i'}})
