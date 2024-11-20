const express = require("express");
const mysql = require("mysql");
const path = require("path");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const db_config = require("./config/db_config.json");
const app = express();

// MySQL 세션 스토어 옵션
const sessionStoreOptions = {
    host: db_config.host,
    port: db_config.port,
    user: db_config.user,
    database: db_config.database,
  };

const sessionStore = new MySQLStore(sessionStoreOptions);

// URL을 인코딩하는 코드
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const sessionMiddleware = session({
  key: "session_cookie_name",
  secret: "your_secret_key",
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
});
app.use(sessionMiddleware);

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "../front-end/build")));
app.use(express.static(path.join(__dirname, "public")));
