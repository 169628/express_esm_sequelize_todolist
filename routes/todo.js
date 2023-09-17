import express from "express";

import Todos from "../models/todoList.js";
const router = express.Router();

router
  .post("/", async (req, res, next) => {
    try {
      const { item } = req.body;
      // console.log(item);
      const createData = await Todos.create({ item: item });
      res.status(201).send(createData);
    } catch (err) {
      console.log(err);
      res.status(400).send("err");
    }
  })
  .get("/", async (req, res, next) => {
    try {
      const findData = await Todos.findAndCountAll();
      res.status(200).send(findData);
    } catch (err) {
      console.log(err);
      res.status(400).send("err");
    }
  })
  .put("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const { item } = req.body;
      if (!id) {
        res.status(400).send("少了 id 哦!!!");
      }
      const updateData = await Todos.update(
        { item: item },
        { where: { id: id } }
      );
      res.status(201).send(updateData);
    } catch (err) {
      console.log(err);
      res.status(400).send("err");
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).send("少了 id 哦!!!");
      }
      const deleteData = Todos.destroy({
        where: { id: id },
      });
      res.status(204).send();
    } catch (err) {
      console.log(err);
      res.status(400).send("err");
    }
  });

export default router;
