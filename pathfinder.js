const pathfinder = function (coordinates) {

  const distance = function (point1, point2) {
    const length = point1[0] - point2[0];
    const height = point1[1] - point2[1];
    const distance = Math.sqrt(length * length + height * height);
    return distance;
  }

  const findDistances = function (point) {
    for (let i = 0; i < points.length; i++) {
      if (points[i] !== point) {
        point.distances[points[i].id] = distance(point.coords, points[i].coords);
      }
    }
    return point.distances;
  }

  const points = [];

  for (let i = 0; i < coordinates.length; i++) {
    points[i] = {
      coords: coordinates[i],
      id: i,
      distances: {}
    };
  }

  for (let i = 0; i < points.length; i++) {
    findDistances(points[i]);
  }


  // console.log(findDistances(points[0]));
  console.log(points[0].distances);
  console.log(points[1].distances);
  console.log(points[2].distances);

}






// console.log(distance([2, 3], [7, 6]));

const findRouteFromCoords = function (points) {
  let routes = [];
  let routeDistances;
  for (let i = 0, remainingPoints = points; i < points.length; i++) {
    for (let j = 0; j < points.length; i++) {
      for (let i = 0; i < points.length; i++) {
        points[i]
      }
      routes[points[i].id]
    }
  }




}


// for (let i = 0; i < points.length; i++) {
//   points[i]
// }


// const findRouteFromPoint = function (point) {
//   if
// }

// const permutations = function (points) {
//   let permutations = [];
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (i !== j) {
//         for (let k = 0; k < 3; k++) {
//           if (k !== i && k !== j) {
//             permutations.push([i, j, k]);
//           }
//         }
//       }
//     }
//   }
//   console.log(permutations);
// }

const permutationsRecursive = function (points, permutation=[], permutations=[]) {
  // let permutations = [];
  console.log(permutations);
  for (let i = 0; i < points.length; i++) {
    if (!permutation.includes(i)) {
      permutation.push(i);
      console.log(permutation);
      permutationsRecursive(points, permutation);
    }
    if (permutation.length === points.length) {
      if (permutations.some((existingPermutation) => {
        arrayEquals(existingPermutation, permutation)
        console.log("match found");
      })) {
        permutation.pop();
      }
      return permutation;
    }
  }
}

const arrayEquals = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
}

// console.log(arrayEquals([1, 2, 3, 4], [1, 2, 3, 4]));
//
// let permutations = [];
// permutations.push(permutationsRecursive([1, 2, 3, 4]));
// permutations.push(permutationsRecursive([1, 2, 3, 4]));
// permutations.push(permutationsRecursive([1, 2, 3, 4]));
// console.log(permutations);
// permutations(0);

// console.log(permutationsRecursive([1, 2, 3, 4], []));


//
// for (let i = 0; i < num; i++) {
//
// }
//
//
// let coords = [];
// for (let i = 0; i < 3; i++) {
//   coord
// }
//
// const addPoint = function (coords, usedCoords) {
//   for (var i = 0; i < array.length; i++) {
//     array[i]
//   }
// }

const coordinates1 = [
  [2, 3],
  [7, 6],
  [5, 1]
];
const coordinates2 = [
  [2, 3],
  [7, 6],
  [5, 1],
  [6, 9]
];


// pathfinder(coordinates1);
// const coordinates = {
//   A: {
//     coord: [2, 3]
//   },
//   B: {
//     coord: [7, 6]
//   },
//   C: {
//     coord: [, 3]
//   },
//
// }




const buildPermutations = function (arrays, newNum) {
  let newArrays = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      newArrays.push(arrays[i].slice().splice(j, 0, newNum));
    }
    newArrays.push(arrays[i].slice().push(newNum));
  }
  return newArrays;
}

let arrays = [[1]];
console.log(buildPermutations(arrays, 2));
console.log(buildPermutations(arrays, 3));
