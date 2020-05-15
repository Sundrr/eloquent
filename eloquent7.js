
let robot = require('./07_robot');


function getTasks(number, parcels) {
    taskArray = [];
    for (let n = 1; n < number; n++) {
        taskArray.push(robot.VillageState.random(parcels));
    }
    return taskArray;
}

function compareRobots(robots, memory, number, parcels) {
    let sum, avg;
    let stepsArray = [];
    const taskArray = getTasks(number, parcels);
    for (let task of taskArray) {
        for (let r of robots) {
            r.results.push(robot.runRobot(task, r.robotDevice, memory));
        }
    }
    console.log(`Результаты для ${number} итераций, ${parcels} посылок:`);
    for (let r of robots) {
        sum = r.results.reduce((a, b) => a + b, 0);
        avg = (sum / r.results.length) || 0;
        console.log(`Среднее время для робота ${r.name} - ${avg.toFixed(1)} шагов`);
    }
}

////////////////////////

const places = [
    "Alice's House",
    "Cabin",
    "Bob's House",
    "Town Hall",
    "Daria's House",
    "Ernie's House",
    "Grete's House",
    "Shop",
    "Farm",
    "Marketplace",
    "Post Office"
];

let robots = [
    {
        name: 'routeRobot',
        robotDevice: robot.routeRobot,
        results: []
    },
    {
        name: 'goalOrientedRobot',
        robotDevice: robot.goalOrientedRobot,
        results: []
    },
    {
        name: 'smartRobot',
        robotDevice:  robot.smartRobot,
        results: []
    }
]

compareRobots(robots, [], 500, 2);
compareRobots(robots, [], 500, 4);
compareRobots(robots, [], 500, 6);
compareRobots(robots, [], 500, 8);
compareRobots(robots, [], 500, 10);

   

