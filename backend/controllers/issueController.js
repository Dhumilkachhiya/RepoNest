const mongoose = require("mongoose");
const Repository = require("../models/repoModel");
const User = require("../models/userModel");
const Issue = require("../models/issueModel");

const createIssue = (req,res)=>{
    res.send("Isuue Created");
};
const updateIssueById = (req,res)=>{
    res.send("Isuue updated");
};
const deleteIssueById = (req,res)=>{
    res.send("isuue deletde");
};
const getAllIssues = (req,res)=>{
    res.send("all isuue fetched");
};
const getIssueById = (req,res)=>{
    res.send("isuue detaild fetched");
}

module.exports = {
  createIssue,
  updateIssueById,
  deleteIssueById,
  getAllIssues,
  getIssueById,
};