const express = require("express");
const router = express.Router();
const Exam1Service = require("./exam/exam1");
const Exam2Service = require("./exam/exam2");
const Exam3Service = require("./exam/exam3");
const Exam4Service = require("./exam/exam4");
const Exam5Service = require("./exam/exam5");

router.get("/1", (req, res) => {
  try {
    const service1 = new Exam1Service();
    let result = service1.exec();
    res.json({ code: 0, result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ code: 500, message: "An error occurred" });
  }
});

router.post("/2", (req, res) => {
  try {
    const service2 = new Exam2Service();
    let result = service2.exec(req, res);
    res.json({ code: 0, result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ code: 500, message: "An error occurred" });
  }
});

router.post("/3", (req, res) => {
  try {
    const service3 = new Exam3Service();
    let result = service3.exec(req, res);
    res.json({ code: 0, result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ code: 500, message: "An error occurred" });
  }
});

router.get("/4", (req, res) => {
  try {
    const service4 = new Exam4Service();
    let result = service4.exec();
    res.json({ code: 0, result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ code: 500, message: "An error occurred" });
  }
});

router.get("/5", async (req, res) => {
  const service5 = new Exam5Service();
  try {
    let result = await service5.exec();
    res.json({ code: 0, result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ code: 500, message: "An error occurred" });
  }
});

module.exports = router;
