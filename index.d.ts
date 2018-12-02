declare global {
  /**
   *  Helper function which dumps a human-readable version of a value.
   *  If the value is simple and well-formed, this also produces syntax which could be used directly in Lua source code.
   *
   *  Parameters:
   *
   *      obj — The table or other value to print.
   *      indent — The indent field specifies a indentation string,
   *               it defaults to a tab. Use the empty string to disable indentation.
   *
   *  For tables this performs a recursive deep traversal.
   *  Loops (such as the table containing a reference to itself) are detected,
   *  keeping the function from looping infinitely.
   *  Values that have already been seen are printed as <circular reference>.
   *
   *  For values that cannot be readily printed in Lua syntax,
   *  another placeholder such as <userdata> or <function> is printed.
   */
  function dump(obj: any, indent?: number): string;

  /**
   *  Returns object serialized as a string, displaying values in a line-per-value format.
   */
  function dump2(obj: any): string;

  namespace minetest {

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.add_entity
     *
     *  # Description
     *  Spawns Lua entitiy at pos. Returns ObjectRef or nil if failed.
     *
     *  # Parameters
     *  1: List of 3 vertices (x, y, z)
     *  2: Entity name
     *  3: Optional static data for the entity
     *
     *  # Examples
     *  ```lua
     *  local obj = minetest.add_entity({x=0, y=10, z=0}, "mobs:sheep", {naked = true})
     *  if obj then
     *      obj:setacceleration({x=0, y=-10, z=0})
     *  end
     *  ```
     */
    /* tslint:enable */
    function add_entity(pos: Position, name: string, data: LuaEntityProperties): ObjectRef | null;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.add_item
     *
     *  # Description
     *  Spawns item in the world at pos. name is ItemStack, itemstring or table. Returns ObjectRef or nil if failed.
     *
     *  # Parameters
     *  1: List of 3 vertices (x, y, z)
     *  2: Item name
     *
     *  # Examples
     *  ```lua
     *  minetest.add_item({x=0, y=10, z=0}, "default:wood")
     *  ```
     *
     */
    /* tslint:enable */
    function add_item(pos: Vector3D, item: Item): ObjectRef | null;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.add_node_level
     *
     *  # Description
     *  Increases the level of leveled node (water, snow etc.) by level.
     *  If totallevel > maxlevel it returns the rest (total - max).
     *  Can be negative to decrease.
     *
     *  # Parameters
     *  1: List of 3 vertices (x, y, z)
     *  2: Node level int 0 - 63 (default = 1)
     *
     *  # Examples
     *  ```lua
     *  blockpos = {x=0, y=50, z=0}
     *  minetest.place_node(blockpos, "default:water")
     *  minetest.add_node_level(blockpos, 2)
     *  ```
     *
     */
    /* tslint:enable */
    function add_node_level(pos: Vector3D, level: number): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.add_particle
     *
     *  # Description
     *  Spawns a particle at the specified position. If you want to spawn multiple particles, use minetest.add_particlespawner.
     *
     *  # Parameters
     *  1: Table containing 8/9 items:
     *   pos starting position of the particle
     *   velocity particle velocity
     *   acceleration particle acceleration
     *   expirationtime particle disappears after <expirationtime> seconds
     *   size particle size in meters
     *   collisiondetection true if should collide with solid nodes, false if not
     *   collision_removal If it's set to true, particles are removed when colliding (requires collisiondetection).
     *   vertical limit to vertical axis (useful for rain)
     *   glow specify particle self-luminescence in darkness (optional)
     *   texture particle texture
     *   animation specifies how to animate the particle texture (optional)
     *   playername If specified, the particle is only spawned for the player with this name.
     *
     *  # Examples
     *  ```lua
     *  minetest.add_particle({
     *  	pos = {x=0, y=0, z=0},
     *  	velocity = {x=0, y=0, z=0},
     *  	acceleration = {x=0, y=0, z=0},
     *  	expirationtime = 1,
     *  	size = 1,
     *  	collisiondetection = false,
     *  	vertical = false,
     *  	texture = "default_wood.png",
     *  	playername = "singleplayer"
     *  })
     *  ```
     */
    /* tslint:enable */
    function add_particle(particle_definition: ParticleDefinition): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.add_particlespawner
     *
     *  # Description
     *  Add a particlespawner, an object that spawns an amount of particles over time.
     *
     *  # Parameters
     *  1: List containing 16 items:
     *   amount amount of particles
     *   time particle spawner stops after <time> seconds, use 0 for infinite lifespan
     *   minpos minimal position
     *   maxpos maximal position
     *   minvel minimal velocity
     *   maxvel maximal velocity
     *   minacc minimal acceleration
     *   maxacc maximal acceleration
     *   minexptime minimal expiration time
     *   maxexptime maximal exploration time
     *   minsize minimal particle size
     *   maxsize maximal particle size
     *   colissiondetection if true particles collide with solid blocks, if false they do not
     *   vertical limit particles to vertical axis only (useful for rain)
     *   texture particle texture
     *   playername spawn particles only for client
     *
     *  # Examples
     *  ```lua
     *  minetest.add_particlespawner({
     *  	amount = 1,
     *  	time = 1,
     *  	minpos = {x=0, y=0, z=0},
     *  	maxpos = {x=0, y=0, z=0},
     *  	minvel = {x=0, y=0, z=0},
     *  	maxvel = {x=0, y=0, z=0},
     *  	minacc = {x=0, y=0, z=0},
     *  	maxacc = {x=0, y=0, z=0},
     *  	minexptime = 1,
     *  	maxexptime = 1,
     *  	minsize = 1,
     *  	maxsize = 1,
     *  	collisiondetection = false,
     *  	vertical = false,
     *  	texture = "image.png",
     *  	playername = "singleplayer"
     *  })
     *  ```
     */
    /* tslint:enable */
    function add_particlespawner(particlespawner_definition: ParticleSpawnerDefinition): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.after
     *
     *  # Description
     *  This calls a function after time seconds. It can also be used to add a function to the end of the queue of functions becoming executed
     *  by minetest.
     *  param is optional; to pass multiple parameters, pass a table.
     *
     *  # Parameters
     *  1: Time that has to pass for the function to be ran
     *  2: Function
     *  3: Optional - parameters to the function, use a list for multiple
     *
     *  # Examples
     *  ```lua
     *  local pos = {x=1,y=2,z=3}
     *  local str = "hello world"
     *  minetest.after(3.5, function(pos, str) 
     *      print("3.5 seconds later, we can do " .. str .. " at " .. minetest.pos_to_string(pos))
     *  end, pos, str)
     *  ```
     */
    /* tslint:enable */
    function after<T>(time: number, func: (param?: T) => void, param?: T): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.auth_reload
     *
     *  # Description
     *  Calls minetest.get_auth_handler().reload() to reload authentication data from auth.txt.
     *
     *  # Parameters
     *  None
     *
     *  # Examples
     *  ```lua
     *  minetest.auth_reload()
     *  ```
     *
     */
    /* tslint:enable */
    function auth_reload(): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.ban_player
     *
     *  # Description
     *  Add a player to the banlist.
     *
     *  # Parameters
     *  1: Player name
     *
     *  # Examples
     *  ```lua
     *  minetest.ban_player("Zatherz")
     *  ```
     */
    /* tslint:enable */
    function ban_player(name: string): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.chat_send_all
     *
     *  # Description
     *  Send a chat message to all players.
     *
     *  # Parameters
     *  1: Text of the message
     *
     *  # Examples
     *  ```lua
     *  minetest.chat_send_all("Hello World!")
     *  ```
     */
    /* tslint:enable */
    function chat_send_all(text: string): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.chat_send_player
     *
     *  # Description
     *  Send a chat message to a specific player.
     *
     *  # Parameters
     *  name name of the player
     *  message message to send
     *
     *  # Examples
     *  ```lua
     *    Send a message to player "foobar" 
     *  ```
     */
    /* tslint:enable */
    function chat_send_player(name: string, message: string): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.check_for_falling
     *
     *  # Description
     *  Helper function which causes nodes to detach (drop as items) or fall, in the case of falling nodes. This code not only makes the
     *  node at pos fall or drop, but also adjacent nodes that needs to fall or drop. This can potentially update thousands of nodes with
     *  a single call to this function.
     *
     *  # Parameters
     *  pos the position of the node to check 
     *
     *  # Examples
     *  ```lua
     *  minetest.check_for_falling({x = 0, y = 0, z = 0})
     *  ```
     */
    /* tslint:enable */
    function check_for_falling(pos: Vector3D): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.check_player_privs
     *
     *  # Description
     *  Check privileges of a player.
     *  Returns a boolean and a list of missing privileges.
     *
     *  # Parameters
     *  1: Player name
     *  2: List of boolean permissions
     *
     *  # Examples
     *  ```lua
     *  local can_access = minetest.check_player_privs("foobar", {server=true})
     *  ```
     */
    /* tslint:enable */
    function check_player_privs(name: string, privs: {[k: string]: boolean}): [boolean, [string]];

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.clear_craft
     *
     *  # Description
     * Will erase existing craft based either on output item or on input recipe.
     * Specify either output or input only. If you specify both, input will be ignored.
     * For input use the same recipe table syntax as for `minetest.register_craft(recipe)`.
     * For output specify only the item, without a quantity.
     * If no erase candidate could be found, Lua exception will be thrown.
     * Warning! The type field ("shaped","cooking" or any other) will be ignored if the recipe contains output.
     * Erasing is then done independently from the crafting method.
     *
     *  # Parameters
     *  craft name of the recipe to be deleted
     *
     *  # Examples
     *  TODO: Provide examples
     *
     */
    /* tslint:enable */
    function clear_craft(recipe: string): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.clear_objects
     *
     *  # Description
     *  Deletes all objects in the environment.
     *
     *  # Parameters
     *  1: An optional table containing the field mode
     *
     *  # Examples
     *  ```lua
     *  minetest.log("action", "Clearing objects, this may take a while and you will experience timeouts.")
     *  minetest.clear_objects({mode="full"})
     *  ```
     */
    /* tslint:enable */
    function clear_objects(options?: {mode: 'full' | 'quick' }): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.clear_registered_biomes
     *
     *  # Description
     *  Clears all biomes currently registered.
     *
     *  # Examples
     *  ```lua
     *  minetest.clear_registered_biomes()
     *  ```
    /* tslint:enable */
    function clear_registered_biomes(): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.clear_registered_decorations
     *
     *  # Description
     *  Clears all decorations currently registered.
     *
     *  # Examples
     *  ```lua
     *  minetest.clear_registered_decorations()
     *
     */
    /* tslint:enable */
    function clear_registered_decorations(): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.clear_registered_ores
     *
     *  # Description
     *  Clears all ores currently registered.
     *
     *  # Examples
     *  ```lua
     *  minetest.clear_registered_ores()
     *  ```
     */
    /* tslint:enable */
    function clear_registered_ores(): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.clear_registered_schematics
     *
     *  # Description
     *  Clears all schematics currently registered.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.clear_registered_schematics()
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.clear_registered_schematics()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function clear_registered_schematics(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.colorize
     *
     *  # Description
     *  Adds color escape sequence around the given text, allowing to send colored text to formspecs (maybe more).
     *
     *  # Parameters
     *  1: colorstring of the desired color (#RGB, #RGBA, #RRGGBB, #RRGGBBAA or named color according to CSS colors)
     *  2: text to color
     *
     *  # Examples
     *  ```lua
     *  local my_label = "label[1,1;Test " .. minetest.colorize("#EE0", "colored") .. "]"
     *  ```
     */
    /* tslint:enable */
    function colorize(color: string, text: string): string;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.compress
     *
     *  # Description
     * Returns compressed_data.
     * Compress a string of data.
     *  `method` is a string identifying the compression method to be used.
     * Supported compression methods:
     *  Deflate (zlib): "deflate"
     * `...` indicates method-specific arguments. Currently defined arguments are:
     * Deflate: `level` - Compression level, 0-9 or nil.
     *
     * You can use this function when saving custom files to disk for reduced disk usage.
     * Since it's compressing, you can decide to use minetest.serialize
     * without worrying about all those redundant whitespaces.
     * Do not use minetest.compress for meta because metadata, entity information, etc.
     * are all already compressed in the map and manually interleaved compression is inefficient.
     */
    function compress(data: any, method?: 'deflate', ...compresion_opts: any[]): string;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.create_detached_inventory
     *
     *  # Description
     *  Returns InvRef.
     *  TODO: How about something more descriptive?
     *
     *  # Examples
     *  ```lua
     *  local inv = minetest.create_detached_inventory("my_global_inventory", {
     *      -- allow_* - return value is the number of items allowed to move, or -1 to copy the stack instead of move
     *   
     *      -- Called when a player wants to move items inside the inventory
     *      allow_move = function(inv, from_list, from_index, to_list, to_index, count, player) end,
     *   
     *      -- Called when a player wants to put items into the inventory
     *      allow_put = function(inv, listname, index, stack, player) end,
     *   
     *      -- Called when a player wants to take items out of the inventory
     *      allow_take = function(inv, listname, index, stack, player) end,
     *   
     *      -- on_* - no return value
     *      -- Called after the actual action has happened, according to what was allowed.
     *      on_move = function(inv, from_list, from_index, to_list, to_index, count, player) end,
     *      on_put = function(inv, listname, index, stack, player) end,
     *      on_take = function(inv, listname, index, stack, player) end,
     *  })
     *  ```
     */
    /* tslint:enable */
    function create_detached_inventory(name: string, options: {
      allow_move?: (
        inv: InvRef,
        from_list: string,
        from_index: number,
        to_list: string,
        to_index: number,
        count: number,
        player: PlayerObject,
      ) => number;
      allow_put?: (
        inv: InvRef,
        listname: string,
        index: number,
        stack: ItemStack,
        player: PlayerObject,
      ) => number;
      allow_take?: (
        inv: InvRef,
        listname: string,
        index: number,
        stack: ItemStack,
        player: PlayerObject,
      ) => number;
      on_move?: (
        inv: InvRef,
        from_list: string,
        from_index: number,
        to_list: string,
        count: number,
        player: PlayerObject,
      ) => void;
      on_put?: (
        inv: InvRef,
        listname: string,
        index: number,
        stack: ItemStack,
        player: PlayerObject,
      ) => void;
      on_take?: (
        inv: InvRef,
        listname: string,
        index: number,
        stack: ItemStack,
        player: PlayerObject,
      ) => void;
    }): InvRef;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.create_schematic
     *
     *  # Description
     *   Create a schematic from the volume of map specified by the box formed by p1 and p2.
     *   Apply the specified probability values to the specified nodes in probability_list.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.create_schematic(p1, p2, probability_list, filename, slice_prob_list)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function create_schematic(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.debug
     *
     *  # Description
     *  Same as minetest.log(table.concat({...}, "\t")).
     *  Input is printed to stderr and the logfile.
     *
     *  # Examples
     *  ```lua
     *  local a = 1
     *  local b = (a == 2)
     *  minetest.debug("Values:", a, b)
     *  ```
     */
    /* tslint:enable */
    function debug(...args: any[]): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.decode_base64
     *
     *  # Description
     *  Available in 0.4.14-dev+
     *
     *  # Parameters
     *  text base64 encoded string
     *
     *  # Examples
     *  ```lua
     *  minetest.decode_base64('c3RyaW5nIGluIGJhc2U2NA==')
     *  ```
     */
    /* tslint:enable */
    function decode_base64(text: string): string;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.decompress
     *
     *  # Description
     *  Returns data.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     */
    /* tslint:enable */
    function decompress(data: string, method?: string): string;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.delete_area
     *
     *  # Description
     *  Deletes all mapblocks in the area from pos1 to pos2, inclusive.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide working examples
     *  ```
     */
    /* tslint:enable */
    function delete_area(pos1: Vector3D, pos2: Vector3D): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.delete_particlespawner
     *
     *  # Description
     *   Deletes ParticleSpawner with id (return value from add_particlespawner)
     *   If playername is specified, only deletes on the player's client, otherwise on all clients
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     */
    /* tslint:enable */
    function delete_particlespawner(id: string, player_name: string): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.deserialize
     *
     *  # Description
     *  Convert a string returned by minetest.serialize() into a table. String is loaded in an empty sandbox environment. Will load functions,
     *  but they cannot access the global environment.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  deserialize('return { ["foo"] = "bar" }') → {foo='bar'}
     *  deserialize('print("foo")') → nil (function call fails)
     *  ```
     */
    /* tslint:enable */
    function deserialize<T>(str: string): T;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.dig_node
     *
     *  # Description
     *  Digs node at pos with the same effect that a player would cause.
     *
     *  # Examples
     *  ```lua
     *  minetest.dig_node({x=1, y=2, z=3})
     *  ```
     */
    /* tslint:enable */
    function dig_node(pos: Vector3D): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.dir_to_facedir
     *
     *  # Description
     *  Convert a vector to a facedir value, used in param2 for paramtype2 = "facedir".
     *  It also takes an optional parameter that, when present and not nil/false, will make it take the y component of dir into account.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  facedir = minetest.dir_to_facedir({x=0,y=0,z=1})
     *  -- facedir == 0
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.dir_to_facedir({dir}, [is6d])
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function dir_to_facedir(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.dir_to_wallmounted
     *
     *  # Description
     *  Convert a vector to a wallmounted value, used for paramtype2 = "wallmounted"
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local wallmounted = minetest.dir_to_wallmounted({x=0,y=0,z=1})
     *  -- wallmounted == 4
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.dir_to_wallmounted({dir})
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function dir_to_wallmounted(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.display_chat_message
     *
     *  # Description
     *  TODO: Provide description
     *
     *  # Parameters
     *  text the text to show in the chat
     *
     *  # Examples
     *  ```lua
     *  minetest.display_chat_message("Hello, world!")
     *  ```
     */
    /* tslint:enable */
    function display_chat_message(text: string): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.do_item_eat
     *
     *  # Description
     *  returns left over ItemStack
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.do_item_eat(hp_change, replace_with_item, itemstack, user, pointed_thing)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function do_item_eat(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.emerge_area
     *
     *  # Description
     *   queues all mapblocks in the area from pos1 to pos2, inclusive, for emerge
     *   i.e. asynchronously loads blocks from disk, or if inexistent, generates them
     *   TODO: What is merge?
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     */
    /* tslint:enable */
    function emerge_area(pos1: Vector3D, post2: Vector3D): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.encode_base64
     *
     *  # Description
     *  Available in 0.4.14-dev+
     *
     *  # Parameters
     *  input string to encode
     *
     *  # Examples
     *  ```lua
     *  minetest.encode_base64('string to encode')
     *  ```
     */
    /* tslint:enable */
    function encode_base64(input: string): string;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.explode_scrollbar_event
     *
     *  # Description
     *   Returns a table, e.g. {type="CHG", value=500}
     *   type: "INV" (something failed), "CHG" (has been changed) or "VAL" (not changed)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.explode_scrollbar_event(string)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function explode_scrollbar_event(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.explode_table_event
     *
     *  # Description
     *   Returns a table, e.g. {type="CHG", row=1, column=2}
     *   type: "INV" (no row selected), "CHG" (selected) or "DCL" (double-click)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.explode_table_event(string)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function explode_table_event(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.explode_textlist_event
     *
     *  # Description
     *   Returns a table, e.g. {type="CHG", index=1}
     *   type: "INV" (no row selected), "CHG" (selected) or "DCL" (double-click)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  Here is a real-world example with a code snippet from L-System Tree Utility 1.0.0, a mod providing a frontend to manage L-system
     *  trees:
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.explode_textlist_event(string)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function explode_textlist_event(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.facedir_to_dir
     *
     *  # Description
     *  Convert a facedir value to a vector, which points out of the back of a node.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  dir = minetest.facedir_to_dir(0)
     *  -- dir == {0, 0, 1}
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.facedir_to_dir(facedir)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function facedir_to_dir(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.find_node_near
     *
     *  # Description
     *  Finds a node near pos. radius is a integer value. nodenames is either a string or a table of strings, direct nodenames and "group:groupname"
     *  are supported.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.find_node_near({x=0, y=0, z=0}, 4, {"group:water"})
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.find_node_near(pos, radius, nodenames)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function find_node_near(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.find_nodes_in_area
     *
     *  # Description
     *  Finds node in the area from minp to maxp. nodenames is either a string or a table of strings, direct nodenames and "group:groupname"
     *  are supported.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.find_nodes_in_area({x=-4, y=-4, z=-4}, {x=4, y=4, z=4}, {"group:water"})
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.find_nodes_in_area(minp, maxp, nodenames)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function find_nodes_in_area(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.find_path
     *
     *  # Description
     *  Returns table containing path
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.find_path(pos1, pos2, searchdistance, max_jump, max_drop, algorithm)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function find_path(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.forceload_block
     *
     *  # Description
     *   forceloads the block consisting the position pos (at https://github.com/minetest/minetest/blob/master/builtin/game/forceloading.lua
     *  pos be divided by 16 and rounded)
     *   returns true if the area could be forceloaded
     *   Please note that forceloaded areas are saved when the server restarts.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.forceload_block(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function forceload_block(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.forceload_free_block
     *
     *  # Description
     *  Stops forceloading the position pos.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.forceload_free_block(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function forceload_free_block(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.formspec_escape
     *
     *  # Description
     *  Escapes characters such as [ and ] that can not be used in formspecs.
     *  Returns the escaped string.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local code = "This should show up in a textarea []"
     *  meta:set_string("formspec", "size[7,7]"..
     *  	"textarea[1,1;5,5;code;;"..minetest.formspec_escape(code).."]")
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.formspec_escape(string)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function formspec_escape(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_all_craft_recipes
     *
     *  # Description
     *  Returns indexed table with all registered recipes for query item (node) or nil if no recipe was found 
     *  recipe entry table:
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print(dump(minetest.get_all_craft_recipes('default:torch')))
     *  -- {[1] = {["items"] = {[1] = "default:coal_lump", [2] = "default:stick"}, ["type"] = "normal", ["output"] = "default:torch
     *  4", ["width"] = 1}}
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_all_craft_recipes(query_item)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_all_craft_recipes(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_ban_description
     *
     *  # Description
     *  Gets the text explaining why a player was banned.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print("foobar was banned because: " .. minetest.get_ban_description("foobar"))
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_ban_description("ip_or_name")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_ban_description(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_ban_list
     *
     *  # Description
     *  Returns ban list (same as minetest.get_ban_description(""))
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print("Ban list: " .. minetest.get_ban_list())
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_ban_list()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_ban_list(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_connected_players
     *
     *  # Description
     *  Returns a list of ObjectRefs.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  for _,player in ipairs(minetest.get_connected_players()) do
     *  	local name = player:get_player_name()
     *  	minetest.chat_send_player(name, "Hello " .. name)
     *  end
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_connected_players()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_connected_players(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_content_id
     *
     *  # Description
     *  Returns an integer: 
     *  the internal content ID of name
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local c_air = minetest.get_content_id"air"
     *  print("Air has the content id: " .. tostring(c_air))
     *   
     *  local manip = minetest.get_voxel_manip()
     *  local emin, emax = manip:read_from_map(minp, maxp)
     *  local area = VoxelArea:new({MinEdge=emin, MaxEdge=emax})
     *  local data = manip:get_data()
     *  for z = minp.z, maxp.z do
     *     for y = minp.y, maxp.y do
     *        local vi = data:index(minp.x, y, z)
     *        for x = minp.x, maxp.x do
     *           --remove all nodes in the area - set to air
     *           data[vi] = c_air
     *           vi = vi + 1
     *        end
     *     end
     *  end
     *  manip:set_data(data)
     *  manip:write_to_map()
     *  manip:update_map()
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_content_id(name)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_content_id(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_craft_recipe
     *
     *  # Description
     *  Return the first recipe which output "item", a node or item type such as 'default:torch'. 
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print(dump(minetest.get_craft_recipe('default:torch')))
     *  -- {items = {1 = "default:stick", 0 = "default:coal_lump"}, type = "normal", width = 1}
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_craft_recipe("item")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_craft_recipe(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_craft_result
     *
     *  # Description
     *  input is a table describing the potential crafting inputs and context.  Its fields are:
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  output, decremented_input = minetest.get_craft_result({ method = "normal", width = 1, items = { ItemStack("default:coal_lump
     *  2"), ItemStack("default:stick 2") }})
     *  -- output.item:to_table() = {wear = 0, name = "default:torch", count = 4, metadata = ""}
     *  -- output.time = 0
     *  -- decremented_input.method = "normal"
     *  -- decremented_input.width = 1
     *  -- #decremented_input.items = 2
     *  -- decremented_input.items[1]:to_table() = {wear = 0, name = "default:coal_lump", count = 1, metadata = ""}
     *  -- decremented_input.items[2]:to_table() = {wear = 0, name = "default:stick", count = 1, metadata = ""}
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_craft_result(input)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_craft_result(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_current_modname
     *
     *  # Description
     *  Gets the current mod name.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print(minetest.get_current_modname())
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_current_modname()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_current_modname(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_day_count
     *
     *  # Description
     *  Returns the number of days that have passed in the game. Bears no relation to actual time, or seconds of time elapsed in the game.
     *  Days are counted by the number of times "midnight" has happened. If the /time is changed "backwards", it counts as one extra
     *  day in the day count.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_day_count()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_day_count(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_dig_params
     *
     *  # Description
     *  These are the parameters:
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_dig_params(groups, tool_capabilities[, time_from_last_punch])
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_dig_params(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_gametime
     *
     *  # Description
     *  Returns the time, in seconds, since the world was created
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_gametime()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_gametime(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_heat
     *
     *  # Description
     *  Returned the temperature at pos.
     *  The weather functions were dropped at Apr 18, 2014.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_heat(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_heat(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_humidity
     *
     *  # Description
     *  Returned the humidity at pos.
     *  The weather functions were dropped at Apr 18, 2014.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_humidity(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_humidity(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_inventory
     *
     *  # Description
     *  Gets an InvRef to access inventory methods.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local inv = minetest.get_inventory({type="player", name="foobar"})
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_inventory(location)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_inventory(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_item_group
     *
     *  # Description
     *  Get rating of a group of an item. (0 = not in group)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  if minetest.get_item_group("bags:small", "bag_slots") > 3 then
     *  	print("small bag has more than 3 bag slots")
     *  end
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_item_group("name", "group")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_item_group(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_mapgen_object
     *
     *  # Description
     *  Returns requested mapgen object if available (see Mapgen objects)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_mapgen_object(objectname)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_mapgen_object(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_meta
     *
     *  # Description
     *  Returns NodeMetaRef for node at pos.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local meta = minetest.get_meta({x=0, y=2, z=-3})
     *  meta:set_string("message", "Hello!")
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_meta(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_meta(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_mod_storage
     *
     *  # Description
     *  Returns the StorageRef of the current mod. This StorageRef can then be used by the mod to store and retrieve information in
     *  a similar fashion to NodeMetaRef. The information is persisted, so after a server restart the information is still available.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  Note: This method MUST be called during mod initialization! I.e. put it somewhere so that it runs when the mod is loaded such
     *  as at the top of init.lua. Calling get_mod_storage inside functions will return nil.
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_mod_storage()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_mod_storage(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_modnames
     *
     *  # Description
     *  Return a list of installed mods, sorted alphabetically.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local modnames = minetest.get_modnames()
     *  for i, name in ipairs(modnames) do
     *  	print("[Mod] " .. name)
     *  end
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_modnames()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_modnames(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_modpath
     *
     *  # Description
     *  Returns root mod directory location. Useful for loading additional .lua modules or static data from mod.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.log("action", "[MOD]"..minetest.get_current_modname().." -- loaded from "..minetest.get_modpath(minetest.get_current_modname()))
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_modpath("name")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_modpath(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_name_from_content_id
     *
     *  # Description
     *  Returns a string: 
     *  the name of the content with that content ID
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  This will print out the name of the node.:
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_name_from_content_id(content_id)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_name_from_content_id(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_node
     *
     *  # Description
     *  Gets the node at a specific location; returns {name="ignore", ...} for unloaded area.
     *  If the name is "ignore", the node is in an unloaded chunk, which may be generated yet. To get a node in an unloaded chunk, see example
     *  2↓
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local node = minetest.get_node(pos)
     *  node.param2 = dir_to_facedir(dir, true)
     *  minetest.set_node(pos, node)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_node(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_node(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_node_drops
     *
     *  # Description
     *  Returns list of item names. toolname should be either string or nil (bare hand).
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local itemstacks = minetest.get_node_drops("default:leaves")
     *  for _, itemname in ipairs(itemstacks) do
     *  	minetest.add_item({x=1,y=2,z=3}, itemname)
     *  end
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_node_drops("node name", "tool name")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_node_drops(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_node_group
     *
     *  # Description
     *  Get the rating of the group of a node. This is the number associated with the group in node definition.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_node_group(name, group)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_node_group(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_node_level
     *
     *  # Description
     *  Returns the level of a leveled node (water, snow)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_node_level(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_node_level(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_node_light
     *
     *  # Description
     *  Returns the node light level (0...15) at the given position at timeofday. If timeofday is nil then the current time is used.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print(minetest.get_node_light({x=0, y=0, z=0})
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_node_light(pos, timeofday)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_node_light(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_node_max_level
     *
     *  # Description
     *  Returns max available level for leveled node
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_node_max_level(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_node_max_level(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_node_or_nil
     *
     *  # Description
     *  This function does same as minetest.get_node, except that it returns nil if the corresponding mapblock is not loaded.
     *  It's implemented there (5.0.0-dev).
     *  You maybe want to use this together with vmanip to detect whether a mapblock is loaded, see below.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local function my_get_node(pos)
     *  	-- Get the node if it's loaded
     *  	local node = minetest.get_node_or_nil(pos)
     *  	if not node then
     *  		-- Load the map at pos and try again
     *  		minetest.get_voxel_manip():read_from_map(pos, pos)
     *  		node = minetest.get_node(pos)
     *  	end
     *  	-- If node.name is "ignore" here, the map probably isn't generated at pos.
     *  	return node
     *  end
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_node_or_nil(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_node_or_nil(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_node_timer
     *
     *  # Description
     *  Returns NodeTimerRef for the node at pos.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local timer = minetest.get_node_timer({x=0, y=-1, z=2})
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_node_timer(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_node_timer(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_objects_inside_radius
     *
     *  # Description
     *  Returns list of ObjectRefs for objects found within radius distance of position pos, including Players and LuaEntitySAOs.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local all_objects = minetest.get_objects_inside_radius({x=0, y=0, z=0}, 50)
     *  local players = {}
     *  local _,obj
     *  for _,obj in ipairs(all_objects) do
     *  	if obj:is_player() then
     *  		table.insert(players, obj)
     *  	end
     *  end
     *  print(#players .. " players found")
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_objects_inside_radius(pos, radius)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_objects_inside_radius(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_password_hash
     *
     *  # Description
     *  Convert a name-password pair to a password hash that minetest can use.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print(minetest.get_password_hash("foobar", "secret password"))
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_password_hash("name", "raw password")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_password_hash(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_perlin
     *
     *  # Description
     *  Constructs a PerlinNoise object with seed derived from the world's seed value.  This function must not be called until after
     *  the world is finished initializing, so it must be called during some kind of callback rather than at the top level mod initialization
     *  code.  The PerlinNoise constructor, on the other hand, may be called at any time since it does not depend on the world's seed.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local perlin = minetest.get_perlin(354, 3, 0.7, 100)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_perlin(seeddiff, octaves, persistence, scale)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_perlin(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_player_by_name
     *
     *  # Description
     *  Get the PlayerObject (ObjectRef) for the named player.
     *
     *  # Parameters
     *  name the name of the player
     *
     *  # Examples
     *  ```lua
     *  local player = minetest.get_player_by_name("singleplayer")
     *  if not player then
     *  	return -- Player is not online
     *  end
     *  player:set_pos({x=0, y=0, z=0})
     *  ```
     */
    /* tslint:enable */
    function get_player_by_name(name: string): PlayerObject;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_player_information
     *
     *  # Description
     *  Returns a table containing information about player peer:
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_player_information(playername)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_player_information(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_player_ip
     *
     *  # Description
     *  Returns the IP address string of the name of a player.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_player_ip(name)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_player_ip(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_player_privs
     *
     *  # Description
     *  Returns table {priv1=true, …}
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  if minetest.get_player_privs("foobar").interact then
     *     --codes
     *  end
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_player_privs("name")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_player_privs(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_player_radius_area
     *
     *  # Description
     *  Returns two position vectors representing a box of `radius` in each direction centered around the player corresponding
     *  to `player_name`
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_player_radius_area(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_pointed_thing_position
     *
     *  # Description
     *  Get position of a pointed_thing (that you can get from somewhere).
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local pos = minetest.get_pointed_thing_position(pointed, true)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_pointed_thing_position(pointed_thing, above)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_pointed_thing_position(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_position_from_hash
     *
     *  # Description
     *  Inverse transform of minetest.hash_node_position.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_position_from_hash(hash)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_position_from_hash(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_server_status
     *
     *  # Description
     *  Get server status string.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print(minetest.get_server_status())
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_server_status()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_server_status(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_server_uptime
     *
     *  # Description
     *  Get server uptime.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print(minetest.get_server_uptime())
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_server_uptime()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_server_uptime(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_timeofday
     *
     *  # Description
     *  Returns time of day.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print(minetest.get_timeofday() * 24000) --> 0...24000 (format of /time)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_timeofday()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_timeofday(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_us_time
     *
     *  # Description
     *  Returns time with microsecond precision.  This does not seem to be strictly related to game time or time of day in a meaningful
     *  way, but should be useful for taking differences in time measured during a single execution of the server.  For example, it can
     *  be useful for profiling mod performance.
     *  According to the benchmark test (see below) it works about twice as fast as os.clock.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local t0_us = minetest.get_us_time();
     *  -- ...
     *  local t1_us = minetest.get_us_time();
     *  local elapsed_time_in_seconds = (t1_us - t0_us)/1000000.0;
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_us_time()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_us_time(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_voxel_manip
     *
     *  # Description
     *  Return voxel manipulator (VoxelManip) object
     *  If p1 and p2 are given, it returns a voxel manipulator object with pre-loaded map.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  See VoxelManip example
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_voxel_manip([p1, p2])
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_voxel_manip(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.get_worldpath
     *
     *  # Description
     *  Useful for storing custom data.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  print(minetest.get_worldpath())
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.get_worldpath()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function get_worldpath(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.global_exists
     *
     *  # Description
     *  Checks if a global variable named name has been set, without triggering a warning.
     *
     *  # Parameters
     *   name - The name of the global variable.  This is a string, not a reference to the variable itself.  For example, to test for the existence
     *  of a variable my_global, use minetest.global_exists("my_global") (noting the use of quotes).
     *
     *  # Examples
     *  ```lua
     *  -- API namespace for mod "mymod"
     *  if not minetest.global_exists("mymod") then
     *     mymod = {}
     *  end
     *   
     *  function mymod.my_func(...)
     *     ...
     *  end
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.global_exists(name)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function global_exists(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.handle_node_drops
     *
     *  # Description
     *   pos — position
     *   drops — list of itemstrings
     *   digger — ObjectRef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  Taken from PilzAdam's item_drop mod.
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.handle_node_drops(pos, drops, digger)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function handle_node_drops(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.has_feature
     *
     *  # Description
     *   Returns bool, missing_features
     *   arg: string or table in format {foo=true, bar=true}
     *   missing_features: {foo=true, bar=true}
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.has_feature(arg)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function has_feature(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.hash_node_position
     *
     *  # Description
     *  Returns 48-bit integer.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  Implementation, taken from builtin/misc.lua.
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.hash_node_position(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function hash_node_position(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.hud_replace_builtin
     *
     *  # Description
     *   Replaces definition of a builtin hud element
     *   name: "breath" or "health"
     *   hud definition: definition to replace builtin definition
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.hud_replace_builtin(name, hud definition)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function hud_replace_builtin(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.inventorycube
     *
     *  # Description
     *  Returns a string for making an image of a cube (useful as an item image).
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  In minetest.register_node():
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.inventorycube("img1", "img2", "img3")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function inventorycube(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.is_protected
     *
     *  # Description
     *  Checks if the position is protected. Protection mods should override this.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  -- Checking a position
     *  local spawn_protected = minetest.is_protected({x=0, y=0, z=0}, playername)
     *   
     *  -- Overriding in protection mods
     *  old_is_protected = minetest.is_protected
     *  function minetest.is_protected(pos, name)
     *  	if not mymod:can_interact(pos, name) then
     *  		return true
     *  	end
     *  	return old_is_protected(pos, name)
     *  end
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.is_protected(pos, playername)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function is_protected(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.is_singleplayer
     *
     *  # Description
     *  Returns boolean.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.is_singleplayer()
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function is_singleplayer(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.is_yes
     *
     *  # Description
     *  Returns whether arg can be interpreted as yes
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.is_yes(arg)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function is_yes(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.item_drop
     *
     *  # Description
     *  Programmatically drops an item or stack of items in-world, mimicking the same effect as when the player drops items from inventory
     *  using the drop button (they Q key by default).  Some points to note:
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.item_drop(itemstack, dropper, pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function item_drop(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.item_eat
     *
     *  # Description
     *  Eat the item. replace_with_item can be nil.
     *  Returns a function for the on_use callback in the node, tool, or craft item definition table.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_node("default:apple", {
     *  	description = "Apple",
     *  	drawtype = "plantlike",
     *  	visual_scale = 1.0,
     *  	tiles ={"default_apple.png"},
     *  	inventory_image = "default_apple.png",
     *  	paramtype = "light",
     *  	sunlight_propagates = true,
     *  	walkable = false,
     *  	groups = {fleshy=3,dig_immediate=3},
     *  	on_use = minetest.item_eat(4),
     *  	sounds = default.node_sound_defaults(),
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.item_eat(hp_change, replace_with_item)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function item_eat(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.item_place
     *
     *  # Description
     *   itemstack — ItemStack
     *   placer — ObjectRef
     *   pointed_thing — pointed_thing
     *   param2 — overrides facedir and wallmounted param2 (only in 0.4.8+)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.item_place(itemstack, placer, pointed_thing, param2)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function item_place(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.item_place_node
     *
     *  # Description
     *  Place item as a node
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.item_place_node(itemstack, placer, pointed_thing, param2)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function item_place_node(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.item_place_object
     *
     *  # Description
     *  Place item as-is.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.item_place_object(itemstack, placer, pointed_thing)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function item_place_object(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.kick_player
     *
     *  # Description
     *  Available in 0.4.10+
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.kick_player(name, [reason])
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function kick_player(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.line_of_sight
     *
     *  # Description
     *  Returns true/false, pos
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.line_of_sight(pos1, pos2, stepsize)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function line_of_sight(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.log
     *
     *  # Description
     *  loglevel is one of "deprecated", "error", "action", "info", "verbose", if line is nil then line=loglevel.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.log("Mod loaded")
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.log("loglevel", ["line"])
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function log(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.node_dig
     *
     *  # Description
     *   pos — position
     *   node
     *   digger — ObjectRef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local old_node_dig = minetest.node_dig
     *  function minetest.node_dig(pos, node, digger)
     *  	if not areas.canInteract(pos, digger:get_player_name()) then
     *  		minetest.chat_send_player(digger:get_player_name(), "This area is protected by "..areas:getOwners(pos))
     *  		return	
     *  	else
     *  		return old_node_dig(pos, node, digger)
     *  	end
     *  end
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.node_dig(pos, node, digger)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function node_dig(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.node_punch
     *
     *  # Description
     *   pos — position
     *   node — node
     *   player — ObjectRef
     *   pointed_thing — pointed_thing (only in 0.4.10+)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.node_punch(pos, node, player, pointed_thing)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function node_punch(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.notify_authentication_modified
     *
     *  # Description
     *  Should be called by the authentication handler if privileges change.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.notify_authentication_modified("name")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function notify_authentication_modified(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.override_item
     *
     *  # Description
     *  Available in 0.4.10+
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.override_item("default:mese", {
     *      light_source = LIGHT_MAX,
     *      groups = {unbreakable=1},
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.override_item(name, redefinition)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function override_item(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.parse_json
     *
     *  # Description
     *  Returns something.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.parse_json("[10, {\"a\":false}]") -- returns {10, {a = false}}
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.parse_json(string[, nullvalue])
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function parse_json(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.place_node
     *
     *  # Description
     *  Place node with the same effects that a player would cause.
     *
     *  # Parameters
     *  1: List of 3 vertices (x, y, z)
     *  2: Node name
     *
     *  # Examples
     *  ```lua
     *  minetest.place_node({x=0, y=0, z=0}, {name="default:dirt"})
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.place_node(pos, node)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function place_node(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.place_schematic
     *
     *  # Description
     *   Places the schematic specified by schematic (see: Schematic specifier) at pos.
     *   Rotation can be "0", "90", "180", "270", or "random".
     *   If the rotation parameter is omitted, the schematic is not rotated.
     *   replacements = {["old_name"] = "convert_to", ...}
     *   force_placement is a boolean indicating whether nodes other than air and ignore are replaced by the schematic
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  The below snippet places the aspen tree from default at 10, 0, -10 with a random rotation, and not specific or general node replacements.
     *  Note that the trunk will therefore be placed at 12, 0, 8:
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.place_schematic(pos, schematic, rotation, replacements, force_placement)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function place_schematic(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.place_schematic_on_vmanip
     *
     *  # Description
     *  This method works in a similar fashion to minetest.place_schematic, but can be used with a VoxelManip for better performance
     *  when manipulating large amounts of nodes.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  The below snippet places the acacia tree from default at some terrain position with a random rotation when the data written
     *  at the voxelmanip index is dirt with dry grass. It does not do specific or general node replacements. Note that the schematic
     *  is offset by -4 in the x and z directions because the acacia tree is 9 by 9 in x and z:
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.place_schematic_on_vmanip(vm, pos, schematic, rotation, replacements, force_placement)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function place_schematic_on_vmanip(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.player_exists
     *
     *  # Description
     *  Checks if a player named name exists in the player database, regardless of whether this player is online or not.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_chatcommand("pm", {
     *      params = "Player, Message",
     *      description = "Send private message to player",
     *      func = function(name, param)
     *          local sendto, message = param:match("^(%S+)%s(.+)$")
     *   
     *          -- Check if the player actually exists
     *          if not minetest.player_exists(sendto) then
     *              return false, "Player " .. sendto .. " does not exist"
     *          end
     *   
     *          -- Need to loop connected players, as they are ObjectRefs
     *          for _,player in ipairs(minetest.get_connected_players()) do
     *              if sendto == player:get_player_name() then
     *                  minetest.chat_send_player(sendto, name .. " sent a PM: " .. message)
     *                  return true, "PM sent to "..sendto
     *              end
     *          end
     *   
     *          -- Player is not online, send email instead
     *          send_email(name, sendto, message)
     *          return true, "Player " .. sendto .. " not online, sent PM as email"
     *      end,
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.player_exists(name)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function player_exists(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.pos_to_string
     *
     *  # Description
     *   pos — position
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.pos_to_string(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function pos_to_string(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.privs_to_string
     *
     *  # Description
     *  Returns "priv1,priv2,…".
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_chatcommand("privs", {
     *  	params = "<name>",
     *  	description = "print out privileges of player",
     *  	func = function(name, param)
     *  		if param == "" then
     *  			param = name
     *  		end
     *  		minetest.chat_send_player(name, "Privileges of "..param..
     *  			": "..minetest.privs_to_string(minetest.get_player_privs(param), ' '))
     *  	end,
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.privs_to_string({privs})
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function privs_to_string(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.punch_node
     *
     *  # Description
     *  Punch a node with the same effects that a player would cause.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.punch_node({x=0, y=0, z=0})
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.punch_node(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function punch_node(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.raillike_group
     *
     *  # Description
     *  When defining a node, the connect_to_raillike group requires a numeric rating value, so that nodes with the same rating can connect
     *  together (like rails do when placing them next to each other). This function registers (if it does not exist) or retrieves (if
     *  it already exists) a rating value based on a name, and returns it. That name can be shared by multiple mods, so that all mods that
     *  use the same name will be assigned the same rating value.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  This code will create a node "my_mod:my_gunpowder" that will be able to connect to any nodes that used the name "gunpowder"
     *  to invoke this function, like the TNT mod in the Minetest game, but won't be able to connect to any nodes that used a different name,
     *  even if adjacent:
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.raillike_group("name")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function raillike_group(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.record_protection_violation
     *
     *  # Description
     *  This function calls functions registered with minetest.register_on_protection_violation.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.record_protection_violation(pos, name)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function record_protection_violation(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_abm
     *
     *  # Description
     *  The Active Block Modifier consists of a function that is executed at a specific interval for single nodes.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_abm{
     *          label = "lava cooling",
     *  	nodenames = {"group:lava"},
     *  	neighbors = {"group:water"},
     *  	interval = 1,
     *  	chance = 1,
     *  	action = function(pos)
     *  		minetest.set_node(pos, {name = "default:cobblestone"})
     *  	end,
     *  }
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_abm(abm_defintion_table)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_abm(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_alias
     *
     *  # Description
     *  name is converted to convert_to by the engine. This means that if the engine finds nodes with the name name in the world the node
     *  with the name convert_to is used instead.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  The map generator of the engine uses some nodenames for the output that are not registered. The default game registers aliases
     *  so the engine knows wich nodes to place there:
     *  In the versions of Minetest before 0.4 the nodenames havent prefixed the modname. To be able to load old maps with the new versions
     *  the legacy mod adds aliases to convert the nodenames:
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_alias("name", "convert_to")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_alias(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_authentication_handler
     *
     *  # Description
     *  See example below for reference.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local function read_auth_file()
     *  	local newtable = {}
     *  	local file, errmsg = io.open(minetest.auth_file_path, 'rb')
     *  	if not file then
     *  		minetest.log("info", minetest.auth_file_path.." could not be opened for reading ("..errmsg.."); assuming new world")
     *  		return
     *  	end
     *  	for line in file:lines() do
     *  		if line ~= "" then
     *  			local name, password, privilegestring = string.match(line, "([^:]*):([^:]*):([^:]*)")
     *  			if not name or not password or not privilegestring then
     *  				error("Invalid line in auth.txt: "..dump(line))
     *  			end
     *  			local privileges = minetest.string_to_privs(privilegestring)
     *  			newtable[name] = {password=password, privileges=privileges}
     *  		end
     *  	end
     *  	io.close(file)
     *  	minetest.auth_table = newtable
     *  	minetest.notify_authentication_modified()
     *  end
     *   
     *  local function save_auth_file()
     *  	local newtable = {}
     *  	-- Check table for validness before attempting to save
     *  	for name, stuff in pairs(minetest.auth_table) do
     *  		assert(type(name) == "string")
     *  		assert(name ~= "")
     *  		assert(type(stuff) == "table")
     *  		assert(type(stuff.password) == "string")
     *  		assert(type(stuff.privileges) == "table")
     *  	end
     *  	local file, errmsg = io.open(minetest.auth_file_path, 'w+b')
     *  	if not file then
     *  		error(minetest.auth_file_path.." could not be opened for writing: "..errmsg)
     *  	end
     *  	for name, stuff in pairs(minetest.auth_table) do
     *  		local privstring = minetest.privs_to_string(stuff.privileges)
     *  		file:write(name..":"..stuff.password..":"..privstring..'\n')
     *  	end
     *  	io.close(file)
     *  end
     *   
     *  minetest.builtin_auth_handler = {
     *  	get_auth = function(name)
     *  		assert(type(name) == "string")
     *  		-- Figure out what password to use for a new player (singleplayer
     *  		-- always has an empty password, otherwise use default, which is
     *  		-- usually empty too)
     *  		local new_password_hash = ""
     *  		-- If not in authentication table, return nil
     *  		if not minetest.auth_table[name] then
     *  			return nil
     *  		end
     *  		-- Figure out what privileges the player should have.
     *  		-- Take a copy of the privilege table
     *  		local privileges = {}
     *  		for priv, _ in pairs(minetest.auth_table[name].privileges) do
     *  			privileges[priv] = true
     *  		end
     *  		-- If singleplayer, give all privileges except those marked as give_to_singleplayer = false
     *  		if minetest.is_singleplayer() then
     *  			for priv, def in pairs(minetest.registered_privileges) do
     *  				if def.give_to_singleplayer then
     *  					privileges[priv] = true
     *  				end
     *  			end
     *  		-- For the admin, give everything
     *  		elseif name == minetest.setting_get("name") then
     *  			for priv, def in pairs(minetest.registered_privileges) do
     *  				privileges[priv] = true
     *  			end
     *  		end
     *  		-- All done
     *  		return {
     *  			password = minetest.auth_table[name].password,
     *  			privileges = privileges,
     *  		}
     *  	end,
     *  	create_auth = function(name, password)
     *  		assert(type(name) == "string")
     *  		assert(type(password) == "string")
     *  		minetest.log('info', "Built-in authentication handler adding player '"..name.."'")
     *  		minetest.auth_table[name] = {
     *  			password = password,
     *  			privileges = minetest.string_to_privs(minetest.setting_get("default_privs")),
     *  		}
     *  		save_auth_file()
     *  	end,
     *  	set_password = function(name, password)
     *  		assert(type(name) == "string")
     *  		assert(type(password) == "string")
     *  		if not minetest.auth_table[name] then
     *  			minetest.builtin_auth_handler.create_auth(name, password)
     *  		else
     *  			minetest.log('info', "Built-in authentication handler setting password of player '"..name.."'")
     *  			minetest.auth_table[name].password = password
     *  			save_auth_file()
     *  		end
     *  		return true
     *  	end,
     *  	set_privileges = function(name, privileges)
     *  		assert(type(name) == "string")
     *  		assert(type(privileges) == "table")
     *  		if not minetest.auth_table[name] then
     *  			minetest.builtin_auth_handler.create_auth(name, minetest.get_password_hash(name, minetest.setting_get("default_password")))
     *  		end
     *  		minetest.auth_table[name].privileges = privileges
     *  		minetest.notify_authentication_modified(name)
     *  		save_auth_file()
     *  	end,
     *  	reload = function()
     *  		read_auth_file()
     *  		return true
     *  	end,
     *  }
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_authentication_handler({handler})
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_authentication_handler(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_biome
     *
     *  # Description
     *  Registers a new biome. The biome properties are specified in the Biome definition (see below).
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_biome({biome definition})
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_biome(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_chatcommand
     *
     *  # Description
     *  Registers a chat command.
     *
     *  # Parameters
     *  1: Name of the command
     *  2: A list containing the following:
     *  params - string - Parameter info (used in /help)
     *  description - string - Command description (used in /help)
     *  privs - optional list of booleans - Require special privileges to run
     *  func - function - Function the command should execute: should return true for success and false for error along with a string message
     *   Note that the first param of func, name, is not necessarily the name of a player on the server, this case may happen with the irc
     *  mod.
     *
     *  # Examples
     *  ```lua
     *  minetest.register_chatcommand("test1", {
     *  	params = "",
     *  	description = "Test 1: Modify player's inventory view",
     *  	func = function(name, param)
     *  		local player = minetest.get_player_by_name(name)
     *  		if not player then
     *  			return false, "Player not found"
     *  		end
     *  		player:set_inventory_formspec(
     *  				"size[13,7.5]"..
     *  				"image[6,0.6;1,2;player.png]"..
     *  				"list[current_player;main;5,3.5;8,4;]"..
     *  				"list[current_player;craft;8,0;3,3;]"..
     *  				"list[current_player;craftpreview;12,1;1,1;]"..
     *  				"list[detached:test_inventory;main;0,0;4,6;0]"..
     *  				"button[0.5,7;2,1;button1;Button 1]"..
     *  				"button_exit[2.5,7;2,1;button2;Exit Button]"
     *  		)
     *  		return true, "Done."
     *  	end,
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_chatcommand("cmd", {chatcommand definition})
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_chatcommand(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_craft
     *
     *  # Description
     *  Registers a recipe for crafting. Crafting results can be gotten via minetest.get_craft_result(input), via minetest.get_craft_recipe(output).
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_craft({
     *  	output = "default:chest",
     *  	recipe = {
     *  		{"default:wood", "default:wood", "default:wood"},
     *  		{"default:wood", "", "default:wood"},
     *  		{"default:wood", "default:wood", "default:wood"}
     *  	}
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_craft({craft_recipe})
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_craft(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_craft_predict
     *
     *  # Description
     *  The same as minetest.register_on_craft, except that it is called before the player crafts, to make craft prediction, and
     *  it should not change anything.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_craft_predict(func(itemstack, player, old_craft_grid, craft_inv))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_craft_predict(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_craftitem
     *
     *  # Description
     *  Registers a craftitem.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_craftitem("test:test", {
     *  	description = "Testcraftitem",
     *  	inventory_image = "test_test.png",
     *   
     *  	on_drop = function(itemstack, dropper, pos)
     *  		-- Prints a random number and removes one item from the stack
     *  		minetest.chat_send_all(math.random())
     *  		itemstack:take_item()
     *  		return itemstack
     *  	end,
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_craftitem("name", {item_definition})
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_craftitem(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_decoration
     *
     *  # Description
     *  The decoration definition is a table containing the following fields:
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *    Simple decoration 
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_decoration(decoration definition)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_decoration(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_entity
     *
     *  # Description
     *  Registers a LuaEntity that can be spawned as a LuaEntitySAO using minetest.add_entity(...).
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_entity(entity_name, entity_definition)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_entity(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_globalstep
     *
     *  # Description
     *   dtime — float, time since the last global step.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local timer = 0
     *  minetest.register_globalstep(function(dtime)
     *  	timer = timer + dtime;
     *  	if timer >= 5 then
     *  		-- Send "Minetest" to all players every 5 seconds
     *  		minetest.chat_send_all("Minetest")
     *  		timer = 0
     *  	end
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_globalstep(function(dtime))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_globalstep(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_lbm
     *
     *  # Description
     *  The Loading Block Modifier consists of a function that is executed when the server loads nodes that match a passed filter.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  A cleanup LBM useful to execute after removal of the fire mod in order to clean up the world from the now unknown nodes:
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_lbm(lbm_defintion_table)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_lbm(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_node
     *
     *  # Description
     * Registers a new node named "name". The node properties are specified in the Node definition (see below).
     * Note that the node is not "created" immediately; it is stored in the
     * minetest.registered_nodes list to be processed when all the mods have been loaded.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     */
    /* tslint:enable */
    function register_node(name: string, definition: NodeDefinition): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_chat_message
     *
     *  # Description
     *  Called always when a player says something.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_chat_message(function(name, message)
     *  	if name == "singleplayer"
     *  	and message == "please grant me everything" then
     *  		minetest.set_player_privs(name, minetest.registered_privileges)
     *  		minetest.chat_send_player(name, "<thisguy> ok")
     *  	end
     *  end)
     *  ```
     */
    /* tslint:enable */
    function register_on_chat_message(callback: (name: string, message: string) => void): void;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_cheat
     *
     *  # Description
     *   Called when a player cheats
     *   cheat: {type="moved_too_fast"/"interacted_too_far"/"finished_unknown_dig"/"dug_unbreakable"/"dug_too_fast"}
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_cheat(func(ObjectRef, cheat))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_cheat(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_craft
     *
     *  # Description
     *   Called when player crafts something
     *   itemstack is the output
     *   old_craft_grid contains the recipe (Note: the one in the inventory is cleared)
     *   craft_inv is the inventory with the crafting grid
     *   Returns either an ItemStack, to replace the output, or nil, to not modify it
     *   IT DOESN'T WORK FOR FURNACE COOKING RECIPES!
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_craft(func(itemstack, player, old_craft_grid, craft_inv))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_craft(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_dieplayer
     *
     *  # Description
     *   player — ObjectRef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_dieplayer(function(player)
     *  	minetest.chat_send_all(player:get_player_name().." died.")
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_dieplayer(function(player))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_dieplayer(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_dignode
     *
     *  # Description
     *   pos — position
     *   oldnode — node
     *   digger — ObjectRef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_dignode(function(pos, oldnode, digger)
     *      print("Node " .. oldnode.name .. " at " ..  minetest.pos_to_string(pos) .. " dug by " .. digger:get_player_name())
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_dignode(function(pos, oldnode, digger))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_dignode(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_generated
     *
     *  # Description
     *   minp, maxp — position
     *   blockseed — integer
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_generated(function(minp, maxp, seed)
     *  	local debug = "minp="..(minetest.pos_to_string(minp))..", maxp="..(minetest.pos_to_string(maxp))..", seed="..seed
     *  	print(debug)
     *  	minetest.chat_send_all(debug)
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_generated(function(minp, maxp, blockseed))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_generated(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_hpchange
     *
     *  # Description
     *  Register a callback to be called when player's health is changed.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_player_hpchange(func(player, hp_change), modifier)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_hpchange(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_item_eat
     *
     *  # Description
     *  Available in 0.4.10+
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_item_eat(func(hp_change, replace_with_item, itemstack, user, pointed_thing))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_item_eat(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_joinplayer
     *
     *  # Description
     *   player — ObjectRef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_joinplayer(function(player)
     *  	minetest.chat_send_all("Give a warm welcome to "..player:get_player_name().."!")
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_joinplayer(function(player))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_joinplayer(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_leaveplayer
     *
     *  # Description
     *   player — ObjectRef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_leaveplayer(function(player)
     *  	minetest.chat_send_all(player:get_player_name().." has left this awesome game.")
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_leaveplayer(function(player))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_leaveplayer(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_mapgen_init
     *
     *  # Description
     *  Available in 0.4.8+
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *    ## excerpt from map_meta.txt, also suitable for use in minetest.conf
     *    mg_flags = trees, caves, nodungeons, noflat, light
     *    mg_name = v6
     *    seed = 7977035405896799191
     *    water_level = 1
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_mapgen_init(func(mapgen_params))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_mapgen_init(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_newplayer
     *
     *  # Description
     *   player — ObjectRef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_newplayer(function(player)
     *  	minetest.chat_send_player(player:get_player_name(), "Welcome new player!")
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_newplayer(function(player))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_newplayer(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_placenode
     *
     *  # Description
     *   pos — position of placed node
     *   newnode — node
     *   placer — ObjectRef
     *   oldnode — node
     *   itemstack — ItemStack
     *   poined_thing — pointed_thing (only in 0.4.10+)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_placenode(function(pos, newnode, placer, oldnode, itemstack, pointed_thing)
     *      if oldnode ~= nil then
     *          print("Node " .. oldnode.name .. " at " ..  minetest.pos_to_string(pos) .. " replaced with " .. newnode.name .. "  by " .. placer:get_player_name())
     *      else
     *          print("Node " .. newnode.name .. " at " ..  minetest.pos_to_string(pos) .. " placed by " .. placer:get_player_name())
     *      end
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_placenode(function(pos, newnode, placer, oldnode, itemstack, pointed_thing))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_placenode(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_player_receive_fields
     *
     *  # Description
     *   player — ObjectRef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_player_receive_fields(function(player, formname, fields)
     *  	if formname == "default:team_choose" then -- This is your form name
     *  		print("Player "..player:get_player_name().." submitted fields "..dump(fields))
     *  	end
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_player_receive_fields(function(player, "formname", {fields}))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_player_receive_fields(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_prejoinplayer
     *
     *  # Description
     *   Called before a player joins the game
     *   If it returns a string, the player is disconnected with that string as reason
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_prejoinplayer(function(_, ip)
     *  	minetest.chat_send_all(ip.." tries to connect.")
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_prejoinplayer(func(name, ip))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_prejoinplayer(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_protection_violation
     *
     *  # Description
     *  Registers a function to be called when a player violates protection.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  -- Show a message to protection violators
     *  minetest.register_on_protection_violation(function(pos, name)
     *    if not mymod:can_interact(pos, name) then
     *      local pos_string = minetest.pos_to_string(pos)
     *      local owner_string = mymod:get_owner_string(pos)
     *      minetest.chat_send_player(name, pos_string.." is protected by "..owner_string)
     *    end
     *  end)
     *   
     *  -- Damage protection violators
     *  minetest.register_on_protection_violation(function(pos, name)
     *    local player = minetest.get_player_by_name(name)
     *    if not player then return end
     *    player:set_hp(math.max(player:get_hp() - 1, 0))
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_protection_violation(function(pos, playername))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_protection_violation(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_punchnode
     *
     *  # Description
     *   pos — position of punched node
     *   node — node
     *   puncher — ObjectRef
     *   pointed_thing — pointed_thing (only in 0.4.10+)
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_punchnode(function(pos, node, puncher, pointed_thing)
     *  	if puncher:get_wielded_item():get_name() == "moretools:pick"
     *  	and node.name ~= "air" then
     *  		minetest.remove_node(pos)
     *  		puncher:get_inventory():add_item('main', node)
     *  	end
     *  end)minetest.register_on_punchnode(function(pos, node, puncher, pointed_thing)
     *  	if node.name == "default:brick" then
     *  		local puncher_name = puncher:get_player_name()
     *  		local mypos = minetest.pos_to_string(pos) -- Sets variable to (X,Y,Z.. where Y is up) 
     *  		minetest.chat_send_all("Hey!! ".. puncher_name .." is hitting me. I'm located at ".. mypos .." Send help!!")		
     *  	end 
     *  	if node.name == "default:desert_stonebrick" then
     *  		local puncher_name = puncher:get_player_name()
     *  		minetest.chat_send_player(puncher_name, "That's got to hurt!!")
     *  	end
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_punchnode(function(pos, node, puncher, pointed_thing))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_punchnode(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_respawnplayer
     *
     *  # Description
     *   player — ObjectRef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_respawnplayer(function(player))
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_respawnplayer(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_on_shutdown
     *
     *  # Description
     *  Called before server shutdown.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_on_shutdown(function()
     *      minetest.chat_send_all("Server shutting down")
     *  end)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_on_shutdown(function())
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_on_shutdown(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_ore
     *
     *  # Description
     *  Registers an ore to generate, this replaces default.generate_ore().
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_ore({
     *      ore_type       = "scatter",
     *      ore            = "default:stone_with_coal",
     *      wherein        = "default:stone",
     *      clust_scarcity = 8*8*8,
     *      clust_num_ores = 8,
     *      clust_size     = 3,
     *      height_min     = -31000,
     *      height_max     = 64,
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_ore(ore_def)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_ore(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_privilege
     *
     *  # Description
     *  Registers privilege.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_privilege("interact", "Player can dig and place nodes.")
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_privilege("name", privilege definition)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_privilege(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.register_tool
     *
     *  # Description
     *  Registers a tool, examples are picks, axes, swords, and shovels.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_tool("tutorial:decowood_pick", {
     *      description = "Decowood Pickaxe",
     *      inventory_image = "tutorial_decowood_pick.png",
     *      tool_capabilities = {
     *          max_drop_level=3,
     *          groupcaps= {
     *              cracky={times={[1]=4.00, [2]=1.50, [3]=1.00}, uses=70, maxlevel=1}
     *          }
     *      }
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.register_tool(name, tool_definition)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function register_tool(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.remove_node
     *
     *  # Description
     *  Equivalent to minetest.set_node(pos, {name="air"})
     *  According to a benchmark test, minetest.set_node(pos, {name="air"}) works about 1.24 times as fast as minetest.remove_node(pos).
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.remove_node({x=1, y=2, z=3})
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.remove_node(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function remove_node(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.request_shutdown
     *
     *  # Description
     *  Request for server shutdown.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_chatcommand ("shutdown", {
     *  	privs = {ban = true},
     *  	params = "",
     *  	description = "Shuts down server",
     *  	func = function()
     *  		minetest.request_shutdown("Server Shutdown requested", true, 10)
     *  	end
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.request_shutdown([message],[reconnect],[delay])
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function request_shutdown(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.rollback_get_last_node_actor
     *
     *  # Description
     *   pos — position
     *   range — integer
     *   seconds — integer
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.rollback_get_last_node_actor(pos, range, seconds)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function rollback_get_last_node_actor(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.rollback_get_node_actions
     *
     *  # Description
     *   pos — position
     *   range — integer
     *   seconds — integer
     *   limit — integer
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.rollback_get_node_actions(pos, range, seconds, limit)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function rollback_get_node_actions(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.rollback_revert_actions_by
     *
     *  # Description
     *   seconds — integer
     *   actor — string, like "player:<name>" or "liquid".
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.rollback_revert_actions_by("actor", seconds)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function rollback_revert_actions_by(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.rotate_and_place
     *
     *  # Description
     *  Attempts to predict the desired orientation of the facedir-capable node defined by itemstack, and places it accordingly (on-wall,
     *  on the floor, or hanging from the ceiling). Stacks are handled normally if the infinitestacks field is false or omitted (else,
     *  the itemstack is not changed). orient_flags is an optional table containing extra tweaks to the placement code:
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.rotate_and_place(itemstack, placer, pointed_thing, infinitestacks, orient_flags)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function rotate_and_place(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.rotate_node
     *
     *  # Description
     *  calls minetest.rotate_and_place() with infinitestacks set according to the state of the creative mode setting, and checks
     *  for "sneak" to set the invert_wall parameter.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.register_node("default:tree", {
     *  	description = "Tree",
     *  	tiles = {"default_tree_top.png", "default_tree_top.png", "default_tree.png"},
     *  	paramtype2 = "facedir",
     *  	is_ground_content = false,
     *  	groups = {tree=1,choppy=2,oddly_breakable_by_hand=1,flammable=2},
     *  	sounds = default.node_sound_wood_defaults(),
     *  	on_place = minetest.rotate_node
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.rotate_node(itemstack, placer, pointed_thing)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function rotate_node(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.serialize
     *
     *  # Description
     *  Convert a table containing tables, strings, numbers, booleans and nils into string form readable by minetest.deserialize()
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.serialize({foo='bar'}) → 'return { ["foo"] = "bar" }'
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.serialize({data})
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function serialize(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.set_gen_notify
     *
     *  # Description
     *  Available in 0.4.10+
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.set_gen_notify(flags)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function set_gen_notify(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.set_last_run_mod
     *
     *  # Description
     *   mod_name — Mod name
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.set_last_run_mod(mod_name)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function set_last_run_mod(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.set_mapgen_params
     *
     *  # Description
     *  Available in 0.4.10+
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  mapgen_params = { mgname = ..., seed = ..., water_level = ..., flags = ... }
minetest.set_mapgen_params(mapgen_params)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function set_mapgen_params(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.set_node
     *
     *  # Description
     *  Sets node at pos to node. Note that node is a table, not a string (see node).
     *  It may work faster in a minetest.register_on_generated.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.set_node({x=0, y=0, z=0}, {name="default:dirt"})
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.set_node(pos, node)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function set_node(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.set_node_level
     *
     *  # Description
     *  Set level of leveled node, default level = 1, if totallevel > maxlevel returns rest (total-max).
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.set_node_level(pos, level)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function set_node_level(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.set_noiseparam_defaults
     *
     *  # Description
     *  Available in 0.4.10+
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.set_noiseparam_defaults({ np1 = NoiseParams, np2 = NoiseParams, ... })
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function set_noiseparam_defaults(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.set_player_password
     *
     *  # Description
     *  Sets the password of the player.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.set_player_password("testuser", minetest.get_password_hash("testuser", "secret password"))
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.set_player_password("name", "password_hash")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function set_player_password(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.set_player_privs
     *
     *  # Description
     *  Sets the privileges of the specified player.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  This code grants the “fly” privilege to Example Player without affecting the other privileges:
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.set_player_privs(name, privs)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function set_player_privs(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.set_timeofday
     *
     *  # Description
     *  Sets time of day.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.set_timeofday(0.5) -- noon
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.set_timeofday(timeofday)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function set_timeofday(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.show_formspec
     *
     *  # Description
     *  Shows an arbitrary dialog to the named player described by the given formspec.  If the form has a submit button and the player activates
     *  the button, on_player_receive_fields callbacks will be called with the player, the given formname, and the values of all
     *  of the form's fields.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.show_formspec(playername, formname, formspec)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function show_formspec(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.sound_play
     *
     *  # Description
     *  Plays a sound.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.sound_play("testmod_testsound", {
     *  	pos = {x=0, y=0, z=0},
     *  	max_hear_distance = 100,
     *  	gain = 10.0,
     *  })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.sound_play(SimpleSoundSpec, SoundParameters)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function sound_play(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.sound_stop
     *
     *  # Description
     *  Stops a sound that is started with minetest.sound_play().
     *  handle is returned by minetest.sound_play()
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  local handle = minetest.sound_play("testmod_song", {
     *  	object = minetest.get_player_by_name("singleplayer"),
     *  	loop = true,
     *  })
     *   
     *  minetest.after(60, function(handle)
     *  	minetest.sound_stop(handle)
     *  end, handle)
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.sound_stop(handle)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function sound_stop(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.spawn_item
     *
     *  # Description
     *  This function spawns a "__builtin:item" at pos and returns its object.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.spawn_item(pos, item)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function spawn_item(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.spawn_tree
     *
     *  # Description
     *   pos — position
     *   tree — treedef
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  This code adds the chat command "/spawn_tree" to spawn an apple tree with its origin at the current position of the player, assuming
     *  that Minetest Game is used:
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.spawn_tree(pos, tree)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function spawn_tree(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.splittext
     *
     *  # Description
     *   Returns a table of strings
     *   may be used to get line breaks of a text for a formspec box
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.splittext(text, charlimit)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function splittext(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.string_to_pos
     *
     *  # Description
     *  Converts the string returned by minetest.pos_to_string(pos) back to a position.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.string_to_pos("string")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function string_to_pos(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.string_to_privs
     *
     *  # Description
     *  Returns {priv1=true, …}
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.string_to_privs("string")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function string_to_privs(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.swap_node
     *
     *  # Description
     *  Sets a node at pos, but keeps its metadata
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.swap_node({x=4, y=12, z=-400}, {name = "example:some_block" })
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.swap_node(pos, node)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function swap_node(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.transforming_liquid_add
     *
     *  # Description
     *  Adds node to liquid update queue
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.transforming_liquid_add(pos)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function transforming_liquid_add(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.unban_player_or_ip
     *
     *  # Description
     *  Unban player or IP address.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.unban_player_or_ip("name_or_ip")
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function unban_player_or_ip(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.unregister_biome
     *
     *  # Description
     *  Unregisters the biome name from engine, and deletes the entry with key name from minetest.registered_biome.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.unregister_biome(name)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function unregister_biome(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.unregister_item
     *
     *  # Description
     *  Unregisters the item name from engine, and deletes the entry with key name from minetest.registered_items and from associated
     *  item table according to its nature minetest.registered_nodes ...
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  TODO: Provide examples
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.unregister_item(name)
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function unregister_item(...args: any[]): any;

    /* tslint:disable */
    /**
     *  Scrapped from https://dev.minetest.net/minetest.write_json
     *
     *  # Description
     *  Returns a string or nil and an error message.
     *
     *  # Parameters
     *  TODO: Provide parameter information
     *
     *  # Examples
     *  ```lua
     *  minetest.write_json({10, {a = false}}) -- returns "[10, {\"a\": false}]"
     *  ```
     *
     *  # Syntax
     *  ```pseudocode
     *  minetest.write_json(data[, styled])
     *  ```
     *  TODO: Add type definitions
     */
    /* tslint:enable */
    function write_json(...args: any[]): any;

  }

  export type PlayerObject = ObjectRef;

  export interface NodeDefinition {
    drawtype: DrawType;
    visual_scale?: number;
    tiles: string | [string, string, string, string, string, string];
    special_tiles?: string[];
    use_texture_alpha?: boolean;
    alpha?: number;
    post_effect_color?: Color;
    inventory_image?: string | [string, string, string];
    wield_image?: string | [string, string, string];
    paramtype?: 'none' | 'light';
    paramtype2?: 'wallmounted' | 'facedir';
    is_ground_content?: boolean;
    sunlight_propagates?: boolean;
    walkable?: boolean;
    pointable?: boolean;
    diggable?: boolean;
    climbable?: boolean;
    buildable_to?: boolean;
    drop?: Item | Item[] | {max_items: number; items: DropDefinition[]; };
    stack_max?: number;
    liquidtype?: 'none' | 'source' | 'flowing';
    liquid_alternative_flowing?: any;
    liquid_alternative_source?: any;
    liquid_viscosity?: number;
    liquid_renewable?: boolean;
    light_source?: number;
    damage_per_second?: number;
    node_box?: NodeBox;
    selection_box?: NodeBox;
    collision_box?: NodeBox;
    sounds?: {
      footstep?: SimpleSoundSpec;
      dig?: SimpleSoundSpec;
      dug?: SimpleSoundSpec;
    };
    on_construct?: (pos: Vector3D) => void;
    on_destruct?: (pos: Vector3D) => void;
    after_destruct?: (pos: Vector3D, oldnode: Node) => void;
    on_place?: (item: ItemStack, placer: ObjectRef, pos: Vector3D, pointedthing: PointedThing) => void;
    on_drop?: (item: ItemStack, dropper: ObjectRef, pos: Vector3D) => void;
    on_use?: (item: ItemStack, player: ObjectRef, pointedthing: PointedThing) => void;
    on_punch?: (item: ItemStack, node: Node, player: ObjectRef, pointedthing: PointedThing) => void;
    on_dig?: (pos: Vector3D, node: Node, player: ObjectRef) => void;
    on_timer?: (pos: Vector3D, elapsed: number) => void;
    on_receive_fields?: (pos: Vector3D, formname: any, fields: {[k: string]: any}, sender: PlayerObject) => void;
    allow_metadata_inventory_move?: (
      pos: Vector3D, from_list: string, from_index: number, to_list: string,
      to_index: number, count: number, player: PlayerObject,
    ) => void;
    allow_metadata_inventory_put?: (
      pos: Vector3D, listname: string, index: number,
      stack: ItemStack, player: PlayerObject,
    ) => void;
    allow_metadta_inventory_take?: (
      pos: Vector3D, listname: string, index: number, stack: ItemStack, player: PlayerObject,
    ) => void;
    on_metadata_inventory_move?: (
      pos: Vector3D, from_list: string, from_index: number, to_list: string,
      to_index: number, count: number, player: PlayerObject,
    ) => void;
    on_metadata_inventory_put?: (
      pos: Vector3D, listname: string, index: number, stack: ItemStack, player: PlayerObject,
    ) => void;
    on_metadta_inventory_take?: (
      pos: Vector3D, listname: string, index: number, stack: ItemStack, player: PlayerObject,
    ) => void;

    after_place_node?: (pos: Vector3D, placer: ObjectRef, item: ItemStack, pointedthing: PointedThing) => void;
    can_dig?: (pos: Vector3D, player: PlayerObject) => void;
    after_dig_node?: (pos: Vector3D, oldnode: Node, old_meta: MetaDataRef, digger: ObjectRef) => void;
    on_rightclick?: (pos: Vector3D, node: Node, player: PlayerObject, stack: ItemStack, pointed: PointedThing) => void;

    on_blast?: (pos: Vector3D, intensity?: number) => void;
  }

  export interface Node {
    name: string;
    param1: any;
    param2: any;
  }

  export type PointedThing = PointedObject | PointedNothing | PointedNode;

  export interface PointedObject {
    type: 'object';
    ref: ObjectRef;
  }

  export interface PointedNothing {
    type: 'nothing';
  }

  export interface PointedNode {
    type: 'node';
    under: Vector3D;
    above: Vector3D;
  }

  export interface DropDefinition {
    items: Item[];
    rarity: number;
    tools: string[];
  }

  export type SimpleSoundSpec = string | {name?: string; gain?: number};

  export type NodeBox = NodeBoxRegular | NodeBoxWallmounted | NodeBoxConnected;

  export interface NodeBoxRegular {
    type: 'regular';
  }

  export interface NodeBoxWallmounted {
    type: 'fixed';
    fixed: Box | Box[];
  }

  export interface NodeBoxConnected {
    type: 'connected';
    fixed: Box | Box[];
    connect_top: Box | Box[];
    connect_bottom: Box | Box[];
    connect_front: Box | Box[];
    connect_left: Box | Box[];
    connect_right: Box | Box[];
    connect_back: Box | Box[];
  }

  export type Box = [number, number, number, number, number, number];

  export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
  }

  export type DrawType
    = 'normal'
    | 'airlike'
    | 'allfaces'
    | 'allfaces_optional'
    | 'glass_like'
    | 'glasslike_framed'
    | 'glasslike_framed_optional'
    | 'liquid'
    | 'flowingliquied'
    | 'torchlike'
    | 'signlike'
    | 'plantlike'
    | 'raillike'
    | 'fencelike'
    | 'firelike'
    | 'nodebox'
    | 'mesh';

  export interface LuaEntityProperties {
    initial_properties?: any;
    on_activate?: (self: LuaEntity, data: string) => void;
    on_step?: (self: LuaEntity, dtime: number) => void;
    on_punch?: (
      self: LuaEntity,
      puncher: ObjectRef,
      time_from_last_punch: number | null,
      tool_capabilities: any,
      dir: [number, number, number],
    ) => void;
    on_rightclick?: (self: LuaEntity, clicker: ObjectRef) => void;
    get_staticdata?: (self: LuaEntity) => string;

  }

  export interface LuaEntity extends LuaEntityProperties {
    name: string;
    object: LuaEntitySAO;
  }

  export interface LuaEntitySAO extends ObjectRef {
    getacceleration(): Vector3D;
    getvelocity(): Vector3D;
    getyaw(): number;
    get_luaentity(): LuaEntity;
    setacceleration(vec: Vector3D): void;
    setsprite(p: Vector2D, num_frames: number, framelength: number, select_horiz_by_yawpitch: boolean): void;
    settexturemod(mod: any): void;
    setvelocity(vec: Vector3D): void;
    setyaw(radians: number): void;
  }

  export interface Vector3D {
    x: number;
    y: number;
    z: number;
  }

  export interface Vector2D {
    x: number;
    y: number;
  }

  export interface ObjectRef {
    get_pos(): Vector3D;
    get_armor_groups(): {[k: string]: any};
    get_animation(): {
      frames: Vector2D;
      frame_speed: number;
      frame_blend: number;
      frame_loop: boolean;
    };
    get_hp(): number;
    get_breath(): number;
    get_inventory(): InvRef;
    get_wielded_item(): ItemStack;
    get_wield_index(): number;
    get_wield_list(): string;
    move_to(pos: Vector3D, continuous?: boolean): void;
    punch(puncher: ObjectRef, time_from_last_punch: number, direction?: Vector3D): void;
    remove(): void;
    right_click(clicker: ObjectRef): void;
    set_pos(pos: Vector3D): void;
    set_armor_groups(groups: {[k: string]: any}): void;
    set_hp(hitpoints: number): void;
    set_properties(properties: {[k: string]: any}): void;
    set_wielded_item(item: Item): boolean;
    set_animation(p: Vector2D, frame_speed?: number, frame_blend?: number): void;
    set_attach(parent: ObjectRef, str?: string, v1?: Vector3D, v2?: Vector3D): void;
    set_detach(): void;
    get_attach(): {
      parent: ObjectRef;
      bone: string;
      position: Vector3D;
      rotation: any;
    };
    set_bone_position(bone?: "", v1?: Vector3D, v2?: Vector3D): void;
  }

  export interface InvRef {
    is_empty(listname: string): boolean;
    get_size(listname: string): number;
    set_size(listname: string, size: number): void;
    get_width(listname: string): number;
    set_width(listname: string, width: number): void;
    get_stack(listname: string, index: number): ItemStack;
    set_stack(listname: string, index: number, stack: Item): void;
    get_list(listname: string): any;
    set_list(listname: string, list: any): any;
    get_lists(): {[k: string]: any};
    set_lists(lists: {[k: string]: any}): void;
    add_item(listname: string, stack: Item): ItemStack;
    room_for_item(listname: string, stack: Item): boolean;
    contains_item(listname: string, stack: Item): boolean;
    remove_item(listname: string, stack: Item): ItemStack;
  }

  export type Item = ItemStack | ItemTable | string;

  export interface ItemStack {
    add_item(item: Item): void;
    add_wear(amount: number): void;
    clear(): void;
    get_count(): number;
    set_count(count: number): boolean;
    get_definition(): any;
    get_free_space(): number;
    get_meta(): MetaDataRef;
    get_metadata(): string;
    get_name(): string;
    set_name(name: string): boolean;
    get_stack_max(): number;
    get_tool_capabilities(): any;
    get_wear(): number;
    set_wear(wear: number): boolean;
    is_empty(): boolean;
    is_known(): boolean;
    item_fits(item: Item): boolean;
    peek_item(n?: number): ItemStack;
    replace(item: Item | string): void;
    take_item(n?: number): ItemStack;
    to_string(): string;
    to_table(): any;
  }

  export interface ItemTable {
    name: string;
    count: number;
    wear: number;
    metadata: string;
  }

  export interface MetaDataRef {}

  export interface ParticleDefinition {
    pos: Vector3D;
    velocity: Vector3D;
    acceleration: Vector3D;
    expirationtime: number;
    size: number;
    collisiondetection: boolean;
    collision_removal: boolean;
    vertical: boolean;
    glow: number;
    texture: string;
    animation?: TileAnimationDefinition;
    playername?: string;
  }

  export type TileAnimationDefinition = any;

  export interface ParticleSpawnerDefinition {
    amount: number;
    time: number;
    minpos: Vector3D;
    maxpos: Vector3D;
    minvel: Vector3D;
    maxvel: Vector3D;
    minacc: Vector3D;
    maxacc: Vector3D;
    minexptime: number;
    maxexptime: number;
    minsize: number;
    maxsize: number;
    colissiondetection: number;
    vertical: boolean;
    texture: string;
    playername?: string;
  }
}

export {}
