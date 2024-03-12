const express = require("express");
const sharp = require("sharp");
const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  if (req.method === "OPTIONS") res.sendStatus(200);
  else next();
});

app.get("/", function (req, res, next) {
  res.send("api working!");
});

app.get("/api", async (req, res, next) => {
  try {
    const {
      width = 100,
      height = 100,
      text = "Image",
      backgroundColor = "#dde3e9",
      textColor = "#eff1f3",
      fontSize = "medium",
    } = req.query;

    // Chuyển màu từ hex thành RGB
    const hexToRgb = (hex) => {
      return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16),
      };
    };

    // Màu nền và màu chữ cái
    const bgRgb = hexToRgb(backgroundColor); // Nền mặc định là trắng

    // Tạo ảnh placeholder
    const image = await sharp({
      create: {
        width: parseInt(width),
        height: parseInt(height),
        channels: 4,
        background: { r: bgRgb.r, g: bgRgb.g, b: bgRgb.b, alpha: 1 },
      },
    })
      .png()
      .composite([
        {
          // Thêm văn bản lên ảnh
          input: {
            text: {
              text: `<span foreground="${textColor}" font_size="${fontSize}" >${text}</span>`,
              width: parseInt(width) - 20,
              height: parseInt(height) - 50,
              wrap: "word",
              align: "center",
              rgba: true,
            },
          },
        },
      ])
      .toBuffer();

    res.set("Content-Type", "image/png").send(image);
  } catch (error) {
    res.send(error);
  }
});
app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
