// 1. create package.json
> npm init 

// 2. install underscore, see package.json changes
> npm install underscore

// 3. check require file in order
//- Core module
//- File or folder
//- node_modules

// 4. install mongoose, see package.json changes
> npm install mongoose

// 5. delete node_modules folder, 
> npm install // the node_modules folder show again

// 6. git
> git init
> git status

// 7. add .gitignore under the root
// 8. add node_modules/ inside .gitignore file
> git status

// 9. version
// Major.Minor.Patch  -> patch is bug fix version
// ^4.12.8 same as 4.x
// ~4.12.8 same as 4.12.x
> npm list
> npm list --depth=0

// 10. update local package
//https://www.udemy.com/nodejs-master-class/learn/v4/t/lecture/9990364?start=15

// 11. dependencies
> npm install jshint --save-dev

// 12. globle version
// check globle version
> npm -g outdated
// install globle version
> npm install -g npm
// npm i -g npm@6.1.0
// uninstall > npm un -g xxx@x.x.x
