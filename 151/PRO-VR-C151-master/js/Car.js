AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "./assets/car/scene.gltf" }
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: -10, y: 0, z: 90 };
    const rotation = { x: 0, y: 270, z: 0 };
    const scale = { x: 700, y: 700, z: 700};
    this.el.setAttribute("position", position);
    this.el.setAttribute("scale", scale);
    this.el.setAttribute("rotation", rotation);
  }
});
