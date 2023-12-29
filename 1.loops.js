//1.For Loop

const forLoop = {
    name: "priya",
    age: 25,
    city: "salem"
};

const keys = Object.keys(forLoop);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = forLoop[key];
    console.log(key + ": " + value);
}

// 2.For in

const forIn = {
    name: "Yogi",
    age: 33,
    city: "Chennai"
};

for (let key in forIn) {
    console.log(key + ": " + forIn[key]);
}

// 3.For of

const forOF = {
    name: "divya",
    age: 30,
    city: "Covai"
};

const a = Object.entries(forOF);

for (let [key, value] of a) {
    console.log(key + ": " + value);
}

// 4.For Each

const foreach = {
    name: "Mohan",
    age: 23,
    city: "mexico"
};

Object.keys(foreach).forEach(key => {
    console.log(key + ": " + foreach[key]);
});
