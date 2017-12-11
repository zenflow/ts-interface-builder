export ICacheItem = t.iface([], {
  "key": "string",
  "value": "any",
  "size": "number",
  "tag?": "string",
});
export ILRUCache = t.iface([], {
  "capacity": "number",
  "set": t.func([{"item": "ICacheItem"}, {"overwrite?": "boolean"}], "boolean"),
  "get": t.func([{"key": "string"}], "ICacheItem"),
});
export MyType = t.union("boolean", "number", "ILRUCache");
export ISampling = t.iface(["ICacheItem"], {
  "xstring": "string",
  "xstring2": "string",
  "xany": "any",
  "xnumber": "number",
  "xnumber2?": "number",
  "xnull": "null",
  "xMyType": "MyType",
  "xarray": t.array("string"),
  "xarray2": t.array("MyType"),
  "xtuple": t.tuple("string", "number"),
  "xunion": t.union("number", "null"),
  "xiface": t.iface([], {
    "foo": "string",
    "bar": "number",
  }),
  "xfunc": t.func([{"price": "number"}, {"quantity": "number"}], "number"),
  "xfunc2": t.func([{"price": "number"}, {"quantity?": "number"}], "number"),
});
