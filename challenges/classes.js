
class CuboidMaker {
    constructor(elements) {
        this.length = elements.length;
        this.width = elements.width;
        this.height = elements.height;
    }

    giveVolume() {
        return this.length * this.width * this.height;
    }

    giveSA() {
        return 2 * ((this.length * this.width) + (this.width * this.height) + (this.width * this.height));
    }
}

class CubeMaker extends CuboidMaker {
    constructor(cubeElements) {
        super(cubeElements);
            this.length = cubeElements.length;
    }

    cubeVolume() {
        return Math.pow(this.length, 3)
    }

    cubeSA() {
        return 6 * Math.pow(this.length, 2)
    }
}


const cuboid = new CuboidMaker({
    length: 5,
    width: 13,
    height: 18
});

const cube = new CubeMaker ({
    length: 10
});


  // Test your volume and surfaceArea methods by uncommenting the logs below:
   console.log(cuboid.giveVolume()); // 100
   console.log(cuboid.giveSA()); // 130


   console.log(cube.cubeVolume()); // 100
   console.log(cube.cubeSA());

