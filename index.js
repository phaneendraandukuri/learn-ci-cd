const app = require("./src/app");
const PORT = process.env.PORT || 5004;

app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`));
