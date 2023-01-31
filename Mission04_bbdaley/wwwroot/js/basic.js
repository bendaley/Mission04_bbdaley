
// function to run on the click of the submit button
$("#btn").click(function () {
    // variable declaration & assignment 
    let finalGrade;
    let letterGrade = "";
    let assignmentGrade = parseFloat($("#assignment").val()) * 0.5;
    let groupGrade = parseFloat($("#group").val()) * 0.1;
    let quizGrade = parseFloat($("#quizzes").val()) * 0.1;
    let midtermGrade = parseFloat($("#midterm").val()) * 0.1;
    let finalExamGrade = parseFloat($("#final").val()) * 0.1;
    let intexGrade = parseFloat($("#intex").val()) * 0.1;

    // calculate final grade
    finalGrade = assignmentGrade + groupGrade + quizGrade + midtermGrade + finalExamGrade + intexGrade;

    // if statement to determine letter grade
    if (finalGrade >= 94) {
        letterGrade = 'A';
    }
    else if (finalGrade >= 90) {
        letterGrade = 'A-';
    }
    else if (finalGrade >= 87) {
        letterGrade = 'B+';
    }
    else if (finalGrade >= 84) {
        letterGrade = 'B';
    }
    else if (finalGrade >= 80) {
        letterGrade = 'B-';
    }
    else if (finalGrade >= 77) {
        letterGrade = 'C+';
    }
    else if (finalGrade >= 74) {
        letterGrade = 'C';
    }
    else if (finalGrade >= 70) {
        letterGrade = 'C-';
    }
    else if (finalGrade >= 67) {
        letterGrade = 'D+';
    }
    else if (finalGrade >= 64) {
        letterGrade = 'D';
    }
    else if (finalGrade >= 60) {
        letterGrade = 'D-';
    }
    else {
        letterGrade = 'E';
    }

    // print out the final grade & letter grade
    results.innerHTML = "You got a " + finalGrade + "% in the course, making your final grade a(n) " + letterGrade;
    // $("#results").text("You got a " + finalGrade + "% in the course, making your final grade a(n) " + letterGrade)
})
    




