// prismaの読み込み
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require("express")
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("listening on localhost 3000")
})


// corsをインポート
const cors = require('cors')

// corsをインポートして、アプリケーションに適用させる記述
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// 全ジャンルの取得処理
app.get("/genres", async(req, res) => {
  try {
  const AllGenres = await prisma.genre.findMany();
  res.json(AllGenres)
  } catch(error) {
  console.log(error)
  }
})

app.get("/tasks", async(req, res) => {
  try {
    const AllTasks = await prisma.task.findMany();
    res.json(AllTasks)
  } catch(error) {
    console.log(error)
  }
})

app.get("/genres", async (_, res) => {
  try {
    const AllGenre = await prisma.genre.findMany();
    res.json(AllGenre)
  } catch(error) {
    console.log(error)
  }
})