minetest_types
---

[Minetest API](https://dev.minetest.net/Main_Page) definitions for usage with [`tstl`](https://github.com/Perryvw/TypescriptToLua)

The initial version of this definitions was automatically generated using the documentation from the official wiki. Manual curation is on process.

Because of this the api definition is already usable, but the type quiality has a lot to improve. If you find that a method is not exposed or that its signature is not correct or can be improved, please, open a PR with the changes.

Using it
--

Minetest oficial api uses Lua. To use TypeScript for modding you must transpile it to Lua first. [`TypescriptToLua`](https://github.com/Perryvw/TypescriptToLua) enables you to write TypeScript code, then transpile to Lua.

Once you have a basic project going on you can install this dependency:

```
npm i minetest_types
```

And that's it, a new global module `minetest` will become available with all the Minetest goodies.


