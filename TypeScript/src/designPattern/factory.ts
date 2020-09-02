// 迷宫的基类
class Maze {
    addRoom(room: Room):void {}
}

// 墙的基类
class Wall {}

// 房间的基类
class Room {
    constructor(id: number) {}
    setSide(direction: string, content: Room | Wall): void {}
}

class Door {
    constructor(room1: Room, room2: Room) {}
}

// 迷宫工厂基类
// 该如何理解工厂模式，1.能针对类型进行批量生产（这个普通类也能实现） 2. 能够根据需求的变动进行相应的改变，但不影响工厂的执行机制（流水线），在进入流水线前的定义层面就可以进行修改

class MazeFactory {
    makeMaze(): Maze {
        return new Maze()
    }
    makeWall(): Wall {
        return new Wall();
    }
    makeRoom(roomId: number): Room {
        return new Room(roomId);
    }
    makeDoor(room1: Room, room2: Room): Door {
        return new Door(room1, room2);
    }
}

// 通过传入工厂对象 调用工厂接口方法创建迷宫
// 由于工厂的接口都是一样的，所以传入不同的工厂对象，就能创建出不同的产品
// 工厂的执行机制
function createMazeDemo(factory: MazeFactory): Maze {
    const maze = factory.makeMaze()
    const r1 = factory.makeRoom(1)
    const r2 = factory.makeRoom(2)
    const door = factory.makeDoor(r1, r2)

    maze.addRoom(r1)
    maze.addRoom(r2)

    r1.setSide('east', factory.makeWall())
    r1.setSide('west', door)

    return maze
}

// 标准系列工厂，工厂的每个产品都是标准的
const standardSeries = new MazeFactory()
// 创建标准迷宫
createMazeDemo(standardSeries)

// 附了魔法的房间 继承房间基类
class MagicRoom extends Room {}

class MagicDoor extends Door {
    constructor(room1: MagicRoom, room2: MagicRoom) {
        super(room1, room2)
    }
}

class MagicMazeFactory extends MazeFactory {
    // 需要将基类的方法重载
    makeRoom(roomId: number): MagicRoom {
        return new MagicRoom(roomId)
    }
    makeDoor(r1: MagicRoom, r2: MagicRoom): MagicDoor {
        return new MagicDoor(r1, r2)
    }
    makeMaze(): Maze {
        return new Maze()
    }
}

const magicSeries = new MagicMazeFactory()

createMazeDemo(magicSeries)

