import News from "../Models/News.js";

export const create = (body) => News.create(body)
export const findDocuments = () => News.countDocuments()
export const getID = (id) => News.findById(id)
export const findAll = () => News.find().sort({_id: -1}).populate('user', 'category')
export const deleteID = (id) => News.findByIdAndDelete({_id: id})
export const update = (id, filename, title, path, description, price, discount) => News.findByIdAndUpdate({_id: id}, {filename, title, path ,description, price, discount})
export const search = (searchTerm) => News.find({title: {$regex: searchTerm, $options: 'i'}})