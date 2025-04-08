import trees from "./trees.js";

export const getAlltrees = (req, res) => {
    res.status(200).json(trees)
}

export const getAlltreesById = (req, res) =>{
    const id = req.params.id
    if(id < 0 || id >= trees.length){
        return res.status(404).json({message:'Tree not found'})
    }
    res.status(200).json(trees[id])
}

export const createTrees = (req, res) =>{
    const {name,category,price} = req.body
    if(!name || !category || !price){
        return res.status(400).json({message:'Missing data!'})
    }
    const newTree = {name,category,price}
    trees.push(newTree)
    res.status(201).json(newTree)
}

export const updateTrees = (req, res) =>{
    const id = req.params.id
    if(id < 0 || id >= trees.length){
        return res.status(404).json({message:'Tree not found'})
    }
    const {name,category,price} = req.body
    if(!name || !category || !price){
        return res.status(400).json({message:'Missing data!'})
    }
    trees[id] = {name,category,price}
    res.status(200).json(trees[id])
}

export const deleteTrees = (req, res) =>{
    const id = req.params.id
    if(id < 0 || id >= trees.length){
        return res.status(404).json({message:'Tree not found'})
    }
    trees.splice(id, 1)
    res.status(200).json({message:'Tree has been deleted succesfully!'})
}

