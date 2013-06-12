var GraphEditor = this.GraphEditor = function GraphEditor(div, options){

var edge_list = [], nodes = [], removed_edges = [],
    controller,
    Controller, Vertex, Edge,
    graph_name,
    removed_node,
    SIZE = {
        x: options.width || 500,
        y: options.height || 500
    },
    center = {x: SIZE.x/2, y: SIZE.y/2},
    DIRECTED = options.directed || false,
    MULTIGRAPH = options.multigraph || false,
    NODE_RADIUS = options.node_radius || 10.0,
    LIVE = false,
    AUTO_MAXIMIZE = true,
    NODE_NUMBERS = false,
    SPRING = 0.999,
    SPEED = 2.0,
    FIXED_LENGTH = 100.0,
    ORIENTATION = Math.PI,
    SHOWFPS = false,
    SHIFT = false,
    LOOP = false,
    FPS = options.fps || 60,
    canvastag,
    ctx,
    loop_interval,
    last_frame,
    keyCount = options.keyCount || 0,
    onEdit = options.onEdit || function(){};
    beforeDraw = options.beforeDraw || function(){};
