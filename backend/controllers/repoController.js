const mongoose = require("mongoose");
const Repository = require("../models/repoModel");
const User = require("../models/userModel");
const Issue = require("../models/issueModel");


const createRepository = (req,res)=>{
    res.send("repository created");
};
const getAllRepositories=(req,res)=>{
    res.send("All repositories fetched!!");
};
const fetchRepositoryById=(req,res)=>{
    res.send("Repository deataild fetched");
};

const fetchRepositoryByName=(req,res)=>{
    res.send("Repository deataild fetched");
};

const fetchRepositoriesForCurrentUser=(req,res)=>{
    res.send("Repository for logged in User Fetche");
};  
const toggleVisibilityById=(req,res)=>{
    res.send("repository visibility toggeld");
};

const updateRepositoryById=(req,res)=>{
    res.send("Repository updated");
};

const deleteRepositoryById=(req,res)=>{
    res.send("Repository deleted");
};
module.exports = {
  createRepository,
  getAllRepositories,
  fetchRepositoryById,
  fetchRepositoryByName,
  fetchRepositoriesForCurrentUser,
  updateRepositoryById,
  toggleVisibilityById,
  deleteRepositoryById,
};