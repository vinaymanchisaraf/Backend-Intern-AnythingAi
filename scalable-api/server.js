const User = require('./src/models/User');
const bcrypt = require('bcryptjs');

async function createDefaultUser() {
  const exists = await User.findOne({ email: "admin@test.com" });
  if (!exists) {
    const hashed = await bcrypt.hash("123456", 10);
    await User.create({
      name: "Admin",
      email: "admin@test.com",
      password: hashed,
      role: "admin"
    });
    console.log("Default admin created");
  }
}

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("DB Connected");
  await createDefaultUser();
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
