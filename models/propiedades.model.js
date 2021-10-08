module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      tipo: String,
      estrato: Number,
      estado: String,
      precio: Number, 
      disponible: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Propiedad = mongoose.model("propiedad", schema);
  return Propiedad;
};