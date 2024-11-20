//로그인 페이지
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const mysql = require("mysql");
const db_config = require("../config/db_config.json");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: db_config.host,
  user: db_config.user,
  database: db_config.database,
  port: db_config.port,
  debug: false,
});

router.post("/process/login", (req, res) => {
  console.log("/login 호출됨", req.body);
  const paramCustomerID = req.body.customer_id;
  const paramPassword = req.body.password;

  console.log("로그인 요청입니다. " + paramCustomerID + " " + paramPassword);
  pool.getConnection((err, conn) => {
    if (err) {
      console.log("MySQL Connection Error", err);
      if (conn) conn.release();
      res.status(500).json({ success: false, message: "DB 서버 연결 실패" });
      return;
    }
    conn.query(
      "SELECT * FROM Customers WHERE CustomerID = ?",
      [paramCustomerID],
      async (err, rows) => {
        conn.release();
        if (err) {
          console.dir(err);
          res.status(500).json({ success: false, message: "Query 실패" });
          return;
        }

        if (rows.length > 0) {
          const user = rows[0];
          const match = await bcrypt.compare(paramPassword, user.Password);
          if (match) {
            console.log(
              "아이디 [%s], 패스워드가 일치하는 이름 [%s] 찾음",
              paramCustomerID,
              user.CustomerNickname
            );
            req.session.user = {
            customer_id: user.CustomerID,
            customer_nickname: user.CustomerNickname,
            authorized: true,
            };
            res.json({ success: true });
          } else {
            console.log("비밀번호 [%s], 패스워드가 일치하지 않음", paramPassword);
            res
              .status(401)
              .json({ success: false, message: "패스워드가 일치하지 않음" });
          }
        } else {
          console.log("아이디 [%s], 패스워드가 일치하는 아이디 없음", paramCustomerID);
          res.status(401).json({
            success: false,
            message: "아이디 또는 패스워드가 일치하지 않음",
          });
        }
      }
    );
  });
});
router.use("/loginpage", router);
module.exports = router;