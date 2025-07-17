const blockContent = {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      type: "block"
    },
    {
      type: "image",
      options: { hotspot: true }
    },
    // Elimina esto si no tienes el tipo "code" definido globalmente:
    // {
    //   type: "code"
    // }
  ]
}

export default blockContent