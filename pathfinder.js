const pathfinder = function (coordinates, min=true) {

  const distance = function (point1, point2) {
    const length = point1[0] - point2[0];
    const height = point1[1] - point2[1];
    const distance = Math.sqrt(length * length + height * height);
    return distance;
  }
  
  const buildPermutations = function (arrays, newNum) {
    let newArrays = [];
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j <= arrays[i].length; j++) {
        let newArray = arrays[i].slice()
        newArray.splice(j, 0, newNum);
        newArrays.push(newArray);
      }
    }
    return newArrays;
  }

  // console.log("functions created");

  let routes = [[0]];
  for (let i = 1; i < coordinates.length; i++) {
    routes = buildPermutations(routes, i);
  }

  // console.log("route permutations found");

  routes = routes.map((path) => {
    return {
      distance: 0,
      route: path
    }
  });

  // console.log("route objects created");

  let routeDistance = 0;
  for (let i = 0; i < routes.length; i++) {
    routeDistance = 0;
    let point1, point2;
    for (var j = 1; j < routes[i].route.length; j++) {
      point1 = routes[i].route[j-1];
      point2 = routes[i].route[j];
      routeDistance += distance(coordinates[point1], coordinates[point2]);
    }
    routes[i].distance = routeDistance;
  }

  // console.log("route distances calculated");
  // console.log(routes);

  routes.sort((route1, route2) => {
    return route1.distance - route2.distance;
  })

  // console.log("routes sorted by distance");
  // console.log(routes);

  if (min) {
    return routes[0];
  } else {
    return routes[routes.length-1]
  }

}


const coordinates3 = [
  [2, 3],
  [7, 6],
  [5, 1]
];
const coordinates4 = coordinates3.concat([[6,9]]);
const coordinates5 = coordinates4.concat([[-2, 5]]);
const coordinates6 = coordinates5.concat([[3, -1]]);
const coordinates7 = coordinates6.concat([[-2, -4]]);
const coordinates8 = coordinates7.concat([[3, 6]]);
const coordinates9 = coordinates8.concat([[14, 3]]);
const coordinates10 = coordinates9.concat([[-4, 9]]);
const coordinates11 = coordinates10.concat([[0, 5]]);
const coordinates12 = coordinates11.concat([[2, -2]]);
const coordinates13 = coordinates12.concat([[-5, -5]]);
const coordinates14 = coordinates13.concat([[20, -4]]);
const coordinates15 = coordinates14.concat([[5, 8]]);
const coordinates16 = coordinates15.concat([[1, 4]]);
const coordinates17 = coordinates16.concat([[-6,-9]]);



console.log(pathfinder(coordinates3));
console.log(pathfinder(coordinates3, false));
console.log(pathfinder(coordinates4));
console.log(pathfinder(coordinates5));
console.log(pathfinder(coordinates6));
console.log(pathfinder(coordinates7));
console.log(pathfinder(coordinates8));
console.log(pathfinder(coordinates9));
console.log(pathfinder(coordinates10));
// timeout from here
console.log("test");
console.log(pathfinder(coordinates11));
console.log(pathfinder(coordinates12));
console.log(pathfinder(coordinates13));
console.log(pathfinder(coordinates14));
console.log(pathfinder(coordinates15));
console.log(pathfinder(coordinates16));
