const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  handlebars.engine({
    layoutsDir: __dirname + "/views",
  })
);
app.use(express.static("public"));
app.get("/", (req, res) => {
  const data = {
    templateTitle: {
      messageTitle: "export message",
      exportDate: "2024-03-18",
      conversationProperty:
        "19 Australian Alps Walking Track, Cotter River, ACT",
    },
    messages: {
      sendDate: "2024-03-18",
      sendTime: "10:00 AM",
      senderName: "John Doe",
      senderEmail: "john.doe@example.com",
      receiverTo: {
        receiverToName: "Jane Smith",
        receiverToEmail: "jane.smith@example.com",
      },
      receiverCc: [
        {
          receiverCcName: "Jane Smith",
          receiverCcEmail: "jane.smith@example.com",
        },
        {
          receiverCcName: "Jane Smith",
          receiverCcEmail: "jane.smith@example.com",
        },
      ],
      receiverBcc: [
        {
          receiverBccName: "Jane Smith",
          receiverBccEmail: "jane.smith@example.com",
        },
        {
          receiverBccName: "Jane Smith",
          receiverBccEmail: "jane.smith@example.com",
        },
      ],
      messageBody: `Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a
        type specimen book.`,
      attachmentName: ["attachment.pdf", "newimage1abcd.png"],
    },
  };
  res.render("main", { data: data });
});
app.listen(port, () => console.log(`App listening to port ${port}`));
