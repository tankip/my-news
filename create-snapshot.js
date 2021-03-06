var fs = require("fs");
const execSync = require('child_process').execSync;
const semver = require('semver')
var package = require('./package');
function main() {
    var newVersion = package.version.replace(/-SNAPSHOT/, '');
    var cleanVersion = semver.clean(newVersion);
    var nextPatch = semver.inc(cleanVersion, 'patch');
    package.version = nextPatch + '-SNAPSHOT';
    var cb = execSync('git symbolic-ref --short HEAD').toString().trim();
    execSync('git checkout master');
    fs.writeFileSync('package.json', JSON.stringify(package, null, 4));
    execSync('git add .');
    execSync(`git commit -m "Master Updated to ${nextPatch} snapshot "`);
    execSync(`git checkout ${cb}`);
    execSync('rm package-snapshot.json');
    
}

main();