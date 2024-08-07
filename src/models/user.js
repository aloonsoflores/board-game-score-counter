import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Si existe un modelo con el mismo nombre, lo usamos; si no, lo creamos.
const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel;
