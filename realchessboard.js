let result = "";
let size = prompt("What size do you want your chessboard?");

console.log(
    "\n\n",
    "/-----\\ ||     || |-----| /-----\\ /-----\\", "\n",
    "|       ||     || |       |       |       ", "\n",
    "|       ||-----|| |---|   \\-----\\ \\-----\\", "\n",
    "|       ||     || |             |       |", "\n",
    "\\-----/ ||     || |-----| \\-----/ \\-----/",
    "\n\n"
);

for (let counter = 0; counter < size; counter++) {
    for (let counter2 = 0; counter2 < size/2; counter2++) {
        if (counter % 2 > 0) {
            for (let counter3 = 0; counter3 < size; counter3++) {
                if (counter3 % 2 > 0) {
                    result += "H".repeat(size);
                } else {
                    result += "/".repeat(size);
                };
            };
        } else {
            for (let counter3 = 0; counter3 < size; counter3++) {
                if (counter3 % 2 > 0) {
                    result += "/".repeat(size);
                } else {
                    result += "H".repeat(size);
                };
            };
        };
        result += "\n";
    };
};

console.log(result);