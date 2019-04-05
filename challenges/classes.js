// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


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


