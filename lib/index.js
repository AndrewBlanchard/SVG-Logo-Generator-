import { writeFile } from 'fs';
import inquirer from 'inquirer';
import { Circle, Square, Triangle } from './lib/shapes.js';
class SvgGenerator {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

const questions = [

];

async function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]");
    writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}
async function init() {
    console.log("Starting init");
    const svgString = "";
    const svgFile = "logo.svg";
    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);
    // User text
    var userText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        // 1-3 chars, valid entry
        userText = answers.text;
    } else {
        // 0 or 4+ chars, invalid entry
        console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
        return;
    }
    console.log("User text: [" + userText + "]");
    // font color
    var userFontColor = answers.textColor;
    console.log("User font color: [" + userFontColor + "]");
    // shape color
    var userShapeColor = answers.shapeColor;
    console.log("User shape color: [" + userShapeColor + "]");
    // shape type
    var userShapeType = answers.shape.toLowerCase();
    console.log("User entered shape = [" + userShapeType + "]");
    // shape
    let userShape;
    if (answers.shape.toLowerCase() === "square") {
      userShape = new Square();
      console.log("User selected Square shape");
    } else if (answers.shape.toLowerCase() === "circle") {
      userShape = new Circle();
      console.log("User selected Circle shape");
    } else if (answers.shape.toLowerCase() === "triangle") {
      userShape = new Triangle();
      console.log("User selected Triangle shape");
    } else {
      console.log("Invalid shape!");
      return;
    }
    userShape.setColor(answers.shapeColor);
    // Create a new SvgGenerator instance and add the shape and text elements to it
    var svg = new SvgGenerator();
    svg.setTextElement(userText, userFontColor);
    svg.setShapeElement(userShape);
    svgString = svg.render();
    // Print shape to log
    console.log("Displaying shape:\n\n" + svgString);
    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svgFile, svgString);
}
init();