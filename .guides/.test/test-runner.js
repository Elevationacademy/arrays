#!/usr/bin/env node
var jest = require('jest-cli');
const util = require('util');
const _ = require('lodash');
const exec = util.promisify(require('child_process').exec);
const spawn = require('child_process').spawn;
const fs = require('fs');
const Promise = require('bluebird');

var args = process.argv.splice(process.execArgv.length + 1);
var testName = args[1];
runTests(testName).then(processTestResults);

function runTests(testName) {
    return new Promise(function (resolve) {
        var childProcess = spawn('jest', [testName]);
        childProcess.on('exit', function () {
            resolve();
        });
    });
}

function processTestResults() {
    var results = JSON.parse(fs.readFileSync('./test-results.json'));
    // No failed tests - pass the exercise
    if (results && results.numFailedTests === 0 && results.numFailedTestSuites === 0) {
        console.log("Well done!");
        process.exit(0);
    }

    else {
        var failureMessage = "";
        results.testResults[0].testResults.forEach((t) => {
            if (t.status == 'failed') {
                failureMessage = failureMessage + t.fullName + "\n";
            }
        });
        
        failureMessage ?
            console.log("One or more tests failed:\n" + failureMessage)
            : console.log("There was an error testing your code. Please make sure it runs before testing.")
        process.exit(1);
    }
}

exports.runTests = runTests;