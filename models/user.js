module.exports = mongoose => {
    let schema = mongoose.Schema(
      {
        nombre: String,
        password: Number,
        correo: String,
 
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Usuario = mongoose.model("usuario", schema);
    return Usuario;
  };