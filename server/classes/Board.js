/**
 * Created by Baptiste on 07/06/2015.
 */

function Board(options) {
    if (!options) {
        options = {};
    }

    this.name = options.name || "default";
    this.size = options.size || 500;

    this.level = options.level || 1;

    this.obstacles = options.obstacles || [];

    this.images = options.images || {
            ground: "image/ground/"+this.level+".png",
            ground: "image/sky/"+this.level+".png"
        };
}